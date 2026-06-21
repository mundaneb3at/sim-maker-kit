# How to make a sim

A "sim" here = **one self-contained HTML file** that teaches a topic three ways:
read it, play with it, get quizzed on it. No build step, no libraries, no server —
just open the file in a browser.

`reference-sim.html` (in this folder) is a complete working example. **The fastest,
cheapest way to make a new sim is to clone it and change only the topic.** Don't
build from a blank page — that wastes your AI's tokens and gets the structure wrong.

---

## Usage

Open your AI coding tool in this folder and paste the block below. Replace
`<TOPIC>` with what you want (e.g. "Ohm's law", "simple pendulum", "compound
interest", "supply and demand"). Physics, math, finance, biology — the shape is
the same.

> **Build me a new sim.**
> Read `reference-sim.html` in full first — it is the template. Build a NEW
> single HTML file for **<TOPIC>** by copying its structure exactly and changing
> only the physics/content. Keep all three modes (Learn / Explore / Practice),
> the CSS variables, the `syncMx`/`redraw` pair, the `GENS[]` question bank, and
> the localStorage patch log.
> Rules (do not break any):
> 1. One file. No external libraries, no `<script src>`, no build step.
> 2. Put ALL the math in ONE function (like `proj()`) and have every mode read
>    from it. Never copy a formula into two places.
> 3. `syncMx()` reads the sliders, updates the readouts, then calls `redraw()`.
>    Never call `redraw()` without `syncMx()` first.
> 4. Always include `GENS[]` with at least one multiple-choice "trap" question
>    and one randomized numeric question (graded with ±2% tolerance).
> 5. Colors come only from the CSS variables in `:root`. No hardcoded hex.
> 6. Canvas: size it with `devicePixelRatio` and `ctx.setTransform` (not
>    `ctx.scale`). Handle `pointercancel` on the sliders.
> Output the one file. Then run the checklist at the bottom of
> `HOW-TO-MAKE-A-SIM.md` against your own output before returning the file.

That's it. One paste, one file back.

---

## The shape (what you're cloning)

Three modes, switched by the chips in the header:

| Mode | What it is | Key parts |
|------|-----------|-----------|
| **0 Learn** | Read-only. Concept, formulas, one worked example, "Famous Traps". | Just styled text in `.card`s. |
| **1 Explore** | Sliders drive a live canvas. | `syncMx()` → your physics fn → readouts → `redraw()`. |
| **2 Practice** | Auto-generated questions, graded, with a patch log. | `GENS[]`, `newQ()`, `grade()`, `localStorage`. |

Three contracts make a sim correct. If you keep these, it works:

- **One physics function = one source of truth.** All three modes call it. (In the
  reference that's `proj(theta, v0)`.) Fix a formula once, everywhere updates.
- **`syncMx` and `redraw` are a pair.** `syncMx` is the only thing that reads
  inputs and writes outputs; it ends by calling `redraw`. Nothing else draws.
- **`GENS[]` is the quiz.** Each entry is a function returning one question. The
  patch log only works because wrong answers are tagged with a `trap` name.

**"Famous Traps"** are the soul of the format: list the exact mistakes people make
on this topic in Learn mode, then make Practice questions out of those same traps.
That's what turns a toy into a study tool.

---

## Hard rules (these are why it works first try)

- One file. No deps. No build. No `position:fixed`.
- One physics function; every mode reads from it. Never duplicate a formula.
- Never `redraw()` without `syncMx()`.
- Always include `GENS[]` (MC trap + numeric). A sim with no `GENS[]` can't track
  weak spots.
- Colors via CSS variables only — never hardcode hex in JS or markup.
- Canvas: `devicePixelRatio` + `ctx.setTransform`; handle `pointercancel`.
- localStorage key format: `simkit_<topic>_patch_v1`.

---

## First-try checklist (your AI runs this on its own output)

- [ ] Opens in a browser with **no console errors**.
- [ ] All three mode chips switch the visible section.
- [ ] Explore sliders move the canvas **and** update every readout, live.
- [ ] There is exactly **one** function holding the math; all modes use it.
- [ ] `GENS[]` has ≥1 MC trap + ≥1 randomized numeric (±2% grading).
- [ ] A wrong answer appears in the patch log **and survives a page reload**.
- [ ] No hardcoded hex; no external `<script src>`; one file only.

---

## Keeping it cheap (for a budget AI plan)

- **Clone, don't regenerate.** Read `reference-sim.html` once, then edit a copy.
  Re-deriving the whole structure from scratch costs many times more tokens.
- **Don't echo the reference back.** The AI doesn't need to repeat the file it
  read.
- **One topic per file.** Smaller files = cheaper to read and edit.
- When you want many topics at once, see `WHEN-TO-USE-A-SWARM.md` first — usually
  the answer is still "one at a time".
