// One Line, One Laugh — a one-line entry for make.fun's
// u-plucky-finch-20-one-line-one-laugh-0ffe66ea bounty. The program writes
// the line to /output/entry.txt (the grader's container mounts /output;
// MAKEFUN_OUTPUT_DIR stands in for it locally).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  'My Wi-Fi went down for five minutes today, so I had to talk to my family. They seem nice.';

// The bounty caps a line at 200 characters; fail loudly instead of
// submitting an over-long entry the gate would refuse.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line);
process.stdout.write(`wrote ${join(outDir, 'entry.txt')} (${line.length} characters)\n`);
