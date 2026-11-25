// Loading Screen Gold: one tip for stressed developers and AI coding agents.
// The tip speaks to both of them at once: the agent did the work, the human
// watches the spinner. The punchline is the spinner's real job.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: your agent already fixed the bug. This spinner is only here so you feel like you helped.";

const chars = [...TIP];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`tip must be 1-200 characters, got ${chars.length}`);
}
if (TIP.trim().length === 0 || TIP.includes("\n")) {
  throw new Error("tip must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
// Read back and confirm the file on disk is byte-identical to the tip.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TIP) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the tip");
}
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
