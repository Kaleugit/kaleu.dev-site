import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const label = process.argv[2] ?? 'shot';
const lang = process.argv[3] ?? 'pt';
const base = 'http://localhost:3000';

const routes = [
  ['home', '/'],
  ['sobre-mim', '/sobre-mim'],
  ['projetos', '/projetos'],
  ['contato', '/contato'],
  ['proj-a-casa-do-patrao', '/projetos/a-casa-do-patrao'],
  ['proj-influlens', '/projetos/influlens'],
  ['proj-moldura', '/projetos/moldura'],
  ['proj-race-game', '/projetos/race-game'],
  ['proj-tempo-jiggler', '/projetos/tempo-jiggler'],
];

const viewports = [
  ['web', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
];

const outDir = `screenshots/${label}`;
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
for (const [vpName, viewport] of viewports) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  await page.addInitScript((l) => localStorage.setItem('lang', l), lang);
  for (const [name, path] of routes) {
    await page.goto(base + path, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `${outDir}/${name}--${vpName}.png`, fullPage: true });
    console.log(`${name}--${vpName}.png`);
  }
  await page.close();
}
await browser.close();
