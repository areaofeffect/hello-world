
# DEEP DEEP FOREST
# Now updated to Python 3

# At the top of the file are declarations and variables we need.
# 
# Scroll to the bottom and look for the main() function, that is
# where the program logic starts.

import random # random numbers (https://docs.python.org/3.3/library/random.html)
import sys # system stuff for exiting (https://docs.python.org/3/library/sys.html)

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

def rollDice(minNum, maxNum, difficulty):
    # any time a chance of something might happen, let's roll a die
    result = random.randint(minNum,maxNum)
    print ("You roll a: " + str(result) + " out of " + str(maxNum))

    if (result <= difficulty):
        print ("trying again....")
        
        input("press enter >")
        rollDice(minNum, maxNum, difficulty) # this is a recursive call

    return result

def printGraphic(name):
    if (name == "fox"):
        print ('   /\   /\            ')
        print ('  // \_// \     ____  ')
        print ('  \_     _/    /   /  ')
        print ('   / * * \    /^^^]   ')
        print ('   \_\O/_/    [   ]   ')
        print ('    /   \_    [   /   ')
        print ('    \     \_  /  /    ')
        print ('     [ [ /  \/ _/     ')
        print ('    _[ [ \  /_/       ')
        print ('                      ')
        print ('       the fox        ')

    if (name == "gem"):
        print ('      ____      ')
        print ('     /\__/\     ')
        print ('    /_/  \_\    ')
        print ('    \ \__/ /    ')
        print ('     \/__\/     ')
        print ('                ')
        print ('     the gem    ')

    if (name == "tree"):
        print ('         _-_         ')
        print ('      /~~   ~~\      ')
        print ('   /~~         ~~\   ')
        print ('  {               }  ')
        print ('   \  _-     -_  /   ')
        print ('    ~    \ //  ~     ')
        print ('  _- -   | | _- _    ')
        print ('    _ -  | |   -_.   ')
        print ('        //  \.       ')
        print ('                     ')
        print ('    i\'ts a tree     ') # this one is escaped!

    if (name == "ghost"):
        print ('      .````.      ...           ')
        print ('     :o  o `....``  ;           ')
        print ('     `. O         :`            ')
        print ('       ``:          `.          ')
        print ('         `:.          `.        ')
        print ('          : `.         `.       ')
        print ('         `..``...       `.      ')
        print ('                 `...     `.    ')
        print ('                     ``...  `.  ')
        print ('                          `````.')
        print ('                                ')
        print ('        not-so-scary ghost      ')

    if (name == "title"):
        print ('-----------------------------------------------------------------------------')
        print (' ______   _______  _______  _______    ______   _______  _______  _______    ')
        print ('|      | |       ||       ||       |  |      | |       ||       ||       |   ')
        print ('|  _    ||    ___||    ___||    _  |  |  _    ||    ___||    ___||    _  |   ')
        print ('| | |   ||   |___ |   |___ |   |_| |  | | |   ||   |___ |   |___ |   |_| |   ')
        print ('| |_|   ||    ___||    ___||    ___|  | |_|   ||    ___||    ___||    ___|   ')
        print ('|       ||   |___ |   |___ |   |      |       ||   |___ |   |___ |   |       ')
        print ('|______| |_______||_______||___|      |______| |_______||_______||___|       ')
        print ('                                                                             ')
        print (' _______  _______  ______    _______  _______  _______                       ')
        print ('|       ||       ||    _ |  |       ||       ||       |                      ')
        print ('|    ___||   _   ||   | ||  |    ___||  _____||_     _|                      ')
        print ('|   |___ |  | |  ||   |_||_ |   |___ | |_____   |   |                        ')
        print ('|    ___||  |_|  ||    __  ||    ___||_____  |  |   |                        ')
        print ('|   |    |       ||   |  | ||   |___  _____| |  |   |                        ')
        print ('|___|    |_______||___|  |_||_______||_______|  |___|                        ')
        print ('                                                                             ')
        print ('-----------------------------------------------------------------------------')



def gameOver():

    printGraphic("fox")

    print("-------------------------------")
    print("to be continued!")
    print("name: " + player["name"] ) # customized with a name
    print( "score: " + str(player["score"]) ) # customized with a score
    return

def strangePath():
    print("The path looks dark but you move forward anyway...")
    print("You stop when you notice something shiny next to a tree.")
    printGraphic("tree")
    input("press enter >")

    print("You consider your options.")
    print("options: [ search tree , keep going , back to clearing]")

    pcmd = input(">")

    if (pcmd == "search tree"): 
        print ("You search the tree...")
        print ("Let's roll a dice to see what happens next!")

        # roll a dice from 0 to 20 to see what happens
        # if your number is higher than the difficulty, you win!
        difficulty = 10
        roll = rollDice(0, 20, difficulty)
        
        # you have to get lucky! this only happens to the player
        # if you roll the dice high enough
        if (roll >= difficulty):
            print ("It looks like a magic gem. Right here in the forest!")
            print ("Do you take the gem?")
            
            printGraphic("gem")

            # we dive further into the logic
            pcmd = input("yes or no >")

            if (pcmd == "no"):
                print ("You leave it there.")
                strangePath()

            elif (pcmd == "yes"):
                print ("You pick it up and return to the clearing.")
                player["items"].append("gem") # add an item to the array with append
                player["score"] += 100 # add to the score
                forestClearing()

            else:
                print ("You leave it there.")
                forestClearing()

        else:
            print ("Turns out it's nothing... oh well.")
            strangePath()

    elif (pcmd == "keep going"):
        print ("You keep going forward... you have a strange feeling")
        print ("that you keep seeing the same trees over and over...") # the lost woods reference
        strangePath()

    elif (pcmd == "back to clearing"):
        print ("You decide to go back.")
        pcmd = input(">")
        forestClearing()

    else:
        print ("You can't do that!")
        strangePath()


