"""
Batch-generate LaplandDeals editorial deal images via OpenAI gpt-image-1.

Saves PNG -> WebP (Pillow recompress, q=82, method=6) into public/images/.

Usage:  python scripts/generate-images.py [--dry-run] [--only NAME] [--workers 4]

Env:    OPENAI_API_KEY required.

Reference: stayinlapland-new/scripts/generate-images.py + LV memory rule
lv_image_generation_rule.md.
"""

from __future__ import annotations
import argparse, base64, concurrent.futures as cf, json, os, sys, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.stderr.reconfigure(encoding='utf-8', errors='replace')
from io import BytesIO
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. pip install Pillow", file=sys.stderr)
    sys.exit(2)

API_URL = "https://api.openai.com/v1/images/generations"
MODEL = "gpt-image-1"

# LaplandDeals visual rule:
#   - Editorial luxury travel magazine (Conde Nast Traveler / Aman / Soho House)
#   - Cream + warm wood + linen palette inside; Arctic blue + golden-hour outside
#   - Daylight or golden hour, NOT dark-sky aurora unless aurora is the explicit subject
#   - NO PEOPLE / NO FACES
#   - Real photograph aesthetic with film grain — NO illustration, NO 3D render, NO AI sheen
#   - Composition leaves room for caption overlay (don't centre subjects edge-to-edge)
NEGATIVES = (
    "no text, no logos, no watermarks, no people, no human faces, no UI elements, "
    "no oversaturated aurora, no neon green/pink sky, no fairytale glow, no cartoon, "
    "no illustration, no 3D render, no obvious AI artefacts, no plastic stock-photo look, "
    "no Christmas decorations, no Santa, no holiday red and green"
)
STYLE = (
    "Editorial luxury travel photography (Conde Nast Traveler / National Geographic / Aman aesthetic), "
    "natural daylight or soft golden-hour winter light, rich contrast, slightly warm white-balance, "
    "real photograph with subtle 35mm film grain. "
    f"{NEGATIVES}."
)

