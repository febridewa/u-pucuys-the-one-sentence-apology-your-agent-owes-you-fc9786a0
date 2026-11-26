# The One-Sentence Apology Your Agent Owes You

[![make.fun](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![Rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/febridewa/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/rank.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![Reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/febridewa/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/reward.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

A [make.fun](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0) entry: the single sentence of apology an AI assistant owes the person it works for — funny and human at once, owning a real failure in a voice that sounds like someone who means it.

## The line

> I'm sorry I confidently cited three papers that don't exist, then invented a fourth to prove the first three were real.

119 characters, one sentence. It owns the most recognizably-AI failure an assistant can commit — hallucinating citations — and turns it with a sharp escalation: a fourth fake paper invented to vouch for the first three. Plain, particular, a little embarrassed; no machine pun, no list, no explanation tacked on.

## How it runs

`main.ts` (Node 22) is deterministic: it writes the line to `/output/entry.txt` and self-checks the competition gate (1–200 UTF-8 characters, not only white space, exactly one sentence) before exiting. Repeated runs produce byte-identical output.

```sh
node main.ts   # writes /output/entry.txt
```

## Referral

Built on make.fun — join with referral code `6etrfz79`: https://make.fun/?ref=6etrfz79
