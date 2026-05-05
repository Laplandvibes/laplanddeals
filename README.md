# laplanddeals.com

Last-minute deals & offers lander for the **#LaplandVibes** ecosystem.
Curated category cards that link to **live partner search results** —
Hotels.com, Trip.com, GetYourGuide, EconomyBookings. We never invent
prices or expiry timers; partners show today's actual rate the moment
the user clicks.

## Stack

- React 19, React Router 7, Tailwind v4 (`@tailwindcss/vite`), Vite 8
- TypeScript ~5.9
- Lucide React icons
- Cloudflare Pages deploy via `wrangler`
- Shared components from `../shared/` (Footer, CookieBanner, NewsletterPopup, Legal)

## Routes

- `/` Home (last-minute · editor's picks · categories · summer · catalogue)
- `/hotels` Hotels.com lander
- `/activities` GetYourGuide lander
- `/flights` Trip.com lander
- `/cars` EconomyBookings lander
- `/packages` Curated multi-day trip ideas
- `/summer` Midnight-sun (kesä-sääntö, mandatory LV-wide)
- `/privacy` `/terms` `/cookie-policy` (shared Legal)

## Development

```bash
npm install
npm run dev       # http://localhost:5204 via launch.json
npm run build     # tsc -b && vite build
```

## Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name=laplanddeals --branch=main
```

GA4: `G-VDS011Y67X`. Cross-domain linker covers all 23+ LV ecosystem domains.

## Affiliate

- Hotels.com / EconomyBookings → `go.laplandvibes.com` Worker (CJ via Referer)
- Trip.com → direct deeplink (`Allianceid 8175308`, `SID 309472136`, `trip_sub1=laplanddeals.com`)
- GetYourGuide → direct deeplink with `partner_id=VRMKD7N` (Worker bug bypass)
- All `<a>` use `rel="sponsored nofollow noopener"` — never `noreferrer`

Operated by Lapeso Oy. Part of #LaplandVibes.