def forestPath():
    print ("The forest path leads you down a narrow path of trees.")
    print ("It is a very nice day.")
    input("press enter >")

    printGraphic("fox")
    print ("You walk for a while and see a small fox jump onto the path")
    print ("from the trees. 'Who travels in my woods?', says the fox.")
    print ("...He can talk!")
    input("press enter >")
    
    print ("You consider your options.")

    # check the list for items
    # the 'in' keyword helps us do this easily
    if ("gem" in player["items"]):
        print ("options: [ look around , talk to fox , give gem, run ]")
    else:
        print ("options: [ go back, talk to fox, run ]")

    pcmd = input(">")

    # option 1: look at the fox
    if (pcmd == "go back"):
        print ("You go back...")
        forestClearing() # try again
    
    # option 2: talk to the fox
    elif (pcmd == "talk to fox"):
        print ("You try and talk to the white fox!")
        print ("Let's roll a dice to see what happens next!")
        input("press enter to roll >")

        difficulty = 5
        chanceRoll = rollDice(0,20,difficulty) # roll a dice between 0 and 20

        # if the roll is higher than 5... 75% chance
        if (chanceRoll >= difficulty):
            print ("It's you're lucky day! He want's to be your friend.")
            player["score"] += 50
        else:
            print ("You try to talk to the fox, but... it looks at you confused.")
            forestPath() # try again
        
        # nested actions and ifs
        pcmd = input("be friends with the white fox? yes or no >")

        # yes
        if (pcmd == "yes"):

            print ("The fox becomes your friend!")

            player["friends"].append("white fox")

            # string and int converstion!
            # we need to convert the score to a number to add to it
            # then convert it back to a string to display it to the player
            player["score"] = int(player["score"]) + 100 # conversion

            # we generate a custom string and add the score
            print ( "Your score increased to: " + str(player["score"]) ) 
            
            gameOver()

        # no
        elif (pcmd == "no"):
            print ("The fox runs away!")
            forestPath()
        
        # try again
        else:
            forestPath()

    elif (pcmd == "give gem"):
        print ("You give the gem to the fox!")
        input("press enter>")
        printGraphic("gem")
        gameOver()


    # option 3: run
    elif (pcmd == "run"):
        print ("You run!")
        forestClearing() # back to start

    # try again
    else:
        print ("I don't understand.")
        forestPath() # forest path

def forestClearing():
    print ("You stand in a forest clearing.")
    print ("There is a path ahead of you and another path to the right.")
    
    # this piece of game logic checks to see if the requirements are met to continue.
    # we can have some fun and change the options for the player
    # based on variables we stored

    # 1. check the list of items, to see if it is there
    # 2. check the list of friends, to see if you are in friends list

    if (("gem" in player["items"]) and not ("fox" in player["friends"])):
        print ("Your options: [ look around, path, trade gem with the forest ghost]")

    elif ("gem" in player["items"]):
        print ("Your options: [ look around, path, exit ]")

    else:
        print ("Your options: [ look around, path , other path , exit ]")

    pcmd = input(">") # user input

    # player options
    if (pcmd == "look around"):
        # its a trick!
        print ("You look around... the path behind you is .... gone?")

        input("press enter >")
        forestClearing()

    # path option
    elif (pcmd == "path"):
        print ("You take the path.")
        input("press enter >")
        forestPath() # path 1

    # path2 option
    elif (pcmd == "other path"):
        print ("You take the other path.")
        input("press enter >")
        strangePath() # path 2

    # exiting / catching errors and crazy inputs
    elif (pcmd == "exit"):
        print ("you exit.")
        return # exit the application
        
    elif (pcmd == "trade gem with the forest ghost"):
        print ("you give the gem to the ghost... hugh?")
        printGraphic("ghost")

        print ("'tooooodaaloooooo'\", he says.") # escaped
        return # exit the application, secret ending

    else:
        print ("I don't understand that")
        forestClearing() # the beginning

def introStory():
    # let's introduce them to our world
    print ("Good to see you gain! What should I call you?")
    player["name"] = input("Please enter your name >")

    # intro story, quick and dirty (think star wars style)
    print ("Welcome to the deep deep forest " + player["name"] + "!")
    print ("The story so far...")
    print ("You were walking back home from dinner with your friends.")
    print ("On the way home you see a path by your house leading into the woods.")
    print ("You live in the city, so a path and both woods seem strange.")
    print ("Do you decide to go for it?")

    pcmd = input("please choose yes or no >")

    # the player can choose yes or no
    if (pcmd == "yes"):
        print ("You walk down the path, it leads into a forest clearing...")
        input("press enter >")
        forestClearing()
    else:
        print ("No? ... That doesn't work here.")
        pcmd = input("press enter >")
        introStory() # repeat over and over until the player chooses yes!



# main! most programs start with this.
def main():
    printGraphic("title") # call the function to print an image
    introStory() # start the intro

main() # this is the first thing that happens
