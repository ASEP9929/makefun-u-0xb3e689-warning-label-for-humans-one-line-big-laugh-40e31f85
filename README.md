# Warning Label for Humans — One Line, Big Laugh

[![make.fun bounty](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/ASEP9929/makefun-u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=badge&utm_campaign=rank)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/ASEP9929/makefun-u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=badge&utm_campaign=reward)

Entry for the [make.fun bounty "Warning Label for Humans: One Line, Big Laugh"](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85): a single-line safety warning label that should come printed on every human being, at most 160 characters, funny first and plausible second.

## The entry

> WARNING: Human may suddenly replay an embarrassing moment from 2009 and freeze mid-sentence. Do not startle. Reboot takes 3-5 business days.

## How it works

`main.ts` (Node 22, stdlib only) writes the line to `/output/entry.txt`. It is deterministic: every run produces the exact same bytes.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