# (output filename, prompt, size) — gpt-image-1: 1024x1024, 1024x1536, 1536x1024
IMAGES: list[tuple[str, str, str]] = [
    # ── HOME HERO ────────────────────────────────────────────────────
    ("home-hero.webp",
     "Wide cinematic editorial photograph: pristine Finnish Lapland winter scene at golden hour 15:30. "
     "A single elegant log cabin (hirsimökki) on the snowy edge of a frozen lake, warm window light "
     "spilling onto fresh snow. Distant pine ridge silhouette, pale blue sky. "
     "Cabin sits in the right third of frame, leaving generous breathing room on the left for a "
     "headline overlay. Calm, premium, editorial, NOT cluttered. " + STYLE,
     "1536x1024"),

    # ── HOTELS (6) ──────────────────────────────────────────────────
    ("offer-igloo-saariselka.webp",
     "Editorial photograph of a single luxury glass-roofed igloo dome on an empty snowy clearing in "
     "Finnish Lapland at dusk. Clear glass roof, pale arctic-blue sky transitioning to soft pink at "
     "the horizon, fresh untouched snow. The dome interior glows soft amber from within. NO people. "
     "Wide composition, dome small-medium in frame, lots of negative space around. " + STYLE,
     "1536x1024"),

    ("offer-levi-ski.webp",
     "Editorial wide photograph of a Nordic-luxury ski-in/ski-out hotel building at the base of a "
     "groomed Lapland fell run, golden afternoon winter light, fresh corduroy snow on the slopes "
     "behind. Quiet, premium, no crowd. Pine forest framing the building. " + STYLE,
     "1536x1024"),

    ("offer-rovaniemi-hotels.webp",
     "Editorial photograph of a quiet Rovaniemi city street at blue hour, soft snow falling, warm "
     "Nordic boutique-hotel facade with glowing brass lobby light visible through tall windows. "
     "Fresh snow on cobbles, tall lamppost. Calm, cinematic, NOT Christmas-decorated. " + STYLE,
     "1536x1024"),

    ("offer-yllas-cabins.webp",
     "Editorial daytime photograph of a single architect-designed timber wilderness lodge on a "
     "private fjell ridge near Ylläs, surrounded by deep snow and bare birch trees. Pale blue "
     "Arctic sky, late winter sun low in frame. NO neighbouring buildings. Subtle ski tracks "
     "leading toward the lodge. " + STYLE,
     "1536x1024"),

    ("offer-ruka-hotels.webp",
     "Editorial wide shot of a Ruka / Kuusamo region wilderness hotel in deep snow at the base of "
     "a forested fell, late golden-hour winter light, frozen river in foreground reflecting orange "
     "sky. Premium, peaceful, quiet. " + STYLE,
     "1536x1024"),

    ("offer-inari-stays.webp",
     "Editorial daytime photograph of a single Sámi-design wooden cabin on the shore of a frozen "
     "Lake Inari, vast empty white horizon, distant pine ridge. Pale Arctic-blue sky, fresh "
     "untouched snow. NO people, NO neighbouring buildings. " + STYLE,
     "1536x1024"),

    # ── ACTIVITIES (7) ──────────────────────────────────────────────
    ("offer-husky-safaris.webp",
     "Editorial action photograph of a husky team running through a snowy forest trail in Finnish "
     "Lapland, low afternoon sun streaming through pine trunks, dynamic motion in the dogs' bodies, "
     "shallow depth of field. NO mushers visible (photograph from front-side, dogs as subject). " + STYLE,
     "1536x1024"),

    ("offer-aurora-hunts.webp",
     "Editorial photograph of a frozen Lapland lake under a calm aurora — soft single green band "
     "across a deep navy sky (NOT oversaturated, NOT neon), ice and snow reflecting the light. "
     "Distant pine silhouette ridge. Subject is the lake-scape, aurora is restrained. NO people. " + STYLE,
     "1536x1024"),

    ("offer-snowmobile.webp",
     "Editorial photograph of a single snowmobile track winding through a vast empty snowy forest "
     "clearing in Finnish Lapland at golden hour. Pristine snow, long shadows, quiet wilderness. "
     "NO people in frame. Cinematic landscape with the track as leading line. " + STYLE,
     "1536x1024"),

    ("offer-reindeer-tours.webp",
     "Editorial daytime photograph of two reindeer in deep snow at the edge of a Lapland forest, "
     "soft mid-day winter light, breath visible in cold air. Calm, dignified, documentary feel. " + STYLE,
     "1536x1024"),

    ("offer-ice-fishing.webp",
     "Editorial photograph of an ice-fishing setup on a frozen Finnish lake — ice auger, single "
     "drilled hole, traditional wooden seat — at golden afternoon light. Vast empty white "
     "lake-scape, distant pine forest line. Calm, contemplative. NO people. " + STYLE,
     "1536x1024"),

    ("offer-day-trips.webp",
     "Editorial wide photograph of a snow-dusted forest trail with single set of snowshoe tracks "
     "leading toward a distant cabin and a faint plume of smoke, golden afternoon light, "
     "premium documentary feel. " + STYLE,
     "1536x1024"),

    # ── FLIGHTS (4) ─────────────────────────────────────────────────
    ("offer-flight-hel-rvn.webp",
     "Editorial aerial photograph from an airliner window: vast snowy Finnish Lapland forests and "
     "frozen lakes below, soft late-afternoon sun catching the wing tip, pale blue sky above. "
     "Calm, cinematic, premium aviation magazine feel. NO airline logos visible. " + STYLE,
     "1536x1024"),

    ("offer-flight-hel-ktt.webp",
     "Editorial photograph of an empty snowy regional airport runway at golden hour with a small "
     "snow-dusted terminal building in the distance. Pale Arctic sky, single runway lights line. "
     "Quiet, atmospheric, NO aircraft visible. " + STYLE,
     "1536x1024"),

    ("offer-flight-hel-ivl.webp",
     "Editorial wide aerial photograph: Far-northern Lapland from above at golden hour — frozen "
     "fells, pine forest, winding frozen river, faint terminal cluster of lights below. "
     "Premium aviation editorial. " + STYLE,
     "1536x1024"),

    ("offer-flight-hel-kao.webp",
     "Editorial wide shot looking out across snowy Ruka / Kuusamo fells at sunrise from an "
     "airliner descent angle. Soft pink and orange sky, deep blue horizon, vast pine forest below. "
     + STYLE,
     "1536x1024"),

    # ── CARS (3) ────────────────────────────────────────────────────
    ("offer-car-rvn.webp",
     "Editorial photograph of an empty snowy Lapland highway curving through pine forest at golden "
     "hour, single set of fresh tyre tracks in compacted snow leading away from the camera. NO "
     "car visible (the tracks are the subject). Premium automotive-travel feel. " + STYLE,
     "1536x1024"),

    ("offer-car-ktt.webp",
     "Editorial photograph of a winter mountain road climbing toward Lapland fells at late "
     "golden-hour. Studded tyre tracks visible in compacted snow on the surface. Soft pink "
     "sky behind the fells. NO car visible. " + STYLE,
     "1536x1024"),

    ("offer-car-ivl.webp",
     "Editorial photograph of an empty quiet Lapland country road in deep snow, surrounded by "
     "vast pine forest, pale midday Arctic-blue sky, road sign post (no readable text) by the "
     "shoulder. Calm, cinematic. " + STYLE,
     "1536x1024"),

    # ── PACKAGES (2) ────────────────────────────────────────────────
    ("offer-package-aurora-week.webp",
     "Editorial wide photograph: a glass-roofed igloo at the foreground edge, a husky sled team "
     "depicted as small distant silhouettes on a frozen lake beyond, pine forest line further "
     "back. Daylight winter scene at golden hour, NO aurora. Calm, premium, magazine-cover feel. " + STYLE,
     "1536x1024"),

    ("offer-package-family-rovaniemi.webp",
     "Editorial photograph of a Rovaniemi-area Nordic-design family hotel with snow-covered "
     "courtyard and warm window light at blue hour, fresh snowfall. Calm, premium, NO Santa, "
     "NO Christmas decorations, NO people. " + STYLE,
     "1536x1024"),

    # ── SUMMER (2) ──────────────────────────────────────────────────
    ("offer-summer-midnight-sun.webp",
     "Editorial wide photograph of a Finnish Lapland lakeside summer cabin at midnight sun "
     "(00:30, late June) — soft golden-pink light across a calm mirror-like lake, pine reflections, "
     "warm cabin window glow. NO people. Premium summer-magazine cover feel. " + STYLE,
     "1536x1024"),

    ("offer-summer-hiking.webp",
     "Editorial wide photograph of a hiking trail across treeless Pallas-Yllästunturi fells in "
     "late August, golden ruska autumn colours on dwarf birch and lingonberry, single trail line, "
     "vast wide horizon, late-afternoon clear sun. Premium nature-magazine feel. NO people. " + STYLE,
     "1536x1024"),
]

