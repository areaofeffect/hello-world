# deep deep forest: Rich version

Same game, same logic, but colorful. This is `deep-deep-forest-fixed.py` with one new library added: [Rich](https://github.com/Textualize/rich).

Rich makes terminal programs look good with almost no extra code. Everything you already know still applies. `print()` becomes `console.print()`, `input()` becomes `Prompt.ask()`, and your if statements stay exactly the same.

## Setup

You need Python 3. Install Rich once:

```bash
pip3 install rich
```

Then run the game:

```bash
python3 deep-deep-forest-rich.py
```

If `pip3` says "command not found", try `python3 -m pip install rich`.

## What Rich adds

Search the game file for comments starting with `RICH:` to see each one in context.

| You used to write | Rich version | What it does |
|---|---|---|
| `print("hello")` | `console.print("[bold green]hello[/]")` | Colored and styled text. The `[...]` part is called markup. |
| `input(">")` | `Prompt.ask("What do you do?", choices=["path", "run"])` | Only accepts one of the choices. Wrong answers get asked again automatically. |
| `input("yes or no >")` | `Confirm.ask("Take the gem?")` | A yes/no question that returns `True` or `False`. |
| a stack of `print()` lines | `Panel(text, title="...")` | Draws a box around text or ASCII art. |
| printing a score by hand | `Table()` with `add_column` and `add_row` | The score screen at the end of the game. |
| `print("-------")` | `console.rule("the clearing")` | A horizontal line with a label. |
| nothing | `console.status("rolling the dice...", spinner="bouncingBall")` | An animated spinner while the dice roll. Run `python3 -m rich.spinner` to see all 73 of them. |

### Markup cheat sheet

Put styles in square brackets and close them with `[/]`:

```python
console.print("[bold]bold[/] [italic]italic[/] [red]red[/] [bold cyan]both[/] [dim]faded[/]")
```

Colors you can use: `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, plus `bright_` versions like `bright_blue`. The full list is in the [Rich docs](https://rich.readthedocs.io/en/stable/appendix/colors.html).

One catch: because Rich reads `[` and `]` as markup, ASCII art that contains square brackets has to be wrapped in `Text(...)` so it prints as-is. The `printGraphic()` function shows how.

## Why `Prompt.ask` with choices is a big deal

In the original game, every room needed an `else` branch that said "I don't understand" and looped back. With `choices=`, Rich handles that for you, so those branches are gone. The options the player sees can still change based on the game state:

```python
if "gem" in player["items"]:
    options = ["go back", "talk to fox", "give gem", "run"]
else:
    options = ["go back", "talk to fox", "run"]

pcmd = Prompt.ask("What do you do?", choices=options)
```

## Try this

1. Change the colors. Make the ghost room feel spooky and the clearing feel calm.
2. Add a `Panel` around the fox's dialogue with `title="the fox"`.
3. Give the player health. Show it with a `Progress` bar from `rich.progress` and lower it when a dice roll fails.
4. Add a new room. Copy the `strangePath()` function, rename it, and add it to the `main()` game loop.

## Going further

- [Rich documentation](https://rich.readthedocs.io/)
- Rich has a built-in demo: run `python3 -m rich` to see everything it can do.
- If you want full-screen apps with buttons and keyboard navigation, the same team makes [Textual](https://textual.textualize.io/). It's a much bigger step and uses classes, so save it for later in the semester.
