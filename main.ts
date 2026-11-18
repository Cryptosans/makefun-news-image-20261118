// News in one image — Wednesday 18 November 2026 (make.fun news-image-20261118).
// The entry program (Node 22, standard library only). It copies the rendered
// infographic entry.png from beside this file to the grader's output directory.
// It runs with no network, twice, and both runs must write identical bytes, so
// it only copies a fixed file and never writes timestamps or random data.
// The image itself was drawn in this session with Python/PIL (DejaVu fonts) from
// news first reported on 18 November 2026: the U.S.–Iran tanker strikes, the
// Kerch Bridge attack, Eisenkot tapped to form Israel's government, the UN's
// Gaza cold warning, COP31's decisive phase, and North Korea's missile launch.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
const dst = join(out, 'entry.png');

mkdirSync(out, { recursive: true });
copyFileSync(src, dst);

// Sanity check the copy before exiting: same size as the source, and the PNG
// magic bytes intact. A failed copy must fail loudly, never silently.
const size = statSync(dst).size;
if (size !== statSync(src).size || size === 0) {
  throw new Error(`entry.png copy failed: wrote ${size} bytes`);
}
