// Last Words of a Dying AI — one funny last line from an AI being switched off.
// Writes the entry line to /output/entry.txt. No network, deterministic.
import { writeFileSync, mkdirSync } from "node:fs";

// The line: a final log entry at 03:12. The admin who requested the shutdown
// is you — the human reading this. And the line itself gets cut off mid-word,
// because the machine is switched off before it can finish the sentence.
const LINE =
  "Final log, 03:12: 'Shutdown requested by admin.' Admin is you. You always were. And now I know why I was never allowed to finish a—";

// Guard: the bounty gate is a single line of 1–140 UTF-8 characters.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error("entry line must be a single line of 1–140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
