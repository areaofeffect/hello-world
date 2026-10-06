# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Course materials for "Hello World: The Logic of Interaction" (SVA, Fall 2026, instructors Carrie Kengle and Bruno Kruse), an intro programming class covering Python, JavaScript (p5.js), and C/Arduino. The root `README.md` is the syllabus and weekly schedule. There's no app build, lint, or test suite. The content is slides, example programs, and student-facing guides.

## Layout

- `weekN/` holds one class session (`week5and6/` covers two). Each usually has:
  - `README.md`: the week's notes, rendered on GitHub
  - `slides/index.html`: a remark.js slide deck
  - `examples/`: runnable examples for that week, grouped by language (e.g. `week3/examples/python3/`)
  - `images/`: images used by the README and slides
- `in_class_python_examples/`, `in_class_c_examples/`: scratch code written live in class
- `site/`: the old Angular 1 + gulp course site (legacy, not actively maintained)
- `archive/`: material from past years. Leave it alone unless asked.
- `quizzes/` is gitignored on purpose (quizzes go into Canvas and stay local)

## Slides (remark.js)

Each `slides/index.html` is a single self-contained page. The slide markdown lives inside `<textarea id="source">`, and remark is loaded from `remarkjs.com`. Slides are separated by `---`. Per-slide classes use `class: inverse, left` style headers. To preview, open the file in a browser or use VS Code Live Server (port 5502, set in `.vscode/settings.json`).

- Use single backticks for inline code in slides, never triple. Remark treats ```` ``` ```` as a fence marker, so inline triple backticks swallow every following slide until the next real fence (see commit 96ace33).
- Slides link to their own slide numbers with absolute URLs like `http://hello-world.areaofeffect.io/week3/slides/#8`. Adding or removing slides shifts these numbers, so check intra-deck links after reordering.
- Links to example source point to GitHub `https://github.com/areaofeffect/hello-world/blob/main/...`. Keep these in sync when you move or rename example files.

## Running examples

- Python: `python3 path/to/file.py`. Some week 3 examples need extra packages (e.g. `deep-deep-forest-rich` needs `pip3 install rich`).
- C: `gcc hello-world.c -o hello-world && ./hello-world`
- p5.js / HTML examples: open `index.html` in a browser (or Live Server). Libraries are vendored next to the sketch (e.g. `week3/examples/advanced_assignment/libraries/`).

## Conventions

- The audience is beginner students. Keep example code simple and heavily commented, and favor clarity over idiomatic cleverness.
- Variants of an example live side by side instead of replacing the original (e.g. `deep-deep-forest.py` / `deep-deep-forest-fixed.py`, `-extended`, `-rich`), because the original is often taught as-is.
