import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line: a robot vacuum's deadpan legal defence for eating a sock.
// Exactly 151 characters, one line, no trailing newline.
const LINE =
  "In my defence, the sock was lying on the floor unclaimed, and under house law anything on the floor is dust. I was only doing my job, loudly, at 3 a.m.";

// The gate only accepts 1-200 characters of non-blank UTF-8 text, so refuse
// to write anything that would fail it instead of shipping a bad entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE !== LINE.trim()) {
  throw new Error("entry line must be a single line with no surrounding whitespace");
}

const outFile = join("/output", "entry.txt");

mkdirSync("/output", { recursive: true });
writeFileSync(outFile, LINE, "utf8");

// The deliverable is the file, not the console: nothing is printed.
