// assert-newsletter-wired.mjs — kaataa buildin jos uutiskirjelomakkeen fetch
// EI paatynyt bundleen. Aja vite buildin JALKEEN (css-budgetin jalkeen).
//
// 🔴🔴 MIKSI TAMA ON OLEMASSA (2026-08-21, tuotantovika, yopartio loysi):
// NewsletterSectionin fetch oli muodossa `if (SUPABASE_URL && SUPABASE_ANON_KEY)
// { fetch(...) }`, ja VITE_SUPABASE_* -arvot tulevat .env:sta. Kun .env puuttui
// build-hetkella, molemmat olivat undefined ja bundleri poisti KOKO fetch-lohkon
// kuolleena koodina. Jaljelle jai setState('ok') -> lomake naytti "You're on
// the list" lahettamatta yhtaan pyyntoa. Build meni lapi, konsoli puhdas,
// sivu renderoityi — ainoa oire oli 0 verkkopyyntoa (setDone-vikaluokka,
// sama kuin skiresorts 14.8. ja appi 18.8.).
//
// Lahdekoodi on sittemmin korjattu kaatumaan ajossa jos config puuttuu, mutta
// se nakyy kayttajalle virheena — taman portin tehtava on estaa sellaisen
// buildin paatyminen deployhin ylipaataan.
//
// KORJAUS jos tama portti laukeaa: varmista etta laplanddeals-new/.env on
// olemassa ja sisaltaa VITE_SUPABASE_URL + VITE_SUPABASE_PUBLISHABLE_KEY
// (samat jaetut arvot kuin sisarsivustoilla, esim. laplandstays-new/.env),
// ja aja build uudelleen.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'dist/assets';
// Sektion analytiikkatagi ja fetchin polku elavat SAMASSA funktiossa, joten
// ehjassa buildissa ne ovat samassa chunkissa. Supabase-host todistaa etta
// env-arvo leipoutui bundleen (pelkka polku sailyy myos rikkinaisessa
// popup-templatessa, joten host on se erotteleva markkeri).
const ANCHOR = 'laplanddeals-section';
const HOST = 'oogioaxmfnqcbvjbcodh.supabase.co';
const PATH_MARKER = 'functions/v1/send-welcome-email';

const files = readdirSync(DIR).filter((f) => f.endsWith('.js'));
const anchorFiles = files.filter((f) => readFileSync(join(DIR, f), 'utf8').includes(ANCHOR));
const wired = anchorFiles.filter((f) => {
  const js = readFileSync(join(DIR, f), 'utf8');
  return js.includes(HOST) && js.includes(PATH_MARKER);
});

if (anchorFiles.length === 0 || wired.length === 0) {
  console.error('');
  console.error('❌ [newsletter-wired] LOMAKKEEN FETCH PUUTTUU BUNDLESTA — ALA DEPLOYAA');
  if (anchorFiles.length === 0) {
    console.error(`   yhdessakaan chunkissa ei ole "${ANCHOR}" — koko lahetyspolku on karsiutunut`);
  } else {
    console.error(`   "${ANCHOR}" loytyi (${anchorFiles.join(', ')}), mutta samasta chunkista`);
    console.error(`   puuttuu ${HOST} tai ${PATH_MARKER}`);
  }
  console.error('   Syy lahes varmasti: VITE_SUPABASE_* puuttui build-hetkella (.env poissa),');
  console.error('   jolloin bundleri poistaa env-riippuvan fetchin kuolleena koodina.');
  console.error('   Korjaus: palauta laplanddeals-new/.env (ks. taman tiedoston kommentti) ja buildaa uudelleen.');
  console.error('');
  process.exit(1);
}
console.log(`[newsletter-wired] OK — ${wired.join(', ')}: sektion fetch + Supabase-host bundlessa`);
