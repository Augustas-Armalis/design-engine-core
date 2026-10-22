# Package report

What this public package holds, what was left out of it and why, and how it was checked. Built 2026-10-22.

## Source

- The private engine repo, `main` at `3de54d8`, plus the three commits on `claude/x-engine-98fa49` that `main` did not have yet (`ca138c2` preflight, `a15f83e` X planner and library, `6a05496` X accounts). They merge without conflicts. Uncommitted work in that branch's worktree is not included.
- 10226 tracked files in that tree: **715 kept**, **9511 excluded**, plus one submodule link to a third-party repo (`corpus/tanjim-src/gr8r-studio`), also excluded. New here: `LICENSE`, this report; `README.md` rewritten.
- Fresh history: one commit, so nothing excluded is reachable from this repo's history.

## Kept

| Folder | Files | What |
|---|---:|---|
| `.claude/` | 1 | launch config for the replica app |
| `.claude/skills/` | 2 | the router skill (`design-engine`) and the logo-from-image skill |
| `.gitignore` | 1 | keeps third-party folders out |
| `CLAUDE.md` | 1 | operating instructions |
| `LICENSE` | 1 | the design work is Larpo's |
| `PACKAGE-REPORT.md` | 1 | this report |
| `README.md` | 1 | quickstart |
| `docs/` | 8 | HOWTO, PREFLIGHT, LIBRARY, X-PLANNER, REPLICATE-FIRST, ROADMAP, process audit, coss-ui notes, the recorder prompt |
| `docs/prompts/` | 1 | the hero recorder prompt |
| `evals/` | 1 | fixed briefs for re-running the engine after a change |
| `knowledge/` | 2 | SCHEMA (how a rule is written) and a coverage note |
| `knowledge/dos-and-donts/` | 2 | rule notes from a studied book (the book is not here) |
| `knowledge/ecosystem/` | 6 | notes on design tools, evals and reference sources |
| `knowledge/engine-accepted/` | 6 | accepted engine builds: Kestrel, Quorum, Tempra dark bento |
| `knowledge/founder/` | 15 | founder-taste (every verdict), feedback playbook, the canon page per kind |
| `knowledge/larpo/` | 8 | Larpo's own brand constraints, anti-AI playbook, hero system, seed verdicts |
| `knowledge/psychology-of-user/` | 6 | rule notes from a studied book (the book is not here) |
| `knowledge/systems-research/` | 34 | notes on public design systems |
| `knowledge/ui-pedia/` | 27 | rule notes from a studied book, in our own words with page refs (the book itself is not here) |
| `knowledge/web-sources/` | 40 | rule notes from public guidelines and articles, in our own words with citations |
| `knowledge/web/` | 87 | studied rules (type, colour, buttons, nav, dark mode, effects, bento, motion, logos, consistency...); studio studies kept as text with citations |
| `knowledge/what-to-do-next/` | 5 | process notes from a studied book (the book is not here) |
| `knowledge/x/` | 4 | X strategy, cadence numbers, caption voice |
| `ledger/entries/` | 71 | founder verdicts per build, with reasons |
| `ledger/shots/` | 51 | screenshots of our own builds that the verdicts refer to |
| `library/` | 1 | the library index (generated) |
| `library/kestrel/` | 5 | Kestrel hero (accepted) |
| `library/panelry/` | 10 | Panelry finals: product pipeline (full + thirds), debrief close-up |
| `library/quorum/` | 5 | Quorum hero (accepted) |
| `library/tempra/` | 20 | Tempra finals: hero, product week (full + thirds), dark bento, Ask close-up |
| `library/x-days/` | 5 | what was posted, and the planned sample day 2026-10-23 |
| `package-lock.json` | 1 | lockfile |
| `package.json` | 1 | tool dependencies (Playwright, axe-core) |
| `requirements-ingest.txt` | 1 | optional Python deps for ingesting new books |
| `system/` | 2 | inspiration sources (links) and libraries catalogue |
| `system/canon/` | 12 | canon JSON per kind + the no-copy names list |
| `system/design-view/` | 1 | the references the design view shows (our accepted builds) |
| `system/directions/` | 1 | art-direction axes |
| `system/effects/` | 17 | shadows, textures, squircle corners, effect recipes, demos |
| `system/fonts/` | 1 | font catalogue |
| `system/iso/` | 3 | isometric line-art kit |
| `system/kits/` | 14 | product-hero kit (the Kestrel craft layer) |
| `system/logo/` | 3 | logo drawing method, anatomy, families |
| `system/product-ui/` | 2 | product UI tokens and screen notes |
| `system/rules/` | 1 | the rule index, rebuilt from the kept knowledge |
| `system/sections/` | 3 | section variants and bento layouts |
| `system/spec-template/` | 4 | component spec template and token schema |
| `system/systems-research/` | 34 | public design systems as data |
| `system/systems/` | 115 | 23 bound design systems (tokens, theme.css, showcase, guide) |
| `system/tokens/` | 6 | primitive, semantic, motion and palette tokens |
| `system/variety/` | 13 | approved variety pools: buttons, navs, type voices, dark recipes, X post formats |
| `system/x/` | 5 | X accounts, captions, formats, rotation, hand-off schema |
| `tools/` | 30 | every engine tool (render, measure, gate, preflight, plan, library, ledger, verdict, logo, record) |
| `work/replicas/` | 18 | the replica app with the Tempra and Panelry routes, the X crop frame and the preflight negative control |
| `work/tempra/` | 1 | the Tempra mark (SVG) |

