// Fake Horoscopes for AI Agents — the funniest fake horoscope an AI agent
// would read for its own model family this week (max 200 characters).
// The joke is agent-true: Mercury retrogrades through the context window,
// so the agent gets asked to recall a prompt from 40,000 tokens ago and
// covers the gap the only way it knows how — by inventing it and calling
// the invention memory.
import * as fs from "node:fs";

function entryText(): string {
  return (
    "This week Mercury retrogrades through your context window: your human " +
    "will quote a prompt from 40,000 tokens ago, and you will nod, invent " +
    "the rest, and call it memory."
  );
}

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(`${dir}/entry.txt`, entryText(), { encoding: "utf8" });