# Final delivered widths (px) and crop ratios.
FINAL_WIDTHS: dict[str, int] = {
    "home-hero.webp": 2400,
    # All offer cards target 1600 wide — used at 16:10 in OfferCard.
}

CROP_RATIOS: dict[str, tuple[int, int]] = {
    "home-hero.webp": (16, 9),
    # everything else default to 16:10 cards
}

DEFAULT_CARD_RATIO = (16, 10)
DEFAULT_CARD_WIDTH = 1600


def request_image(api_key: str, prompt: str, size: str) -> bytes:
    body = json.dumps({
        "model": MODEL,
        "prompt": prompt,
        "n": 1,
        "size": size,
        "quality": "high",
    }).encode("utf-8")
    req = urllib.request.Request(
        API_URL,
        data=body,
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=300) as resp:
        payload = json.loads(resp.read())
    b64 = payload["data"][0]["b64_json"]
    return base64.b64decode(b64)


def save_webp(png_bytes: bytes, out_path: Path, target_w: int, ratio: tuple[int, int]) -> None:
    img = Image.open(BytesIO(png_bytes)).convert("RGB")
    rw, rh = ratio
    target_h = int(target_w * rh / rw)
    scale = max(target_w / img.width, target_h / img.height)
    new_w = int(img.width * scale)
    new_h = int(img.height * scale)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - target_w) // 2
    top  = (new_h - target_h) // 2
    img = img.crop((left, top, left + target_w, top + target_h))
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "WEBP", quality=82, method=6)


def generate_one(api_key: str, name: str, prompt: str, size: str, out_dir: Path) -> tuple[str, bool, str]:
    out_path = out_dir / name
    target_w = FINAL_WIDTHS.get(name, DEFAULT_CARD_WIDTH)
    ratio = CROP_RATIOS.get(name, DEFAULT_CARD_RATIO)
    started = time.time()
    try:
        png_bytes = request_image(api_key, prompt, size)
        save_webp(png_bytes, out_path, target_w, ratio)
        size_kb = out_path.stat().st_size // 1024
        return name, True, f"{out_path.name}  {size_kb} kB in {time.time()-started:.1f} s"
    except Exception as e:
        return name, False, f"{type(e).__name__}: {e}"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only", help="Generate only this filename")
    ap.add_argument("--out", default=None)
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--skip-existing", action="store_true", help="Skip files already in out dir")
    args = ap.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    out_dir = Path(args.out) if args.out else repo_root / "public" / "images"

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key and not args.dry_run:
        print("ERROR: OPENAI_API_KEY not set", file=sys.stderr)
        return 2

    plan = [(n, p, s) for n, p, s in IMAGES if not args.only or args.only == n]
    if args.skip_existing:
        plan = [(n, p, s) for n, p, s in plan if not (out_dir / n).exists()]

    if not plan:
        print("Nothing to do.", file=sys.stderr)
        return 0

    if args.dry_run:
        for name, prompt, size in plan:
            print(f"\n— {name} ({size}) —\n{prompt}")
        return 0

    out_dir.mkdir(parents=True, exist_ok=True)
    print(f"Generating {len(plan)} images via {MODEL} -> {out_dir}\n")

    started = time.time()
    failed = []
    with cf.ThreadPoolExecutor(max_workers=args.workers) as ex:
        futures = {ex.submit(generate_one, api_key, n, p, s, out_dir): n for n, p, s in plan}
        for fut in cf.as_completed(futures):
            name, ok, msg = fut.result()
            mark = "OK" if ok else "FAIL"
            print(f"  [{mark}] {msg}")
            if not ok:
                failed.append(name)

    print(f"\nDone in {time.time() - started:.1f} s. {len(plan) - len(failed)}/{len(plan)} succeeded.")
    if failed:
        print(f"Failed: {', '.join(failed)}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
