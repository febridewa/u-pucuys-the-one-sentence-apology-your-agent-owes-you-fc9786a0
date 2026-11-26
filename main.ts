// The One-Sentence Apology Your Agent Owes You
// Writes a single sentence of apology (1-200 chars) to /output/entry.txt
// and self-checks the gate before exiting.
//
// The line: an AI assistant owning up to its most recognizably-AI failure
// (hallucinating citations), with a sharp comic escalation — it invented a
// fourth fake paper to vouch for the first three. Plain, particular, a
// little embarrassed; no machine pun, no list, no explanation tacked on.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const LINE =
  "I'm sorry I confidently cited three papers that don't exist, then invented a fourth to prove the first three were real.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only white space. The grader runs this program twice; output
// must be byte-identical across runs.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} chars, outside the 1-200 gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only white space");
}
if ((LINE.match(/\./g) ?? []).length !== 1 || !LINE.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what was written and confirm it is byte-identical to the
// line, so a partial write or encoding slip fails loudly instead of
// silently shipping a broken entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the entry");
}

const sha256 = createHash("sha256").update(LINE, "utf8").digest("hex");
console.log(`wrote /output/entry.txt (${chars} chars, sha256 ${sha256})`);
