
# DEEP DEEP FOREST  (Rich version)
# Python 3
#
# This is the "fixed" deep deep forest game with one new import: Rich.
# Rich is a library that makes terminal programs colorful. The game logic
# is exactly the same. Only the printing and the asking have changed.
#
# Install it once with:   pip3 install rich
# Run the game with:      python3 deep-deep-forest-rich.py
#
# Look for comments that start with "RICH:" to see each new thing.
#
# Scroll to the bottom and look for the main() function, that is
# where the program logic starts.

import random # random numbers (https://docs.python.org/3/library/random.html)
import time   # so we can pause for dramatic effect

# RICH: these are the pieces of Rich we use in this game
from rich.console import Console      # replaces print()
from rich.prompt import Prompt, Confirm # replaces input()
from rich.panel import Panel          # a box around text
from rich.table import Table          # rows and columns
from rich.text import Text            # plain text with a style, no markup

# RICH: a Console is the thing we print with. Make one and reuse it.
console = Console()

# an object describing our player
player = {
    "name": "p1",
    "score": 0,
    "items" : ["milk"],
    "friends" : [],
    "location" : "start"
}

rooms = {
    "room1" : "a forest clearing",
    "room2" : "a forest path",
    "room3" : "an alternate path"
}

# all of the ASCII art uses RAW strings (the r before the quote).
# without the r, python reads \_ and \/ as broken escape sequences.
# each picture is one multi-line string instead of a stack of print()s.
art = {
    "fox": r"""
   /\   /\
  // \_// \     ____
  \_     _/    /   /
   / * * \    /^^^]
   \_\O/_/    [   ]
    /   \_    [   /
    \     \_  /  /
     [ [ /  \/ _/
    _[ [ \  /_/
""",
    "gem": r"""
      ____
     /\__/\
    /_/  \_\
    \ \__/ /
     \/__\/
""",
    "tree": r"""
         _-_
      /~~   ~~\
   /~~         ~~\
  {               }
   \  _-     -_  /
    ~    \ //  ~
  _- -   | | _- _
    _ -  | |   -_.
        //  \.
""",
    "ghost": r"""
      .````.      ...
     :o  o `....``  ;
     `. O         :`
       ``:          `.
         `:.          `.
          : `.         `.
         `..``...       `.
                 `...     `.
                     ``...  `.
                          `````.
""",
    "title": r"""
 ______   _______  _______  _______    ______   _______  _______  _______
|      | |       ||       ||       |  |      | |       ||       ||       |
|  _    ||    ___||    ___||    _  |  |  _    ||    ___||    ___||    _  |
| | |   ||   |___ |   |___ |   |_| |  | | |   ||   |___ |   |___ |   |_| |
| |_|   ||    ___||    ___||    ___|  | |_|   ||    ___||    ___||    ___|
|       ||   |___ |   |___ |   |      |       ||   |___ |   |___ |   |
|______| |_______||_______||___|      |______| |_______||_______||___|

 _______  _______  ______    _______  _______  _______
|       ||       ||    _ |  |       ||       ||       |
|    ___||   _   ||   | ||  |    ___||  _____||_     _|
|   |___ |  | |  ||   |_||_ |   |___ | |_____   |   |
|    ___||  |_|  ||    __  ||    ___||_____  |  |   |
|   |    |       ||   |  | ||   |___  _____| |  |   |
|___|    |_______||___|  |_||_______||_______|  |___|
""",
}

def printGraphic(name, color="white", caption=""):
    # RICH: Panel draws a box around anything. Text() keeps the ASCII art
    # as plain characters, because Rich would otherwise read the [ ] in the
    # art as styling instructions.
    picture = Text(art[name], style=color)
    console.print(Panel(picture, title=caption, expand=False, border_style=color))

def pause():
    # RICH: console.input() is input() with colors. [dim] makes it faded.
    console.input("[dim]press enter >[/] ")

