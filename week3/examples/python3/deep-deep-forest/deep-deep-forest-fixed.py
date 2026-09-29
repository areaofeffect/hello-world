
# DEEP DEEP FOREST  (fixed version)
# Python 3
#
# At the top of the file are declarations and variables we need.
#
# Scroll to the bottom and look for the main() function, that is
# where the program logic starts.

import random # random numbers (https://docs.python.org/3/library/random.html)

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

def rollDice(minNum, maxNum, difficulty, tries=2):
    # any time a chance of something might happen, let's roll a die
    result = random.randint(minNum, maxNum)
    print("You roll a: " + str(result) + " out of " + str(maxNum))

    # if the roll was too low we get a few more tries.
    # we have to RETURN the result of the recursive call, otherwise
    # the new roll gets thrown away and the old (bad) roll is used.
    if result <= difficulty and tries > 0:
        print("trying again....")
        input("press enter >")
        return rollDice(minNum, maxNum, difficulty, tries - 1) # recursive call

    return result

# all of the ASCII art below uses RAW strings (the r before the quote).
# without the r, python reads \_ and \/ as broken escape sequences
# and prints a SyntaxWarning for every line.
def printGraphic(name):
    if name == "fox":
        print(r'   /\   /\            ')
        print(r'  // \_// \     ____  ')
        print(r'  \_     _/    /   /  ')
        print(r'   / * * \    /^^^]   ')
        print(r'   \_\O/_/    [   ]   ')
        print(r'    /   \_    [   /   ')
        print(r'    \     \_  /  /    ')
        print(r'     [ [ /  \/ _/     ')
        print(r'    _[ [ \  /_/       ')
        print(r'                      ')
        print(r'       the fox        ')

    if name == "gem":
        print(r'      ____      ')
        print(r'     /\__/\     ')
        print(r'    /_/  \_\    ')
        print(r'    \ \__/ /    ')
        print(r'     \/__\/     ')
        print(r'                ')
        print(r'     the gem    ')

    if name == "tree":
        print(r'         _-_         ')
        print(r'      /~~   ~~\      ')
        print(r'   /~~         ~~\   ')
        print(r'  {               }  ')
        print(r'   \  _-     -_  /   ')
        print(r'    ~    \ //  ~     ')
        print(r'  _- -   | | _- _    ')
        print(r'    _ -  | |   -_.   ')
        print(r'        //  \.       ')
        print(r'                     ')
        print("    it's a tree      ") # double quotes, so no escape needed

    if name == "ghost":
        print('      .````.      ...           ')
        print('     :o  o `....``  ;           ')
        print('     `. O         :`            ')
        print('       ``:          `.          ')
        print('         `:.          `.        ')
        print('          : `.         `.       ')
        print('         `..``...       `.      ')
        print('                 `...     `.    ')
        print('                     ``...  `.  ')
        print('                          `````.')
        print('                                ')
        print('        not-so-scary ghost      ')

    if name == "title":
        print('-----------------------------------------------------------------------------')
        print(' ______   _______  _______  _______    ______   _______  _______  _______    ')
        print('|      | |       ||       ||       |  |      | |       ||       ||       |   ')
        print('|  _    ||    ___||    ___||    _  |  |  _    ||    ___||    ___||    _  |   ')
        print('| | |   ||   |___ |   |___ |   |_| |  | | |   ||   |___ |   |___ |   |_| |   ')
        print('| |_|   ||    ___||    ___||    ___|  | |_|   ||    ___||    ___||    ___|   ')
        print('|       ||   |___ |   |___ |   |      |       ||   |___ |   |___ |   |       ')
        print('|______| |_______||_______||___|      |______| |_______||_______||___|       ')
        print('                                                                             ')
        print(' _______  _______  ______    _______  _______  _______                       ')
        print('|       ||       ||    _ |  |       ||       ||       |                      ')
        print('|    ___||   _   ||   | ||  |    ___||  _____||_     _|                      ')
        print('|   |___ |  | |  ||   |_||_ |   |___ | |_____   |   |                        ')
        print('|    ___||  |_|  ||    __  ||    ___||_____  |  |   |                        ')
        print('|   |    |       ||   |  | ||   |___  _____| |  |   |                        ')
        print('|___|    |_______||___|  |_||_______||_______|  |___|                        ')
        print('                                                                             ')
        print('-----------------------------------------------------------------------------')


def gameOver():
    printGraphic("fox")

    print("-------------------------------")
    print("to be continued!")
    print("name: " + player["name"] ) # customized with a name
    print("score: " + str(player["score"]) ) # customized with a score
    return

def strangePath():
    # while True means: stay in this room until we RETURN a different room.
    # the original version called strangePath() again to retry, which stacks up
    # another copy of the function every time and eventually crashes.
    while True:
        print("The path looks dark but you move forward anyway...")
        print("You stop when you notice something shiny next to a tree.")
        printGraphic("tree")
        input("press enter >")

        print("You consider your options.")
        print("options: [ search tree , keep going , back to clearing ]")

        pcmd = input(">")

        if pcmd == "search tree":
            print("You search the tree...")
            print("Let's roll a dice to see what happens next!")

            # roll a dice from 0 to 20 to see what happens
            # if your number is higher than the difficulty, you win!
            difficulty = 10
            roll = rollDice(0, 20, difficulty)

            # you have to get lucky! this only happens to the player
            # if you roll the dice high enough
            if roll < difficulty:
                print("Turns out it's nothing... oh well.")
                continue # back to the top of this room

            print("It looks like a magic gem. Right here in the forest!")
            print("Do you take the gem?")
            printGraphic("gem")

            pcmd = input("yes or no >")

            if pcmd == "yes":
                print("You pick it up and return to the clearing.")
                player["items"].append("gem") # add an item to the list with append
                player["score"] += 100 # add to the score
            else:
                # "no" and anything else both mean: leave it
                print("You leave it there.")

            return "clearing"

        elif pcmd == "keep going":
            print("You keep going forward... you have a strange feeling")
            print("that you keep seeing the same trees over and over...") # the lost woods reference
            continue

        elif pcmd == "back to clearing":
            print("You decide to go back.")
            return "clearing"

        else:
            print("You can't do that!")
            continue