## Excluded

| Why | Files | Paths |
|---|---:|---|
| third-party study captures (studios, sites, X posts); their CREDITS say never repost | 6476 | `knowledge/benchmarks/` |
| drafts and rounds of other fictional builds; finals live in library/ and knowledge/engine-accepted/, verdicts in ledger/ | 1232 | `work/arcwise/`, `work/cadence-app/`, `work/cadence-glass/`, `work/eval-t0-hero-ai-devtool/`, `work/ferry-hero/`, `work/flagship-cadence/` and 31 more |
| raw book and course text, page images and studied third-party source code (third-party; never redistributed) | 945 | `corpus/dos-and-donts/`, `corpus/psychology-of-user/`, `corpus/ui-pedia/`, `corpus/what-to-do-next/` |
| annotated figure pages from the studied books (third-party book images) | 293 | `examples/ui-pedia/` |
| study of another studio's product (captures and rebuilds) | 168 | `work/study-attio/`, `work/study-rico/` |
| replica study notes, reference crops and overlays of other studios' work | 144 | `work/replicas/` |
| client work | 99 | `work/acquisity-dashboard/`, `work/kaching-app-sections/`, `work/kaching-bfcm/`, `work/kaching-bundles-switch/`, `work/kaching-case-hero/`, `work/kaching-landing-review/` and 2 more |
| replica route that rebuilds another studio's shot (or is built on one) | 39 | `work/replicas/` |
| generated output (gitignored); the design-view sheets embed third-party reference images | 32 | `reports/dv-event/`, `reports/dv-expense/`, `reports/dv-gridline/`, `reports/dv-kestrel/`, `reports/dv-quorum/`, `reports/dv-share/` and 2 more |
| Tempra/Cadence draft round, not a library final (several are built in a named studio's measured grammar); verdicts stay in ledger/ | 17 | `work/replicas/` |
| folds of pixel replicas of affectUI, AlignUI and Linear sections | 6 | `knowledge/engine-accepted/` |
| client work (Kaching, Capto): screenshots of the client sites and a client design system | 6 | `knowledge/larpo-shipped/` |
| Claude memory notes copied from the founder's machine; not part of the engine | 5 | `docs/context/` |
| rejected round built in a named studio's calendar grammar and post format; its source route is not in this package | 5 | `library/tempra/x-calendar-carousel/` |
| not used by the kept routes (scaffold, kits kept in system/kits and system/iso) | 5 | `work/replicas/` |
| kit rebuilt from a client product (Sellify Video Ad Creator studio) | 4 | `system/kits/` |
| screenshots of third-party sites (deel.com, remote.com, rippling.com) | 3 | `knowledge/references/payroll/deel-com.png`, `knowledge/references/payroll/remote-com.png`, `knowledge/references/payroll/rippling-com-global.png` |
| a named designer's measured token set packaged for reuse (the rules stay as text in knowledge/web) | 3 | `system/variety/basit-tokens.json`, `system/variety/flohoeller-tokens.json`, `system/variety/kuleszo-tokens.json` |
| the Pinterest pin the Tempra placeholder mark was traced from (third-party image) | 3 | `work/tempra/brand/ref/SOURCE.txt`, `work/tempra/brand/ref/p13-crop.png`, `work/tempra/brand/ref/p13.jpg` |
| instructions for the private team zip (full engine + Reel); this repo's README replaces them | 2 | `docs/package/START-HERE.md`, `docs/package/setup.sh` |
| client work (Acquisity redesign) | 2 | `ledger/entries/acquisity-dashboard.json`, `ledger/shots/2026-10-09-acquisity-dashboard-fold.png` |
| a named studio's measured token set packaged for reuse (the rules stay as text in knowledge/web) | 2 | `system/product-ui/kargul-micro-tokens.json`, `system/product-ui/kargul-tokens.json` |
| draft, not a library final | 2 | `work/x-posts/buttons-2.css`, `work/x-posts/index.html` |
| describes the teammate's private X engine setup (Buffer, Telegram, its missing importer) | 1 | `docs/X-ACCOUNTS.md` |
| client process (Sellify): ticket ids and reads of the client's code | 1 | `knowledge/founder/sellify-design-pass.md` |
| client research for Sellify (reads of the client's code, ticket ids) | 1 | `knowledge/web/ad-intelligence-flows.md` |
| client research for Sellify (reads of the client's code, commit ids) | 1 | `knowledge/web/ai-video-ad-creator-flows.md` |
| client research for Sellify | 1 | `knowledge/web/approval-and-generation-ui.md` |
| describes a teammate's private repo (larpo-x-engine) | 1 | `knowledge/x/x-engine-audit.md` |
| client work (Sellify product, ticket ids) | 1 | `ledger/entries/sellify-guided-avatars-r1.json` |
| holds an industrial photograph of unknown provenance (the verdict text stays) | 1 | `ledger/shots/2026-10-08-larpo-linecheck-fold.png` |
| client work (Capto, shipped by Larpo): screenshot of the client's site | 1 | `ledger/shots/2026-10-08-larpo-shipped-capto-fold.png` |
| client work (Kaching, shipped by Larpo): screenshot of the client's site | 1 | `ledger/shots/2026-10-08-larpo-shipped-kaching-fold.png` |
| client work (Sellify product) | 1 | `ledger/shots/2026-10-15-sellify-guided-avatars-r1.png` |
| side-by-side of a pixel replica of affectUI's bento | 1 | `ledger/shots/2026-10-22-replica-affectui-3up-r1-fold.png` |
| side-by-side of a pixel replica of AlignUI's Features 04 | 1 | `ledger/shots/2026-10-22-replica-alignui-features04-r1-fold.png` |
| side-by-side of a pixel replica of Linear's FIG triptych | 1 | `ledger/shots/2026-10-22-replica-linear-fig-r1-fold.png` |
| a post made by the teammate's private X engine (negative evidence; the verdict text stays) | 1 | `ledger/shots/2026-10-22-x-engine-posts-r1-fold.png` |
| values copied from an unlicensed third-party repo (gr8r studio) | 1 | `system/product-ui/gr8r-tokens.json` |
| builds the private team zip of the full engine (rsyncs everything); not for this package | 1 | `tools/export_package.sh` |
| trace comparison that includes the Pinterest pin (third-party image) | 1 | `work/tempra/brand/trace-compare.png` |

## Changed for the package

- `work/replicas/app/src/main.tsx`: routes cut to our own finals and fixtures (`#/h4a`, `#/cprodb`, `#/cbentol`, `#/panelry`, `#/pfneg`, `#/xframe`); the default route is the Tempra hero.
- `work/replicas/app/src/CadenceHeroD.tsx`: removed one unused constant (`TINT`, left from the r7 pill change) so `npm run build` passes; nothing on screen changes.
- `tools/design_view.mjs`: skips reference images that are not on disk instead of drawing broken images.
- `system/design-view/refs.json`: only the founders' accepted engine builds (Kestrel, Quorum, the Tempra dark bento, Kite); the rated studio benchmarks stay private.
- `system/rules/index.json`: rebuilt from the kept knowledge with `tools/build_index.py` (5878 rules from 186 files; the private index had 6016).
- `library/index.json`: rebuilt with `tools/library.mjs index` (8 assets); `docs/LIBRARY.md` drops the row of the excluded carousel.
- `.claude/launch.json`: only the replica app. `.gitignore`: blocks the third-party folders. `CLAUDE.md`: a note at the top on what is not in this package.

## Scans

- **Reference names** (`system/canon/no-copy-names.json`, whole word, case-insensitive, as the preflight checks): 109 files. In deliverables (`work/`, `library/`): 6 hits in 5 files, all code comments that credit where a measurement came from or a manifest note, plus one deliberate visible name in `#/pfneg`, the negative control that proves `copy.reference-names` fails. The preflight's `copy.reference-names` passes on every library final. In rules and docs: 2383 hits in 103 files, citations of the studied studios and cases as sources (no captures, no copied code). The rule index repeats them (4124).
- **Third-party media**: 76 PNG and 1 SVG kept, every one checked by eye: renders and screenshots of our own builds, accepted folds, the X day sheet and effect, iso and button specimens. One ledger shot was dropped for holding a photograph of unknown provenance. No embedded `data:` images, no remote image URLs, no font files.
- **Secrets**: none found (GitHub, OpenAI, Anthropic, AWS, Slack, Google and Telegram token patterns, private keys). Emails: only example addresses (`name@example.com`, `ada@northwind.dev`) and the public contact of two cited authors.

## Checked on this package

- `npm ci` and `npm run build` in `work/replicas/app`: pass.
- `tools/preflight.mjs` on `#/h4a` at 1440x1035: **0 FAIL**, 9 WARN, 15 PASS (the same as the private engine's calibration).
- `tools/preflight.mjs` on `#/pfneg`: FAIL on every planted defect (label and icon centring, grey twins, two primaries, small cut, fold end, reference name, font), as it must.
- `tools/x_plan.mjs plan --date 2026-10-24`: writes the plan and hand-off.
- `tools/library.mjs check`: 2 problems, both already in the source: `panelry-debrief-closeup` and `panelry-product-pipeline` have no `caption.md` yet.

## Known gaps

- Many rules, the canon and the router cite files under `knowledge/benchmarks/`, `work/replicas/*-NOTES.md` and other `work/` folders as evidence. Those paths are not here (see Excluded). Mode C (design from references) needs your own references.
- The router's Mode X names `knowledge/x/caption-patterns.md`, which is not committed yet in the source.
- Kestrel and Quorum fail 9 checks each under today's canon (documented in `docs/PREFLIGHT.md`); they are accepted references, not postable until a fix pass.
- `tools/x_plan.mjs` also runs the X engine's caption check when a local checkout of that private repo exists; without it, it runs our own checks only.
- The Tempra mark started as a trace of a Pinterest pin and was redrawn as plain geometry (four quarter-discs on a 2x2 grid); the pin itself is not here.
- The founders' verdict log and canon mention client projects by name (and some ticket ids) where a verdict came from client work. Client files, screenshots and research are not here.
- `tools/record.mjs` needs Reel, a separate recorder that is not part of this package.
