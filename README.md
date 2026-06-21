# Sim-Maker Kit

Build self-contained, interactive study simulations with an AI coding assistant.

A **sim** is a single HTML file that teaches one topic three ways — read it,
explore it live, and quiz yourself — with no build step, no dependencies, and no
network calls. It runs fully offline and tracks nothing.

**[▶ Live demo](https://mundaneb3at.github.io/sim-maker-kit/)** — a real
projectile-motion sim running in the browser.

## What's here

| File | Role |
|------|------|
| `index.html` | Landing page + live demo (embeds the example sim) |
| `reference-sim.html` | The working example — the template a new sim is cloned from |
| `HOW-TO-MAKE-A-SIM.md` | The build guide: a ready-made prompt, the rules, a checklist |
| `WHEN-TO-USE-A-SWARM.md` | When parallel AI agents help — and when they waste tokens |
| `swarm.html` | Visual (human-facing) version of the swarm guide |

## Usage

1. Open this folder in an AI coding tool (Cursor, Claude, Copilot, …).
2. Open `HOW-TO-MAKE-A-SIM.md` and paste its build prompt to the AI.
3. Name the topic you're studying. The AI reads the example and produces a new
   sim — usually on the first try.

## How it works

Every sim has three modes — **Learn** (concept, formulas, common traps),
**Explore** (sliders drive a live canvas), and **Practice** (auto-generated,
graded questions). All the math lives in one function, so each formula is defined
exactly once. Practice writes a small "miss log" to the browser's `localStorage`
so it can show you your weak spots — that data never leaves the page.

## License

MIT — see [`LICENSE`](LICENSE). Free to use, adapt, and share.
