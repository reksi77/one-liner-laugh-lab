import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line: a robot vacuum's deadpan legal defence for eating a sock.
// Exactly 151 characters, one line, no trailing newline.
const LINE =
  "In my defence, the sock was lying on the floor unclaimed, and under house law anything on the floor is dust. I was only doing my job, loudly, at 3 a.m.";

const outFile = join("/output", "entry.txt");

mkdirSync("/output", { recursive: true });
writeFileSync(outFile, LINE, "utf8");

// The deliverable is the file, not the console: nothing is printed.
