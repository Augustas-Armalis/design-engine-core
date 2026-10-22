# design-engine-core

Larpo's front-end design engine, packaged for its two jobs:

1. **Designs for the day (X):** plan 3-5 posts across the founders' accounts from a library of finished designs, with formats, crops, times and captions, and hand off a file. The engine plans; people post.
2. **Review and fix:** render any page, measure it against the canon (radius ladder, edges and shadows, type tuples, button grammar, centring, crops and fades, contrast, cut-off text) and fail it until it is right.

It is not a model. It is the rules, tools and memory around one: the founders' verdicts (`knowledge/founder/`), the canon per kind of work (`knowledge/founder/canon/`, `system/canon/`), the measuring tools (`tools/`), the finished work (`library/`) and the replica app that renders our own fictional brands (`work/replicas/app`). Open Claude Code in this folder and it reads `CLAUDE.md` and the router skill `.claude/skills/design-engine/SKILL.md`.

This is the public package of the engine as of 2026-10-22. Third-party study material, client work and teammates' private code stay in the private engine; `PACKAGE-REPORT.md` lists what is in here and what was left out, and why.

## Install

Node 22+, Python 3 (stdlib only), macOS or Linux.

```bash
npm ci                                   # tools: Playwright + axe-core
npx playwright install chromium          # the browser the tools measure with
npm ci --prefix work/replicas/app        # the replica app (Vite + React + Tailwind v4)
python3 tools/build_index.py             # rebuild system/rules/index.json after any change to knowledge/
```

## Run the replica app

```bash
npm run dev --prefix work/replicas/app -- --port 4396 --strictPort
```

Routes (all fictional brands, sample data):

| Route | What it is |
|---|---|
| `#/h4a` | Tempra hero (1440x1035 frame) |
| `#/cprodb` | Tempra product, the week view with the Ask rail (1392x932 canvas) |
| `#/cbentol` | Tempra dark feature bento (1440x1200) |
| `#/panelry` | Panelry hiring product, pipeline and debrief (1392x932 canvas) |
| `#/xframe?src=cprodb&x=1017&y=16` | an X crop of any route, rendered at the crop size |
| `#/pfneg` | the preflight's negative control: one planted defect per probe. Never ship it |

## Job 2: review and fix (the preflight)

One command before every delivery. It runs the gate's canon censuses, the design view, the correctness check, the clip scan and the probes, writes `reports/<name>/preflight.md` and exits 1 on any FAIL.

```bash
nice -n 19 node tools/preflight.mjs "http://localhost:4396/#/h4a" --kind hero-light --name tempra-hero --w 1440 --h 1035
nice -n 19 node tools/preflight.mjs "http://localhost:4396/#/pfneg" --kind product-ui --name pfneg --w 1200 --h 800   # must FAIL
nice -n 19 node tools/preflight.mjs https://your-site.example --kind audit --name your-site                           # any URL
```

Kinds: `hero-light`, `hero-dark`, `full-website`, `section-bento`, `product-ui`, `client-app`, `branding`, `logo`, `post-component`, `audit`, `motion`. Checks and calibration: `docs/PREFLIGHT.md`. The full review-and-fix loop (findings ranked with the measured evidence, fix in source, sweep for the same drift, prove it with `tools/style_diff.mjs`) is Mode B in the router.

Single tools: `tools/gate.mjs` (canon censuses), `tools/check.mjs` (correctness and contrast), `tools/design_view.mjs` (side by side with the accepted references), `tools/clipscan.cjs` (things cut off), `tools/style_diff.mjs` (computed-style diff between two builds), `tools/compare.mjs` (onion-skin overlay against a reference PNG), `tools/probe.mjs` (pixel colours, edges, text boxes).

## Job 1: designs for the day (X)

```bash
node tools/x_plan.mjs plan --date 2026-10-24      # library/x-days/<date>/plan.md, plan.json, x-handoff.json
node tools/x_plan.mjs sheet --date 2026-10-24     # day.png: every post at X's 514px feed tile
node tools/x_plan.mjs posted --date 2026-10-24    # after posting: what went out, for the next plan
node tools/library.mjs check                      # manifests, renders, sizes, formats, series
nice -n 19 node tools/library.mjs render tempra/product-week   # re-render an asset and re-run its preflight (needs the app running)
```

How the planner decides: `docs/X-PLANNER.md`. The library format: `docs/LIBRARY.md`. Accounts, formats, captions and the rotation: `system/x/`. The rules behind them: `knowledge/x/`. It never posts, schedules or sends anything.

## Layout

| Path | What it is |
|---|---|
| `CLAUDE.md`, `.claude/skills/design-engine/` | operating instructions and the router (modes A, B, C, X) |
| `knowledge/founder/` | the founders' verdicts and the canon page per kind (outranks everything else) |
| `knowledge/web/`, `knowledge/x/`, `knowledge/*/` | studied rules with Why / Check / Source (`knowledge/SCHEMA.md`) |
| `system/` | design as data: canon JSON, tokens, systems, kits, effects, variety pools, X formats and accounts, the rule index |
| `tools/` | render, measure, gate, preflight, plan, library, ledger, verdict |
| `ledger/` | every founder verdict with its screenshot (our builds only) |
| `library/` | finals: renders, manifests, captions, preflight reports, planned X days |
| `work/replicas/app` | the app that renders the Tempra and Panelry finals |

Paths that some docs and rules cite but that are not in this package (studied references, raw sources, client work) are listed in `PACKAGE-REPORT.md`.

## Licence

The design work is Larpo's. See `LICENSE`.