def forestPath():
    while True:
        print("The forest path leads you down a narrow path of trees.")
        print("It is a very nice day.")
        input("press enter >")

        printGraphic("fox")
        print("You walk for a while and see a small fox jump onto the path")
        print("from the trees. 'Who travels in my woods?', says the fox.")
        print("...He can talk!")
        input("press enter >")

        print("You consider your options.")

        # check the list for items
        # the 'in' keyword helps us do this easily
        if "gem" in player["items"]:
            print("options: [ go back , talk to fox , give gem , run ]")
        else:
            print("options: [ go back , talk to fox , run ]")

        pcmd = input(">")

        # option 1: leave
        if pcmd == "go back":
            print("You go back...")
            return "clearing"

        # option 2: talk to the fox
        elif pcmd == "talk to fox":
            print("You try and talk to the white fox!")
            print("Let's roll a dice to see what happens next!")
            input("press enter to roll >")

            difficulty = 5
            chanceRoll = rollDice(0, 20, difficulty) # roll a dice between 0 and 20

            if chanceRoll < difficulty:
                print("You try to talk to the fox, but... it looks at you confused.")
                continue # try again

            print("It's your lucky day! He wants to be your friend.")

            # nested actions and ifs
            pcmd = input("be friends with the white fox? yes or no >")

            if pcmd == "yes":
                print("The fox becomes your friend!")

                player["friends"].append("white fox")

                # string and int conversion!
                # we need to convert the score to a number to add to it
                # then convert it back to a string to display it to the player
                player["score"] = int(player["score"]) + 150 # conversion

                # we generate a custom string and add the score
                print("Your score increased to: " + str(player["score"]) )

                gameOver()
                return "quit"

            elif pcmd == "no":
                print("The fox runs away!")
                continue

            else:
                continue

        elif pcmd == "give gem":
            # only allow this if the player actually has the gem
            if "gem" not in player["items"]:
                print("You don't have a gem to give!")
                continue

            print("You give the gem to the fox!")
            input("press enter >")
            printGraphic("gem")
            player["items"].remove("gem")
            player["friends"].append("white fox")
            player["score"] += 100
            gameOver()
            return "quit"

        # option 3: run
        elif pcmd == "run":
            print("You run!")
            return "clearing" # back to start

        # try again
        else:
            print("I don't understand.")
            continue


def forestClearing():
    while True:
        print("You stand in a forest clearing.")
        print("There is a path ahead of you and another path to the right.")

        # this piece of game logic checks to see if the requirements are met to continue.
        # we can have some fun and change the options for the player
        # based on variables we stored

        # 1. check the list of items, to see if the gem is there
        # 2. check the list of friends -- the name has to match EXACTLY what we
        #    appended in forestPath(), which is "white fox", not "fox"

        if ("gem" in player["items"]) and ("white fox" not in player["friends"]):
            print("Your options: [ look around , path , other path , trade gem with the forest ghost , exit ]")
        else:
            print("Your options: [ look around , path , other path , exit ]")

        pcmd = input(">") # user input

        # player options
        if pcmd == "look around":
            # its a trick!
            print("You look around... the path behind you is .... gone?")
            input("press enter >")
            continue

        # path option
        elif pcmd == "path":
            print("You take the path.")
            input("press enter >")
            return "path" # path 1

        # path2 option
        elif pcmd == "other path":
            print("You take the other path.")
            input("press enter >")
            return "strange" # path 2

        # exiting / catching errors and crazy inputs
        elif pcmd == "exit":
            print("you exit.")
            return "quit" # exit the application

        elif pcmd == "trade gem with the forest ghost":
            if "gem" not in player["items"]:
                print("The ghost is not interested in you.")
                continue

            print("you give the gem to the ghost... huh?")
            printGraphic("ghost")
            player["items"].remove("gem")
            print("'tooooodaaloooooo', he says.")
            return "quit" # secret ending

        else:
            print("I don't understand that")
            continue


def introStory():
    # let's introduce them to our world
    print("Good to see you again! What should I call you?")
    player["name"] = input("Please enter your name >")

    # intro story, quick and dirty (think star wars style)
    print("Welcome to the deep deep forest " + player["name"] + "!")
    print("The story so far...")
    print("You were walking back home from dinner with your friends.")
    print("On the way home you see a path by your house leading into the woods.")
    print("You live in the city, so a path and the woods seem strange.")

    # ask over and over until the player chooses yes
    while True:
        print("Do you decide to go for it?")
        pcmd = input("please choose yes or no >")

        if pcmd == "yes":
            print("You walk down the path, it leads into a forest clearing...")
            input("press enter >")
            return "clearing"

        print("No? ... That doesn't work here.")
        input("press enter >")


# main! most programs start with this.
# this is the "game loop": each room function RETURNS the name of the next
# room, and this loop keeps calling rooms until one of them returns "quit".
def main():
    printGraphic("title") # call the function to print an image

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
            print("Unknown room: " + str(room))
            room = "quit"

main() # this is the first thing that happens