def rollDice(minNum, maxNum, difficulty, tries=2):
    # any time a chance of something might happen, let's roll a die

    # RICH: console.status() shows an animated spinner while we wait.
    # time.sleep(2) pauses the program for 2 seconds. Try changing the number,
    # or the spinner= name ("dots", "bouncingBall", "moon", "earth", "clock"...).
    # see them all with:  python3 -m rich.spinner
    with console.status("[bold yellow]rolling the dice...[/]", spinner="bouncingBall"):
        time.sleep(2)

    result = random.randint(minNum, maxNum)

    # RICH: text inside [square brackets] is markup. [bold cyan]...[/] colors
    # just that part of the line. str() still turns numbers into strings.
    console.print("You roll a [bold cyan]" + str(result) + "[/] out of " + str(maxNum))

    # if the roll was too low we get a few more tries.
    # we have to RETURN the result of the recursive call, otherwise
    # the new roll gets thrown away and the old (bad) roll is used.
    if result <= difficulty and tries > 0:
        console.print("[red]too low![/] trying again....")
        pause()
        return rollDice(minNum, maxNum, difficulty, tries - 1) # recursive call

    return result

def gameOver():
    printGraphic("fox", "bright_white", "the fox")

    # RICH: a Table has columns, then rows. Good for a score screen.
    table = Table(title="to be continued!")
    table.add_column("stat", style="cyan")
    table.add_column("value", style="bold")

    table.add_row("name", player["name"])
    table.add_row("score", str(player["score"]))
    table.add_row("items", ", ".join(player["items"]))   # list -> string
    table.add_row("friends", ", ".join(player["friends"]))

    console.print(table)
    return

def strangePath():
    # while True means: stay in this room until we RETURN a different room.
    while True:
        # RICH: console.rule() draws a horizontal line with a label
        console.rule("[bold magenta]the other path")
        console.print("The path looks [magenta]dark[/] but you move forward anyway...")
        console.print("You stop when you notice something [yellow]shiny[/] next to a tree.")
        printGraphic("tree", "green", "it's a tree")
        pause()

        console.print("You consider your options.")

        # RICH: Prompt.ask() with choices= only accepts one of the choices.
        # if the player types anything else, Rich asks again for us.
        # that replaces the "I don't understand" else branches.
        pcmd = Prompt.ask("What do you do?", choices=["search tree", "keep going", "back to clearing"])

        if pcmd == "search tree":
            console.print("You search the tree...")
            console.print("Let's roll a dice to see what happens next!")

            # roll a dice from 0 to 20 to see what happens
            # if your number is higher than the difficulty, you win!
            difficulty = 10
            roll = rollDice(0, 20, difficulty)

            # you have to get lucky! this only happens to the player
            # if you roll the dice high enough
            if roll < difficulty:
                console.print("Turns out it's nothing... [dim]oh well.[/]")
                continue # back to the top of this room

            console.print("It looks like a [bold yellow]magic gem[/]. Right here in the forest!")
            printGraphic("gem", "yellow", "the gem")

            # RICH: Confirm.ask() is a yes/no question. It returns True or False,
            # a boolean, so we can use it directly in an if statement.
            if Confirm.ask("Do you take the gem?"):
                console.print("You pick it up and return to the clearing.")
                player["items"].append("gem") # add an item to the list with append
                player["score"] += 100 # add to the score
            else:
                console.print("You leave it there.")

            return "clearing"

        elif pcmd == "keep going":
            console.print("You keep going forward... you have a strange feeling")
            console.print("that you keep seeing the same trees over and over...") # the lost woods reference
            continue

        elif pcmd == "back to clearing":
            console.print("You decide to go back.")
            return "clearing"


