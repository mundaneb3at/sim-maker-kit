# When to use a swarm

When building sims with this kit, it's tempting to point several AI agents at the
work in parallel. Here is when that pays off — and when it just costs you.

A **swarm** = telling your AI to run several sub-agents *in parallel* on one task
(Cursor, Claude Code, Copilot can do this). It's fast and feels powerful — and on
a metered plan it's the easiest way to exhaust your token allowance in a single run.

So the rule is short:

## Default: don't.

**Building one sim is a one-agent job. Always.** A swarm can't build a single
HTML file faster — there's only one file, so the agents just collide, duplicate
work, and you pay N times for one result. Same for editing, debugging, or
polishing a sim. One agent, one file.

## The ladder (stop at the first rung that works)

1. **One agent.** Almost everything. Building, fixing, explaining one sim.
2. **One agent, several steps.** "First do X, then Y." Cheaper than a swarm and
   you can course-correct between steps.
3. **A swarm — only when the work is both _broad_ and _independent_:** many
   separate items, no shared state, where each agent can finish without waiting
   on the others.

If the pieces depend on each other, it's not a swarm job — it's step 2.

## When a swarm actually pays off

Not building — **gathering**. Good fits:

- **Deciding what to build.** "Research 8 topics students struggle with in <course>
  and rank them" — 8 agents, one topic each.
- **Auditing many sims at once.** "Check these 20 sims for the same bug" — one
  agent per file.
- **Finding references.** "Search for open-source examples of <thing> across these
  sources" — one agent per source.

The test: *could you hand each agent its slice on a separate sticky note and never
have them talk?* If yes, swarm. If no, one agent.

## The catch: swarms make things up

Parallel research agents confidently invent citations, stats, and "facts" — a
real, measured failure mode. **Never trust swarm research output as-is.** Before
you build on it, spot-check the load-bearing claims against a primary source (the
actual paper, doc, or page). One fabricated "students struggle with X" sends you
building the wrong sim.

## Before any swarm (the token gate)

1. **Check your usage first.** A swarm of 8 agents is roughly 8× the cost of one.
   On a budget plan, know what you have left before you fire.
2. **Cap the fan-out.** Start with 3–5 agents, not 20. You can always run another
   batch.
3. **Ask: would one agent doing this sequentially be good enough?** Usually yes,
   and it's a fraction of the cost.

**Rule of thumb:** swarm to *find out what to build*, never to *build it*.
