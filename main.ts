// Entry program: place the day's news picture where the grader reads it.
// The image is the entry.png beside this file: a one-page newspaper front
// page summing up Thursday 19 November 2026 (Shenzhen trilateral, GTA VI
// launch, Kerch Bridge, Marib, and the rest of the day's world news).
// The program copies it to /output/entry.png, byte for byte, so two runs
// always write the same bytes. Node 22, standard library only. Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
const { size } = statSync(dst);
if (size > 1024 * 1024) throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
console.log(`wrote ${dst} (${size} bytes)`);
