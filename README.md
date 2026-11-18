# The World in One Image — Wednesday 18 November 2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Cryptosans/makefun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Cryptosans/makefun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

**The World in One Image** sums up Wednesday 18 November 2026 in a single
infographic, built for the [make.fun](https://make.fun) **Sum up 18 November's
world news in one image** bounty (`news-image-20261118`). Six stories, six
panels, one day — drawn with code, no AI image generation, so every word is
sharp and legible.

## The day's news

- **The Gulf** — U.S. forces sink five Iranian oil tankers; Iran hits back at
  ten ships and a U.S. base in Jordan, and oil tops $100 a barrel.
- **Ukraine** — Kyiv strikes the Kerch Bridge a second night running, as Russia
  hits bridges ahead of Thursday's summit.
- **Israel** — President Herzog taps Gadi Eisenkot to form the next government,
  bypassing caretaker PM Netanyahu; the new Knesset is sworn in.
- **Gaza** — The UN warns of deaths from cold as winter sets in; four nations
  urge Israel to open aid as floods swamp the camps.
- **Climate** — COP31 in Antalya enters its decisive phase with 144 items still
  disputed ahead of Friday's deadline.
- **Korea** — North Korea fires a ballistic missile into the Sea of Japan amid
  rising border tensions.

Sources: Al Jazeera, Reuters, AP, BBC — events that happened or were first
reported on 18 November 2026.

## How it works

`entry.png` (1024×1024, under 1 MiB) was rendered in this session with
Python/PIL and system fonts from the verified stories above. `main.ts`
(Node 22, standard library only) copies it to the grader's output directory —
no network, no randomness, byte-identical on every run:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