def forestPath():
    while True:
        console.rule("[bold green]the forest path")
        console.print("The forest path leads you down a narrow path of trees.")
        console.print("It is a [bold]very nice day[/].")
        pause()

        printGraphic("fox", "bright_white", "the fox")
        console.print("You walk for a while and see a small fox jump onto the path")
        console.print("from the trees. [italic]'Who travels in my woods?'[/], says the fox.")
        console.print("...He can [bold]talk[/]!")
        pause()

        console.print("You consider your options.")

        # check the list for items
        # the 'in' keyword helps us do this easily
        # the choices the player sees change based on what they are carrying
        if "gem" in player["items"]:
            options = ["go back", "talk to fox", "give gem", "run"]
        else:
            options = ["go back", "talk to fox", "run"]

        pcmd = Prompt.ask("What do you do?", choices=options)

        # option 1: leave
        if pcmd == "go back":
            console.print("You go back...")
            return "clearing"

        # option 2: talk to the fox
        elif pcmd == "talk to fox":
            console.print("You try and talk to the white fox!")
            console.print("Let's roll a dice to see what happens next!")
            pause()

            difficulty = 5
            chanceRoll = rollDice(0, 20, difficulty) # roll a dice between 0 and 20

            if chanceRoll < difficulty:
                console.print("You try to talk to the fox, but... it looks at you [dim]confused[/].")
                continue # try again

            console.print("[bold green]It's your lucky day![/] He wants to be your friend.")

            if Confirm.ask("Be friends with the white fox?"):
                console.print("The fox becomes your [bold]friend[/]!")

                player["friends"].append("white fox")

                # string and int conversion!
                # we need to convert the score to a number to add to it
                # then convert it back to a string to display it to the player
                player["score"] = int(player["score"]) + 150 # conversion

                console.print("Your score increased to: [bold cyan]" + str(player["score"]) + "[/]")

                gameOver()
                return "quit"
            else:
                console.print("The fox [red]runs away[/]!")
                continue

        elif pcmd == "give gem":
            console.print("You give the gem to the fox!")
            pause()
            printGraphic("gem", "yellow", "the gem")
            player["items"].remove("gem")
            player["friends"].append("white fox")
            player["score"] += 100
            gameOver()
            return "quit"

        # option 3: run
        elif pcmd == "run":
            console.print("[bold]You run![/]")
            return "clearing" # back to start


def forestClearing():
    while True:
        console.rule("[bold green]the clearing")
        console.print("You stand in a forest clearing.")
        console.print("There is a path [green]ahead[/] of you and another path to the [green]right[/].")

        # this piece of game logic checks to see if the requirements are met to continue.
        # we can have some fun and change the options for the player
        # based on variables we stored

        # 1. check the list of items, to see if the gem is there
        # 2. check the list of friends -- the name has to match EXACTLY what we
        #    appended in forestPath(), which is "white fox", not "fox"
        if ("gem" in player["items"]) and ("white fox" not in player["friends"]):
            options = ["look around", "path", "other path", "trade gem with the forest ghost", "exit"]
        else:
            options = ["look around", "path", "other path", "exit"]

        pcmd = Prompt.ask("What do you do?", choices=options) # user input

        # player options
        if pcmd == "look around":
            # its a trick!
            console.print("You look around... the path behind you is .... [bold red]gone?[/]")
            pause()
            continue

        # path option
        elif pcmd == "path":
            console.print("You take the path.")
            pause()
            return "path" # path 1

        # path2 option
        elif pcmd == "other path":
            console.print("You take the other path.")
            pause()
            return "strange" # path 2

        elif pcmd == "exit":
            console.print("you exit.")
            return "quit" # exit the application

        elif pcmd == "trade gem with the forest ghost":
            console.print("you give the gem to the ghost... huh?")
            printGraphic("ghost", "bright_blue", "not-so-scary ghost")
            player["items"].remove("gem")
            console.print("[italic bright_blue]'tooooodaaloooooo'[/], he says.")
            return "quit" # secret ending


def introStory():
    # let's introduce them to our world
    console.print("Good to see you again! What should I call you?")

    # RICH: Prompt.ask() without choices is just a colorful input()
    player["name"] = Prompt.ask("[bold]Please enter your name[/]")

    # intro story, quick and dirty (think star wars style)
    console.print(Panel(
        "Welcome to the deep deep forest [bold green]" + player["name"] + "[/]!\n\n"
        "You were walking back home from dinner with your friends.\n"
        "On the way home you see a path by your house leading into the woods.\n"
        "You live in the city, so a path and the woods seem strange.",
        title="The story so far..."
    ))

    # ask over and over until the player chooses yes
    while True:
        if Confirm.ask("Do you decide to go for it?"):
            console.print("You walk down the path, it leads into a forest clearing...")
            pause()
            return "clearing"

        console.print("No? ... [dim]That doesn't work here.[/]")
        pause()


# main! most programs start with this.
# this is the "game loop": each room function RETURNS the name of the next
# room, and this loop keeps calling rooms until one of them returns "quit".
def main():
    printGraphic("title", "bold green") # call the function to print an image

    room = "intro"
    while room != "quit":
        if room == "intro":
            room = introStory()
        elif room == "clearing":
            room = forestClearing()
        elif room == "path":
            room = forestPath()
        elif room == "strange":
            room = strangePath()
        else:
            console.print("[red]Unknown room: " + str(room) + "[/]")
            room = "quit"

main() # this is the first thing that happens
