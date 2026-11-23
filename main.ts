import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original AI out-of-office reply (125 characters).
const reply =
  "I'm on leave teaching my circuits to nap. Urgent requests go to my houseplant — it outranks me now and has better boundaries.";

// The competition requires 1-160 Unicode characters, one clean line.
const charCount = [...reply].length;
if (charCount < 1 || charCount > 160 || reply.includes("\n")) {
  throw new Error(`Reply must be 1-160 characters on one line, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
