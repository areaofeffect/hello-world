# import python resource
import random # random numbers (https://docs.python.org/3.3/library/random.html)
import sys # system stuff for exiting (https://docs.python.org/3/library/sys.html)

# import game resources
import gameObjects
import gameGraphics
import dice

# print the player object
#print (gameObjects.player)

# roll a dice and assign
#results = dice.rollDice()

def gameOver():
    gameGraphics.print("fox")
    
    print("-------------------------------")
    print("to be continued!")
    print("name: " + gameObjects.player["name"] ) # customized with a name
    print( "score: " + str(gameObjects.player["score"]) ) # customized with a score
    return

def strangePath():
    print("The path looks dark but you move forward anyway...")
    print("You stop when you notice something shiny next to a tree.")
    gameGraphics.printGraphic("tree")
    input("press enter >")

    print("You consider your options.")
    print("options: [ search tree , keep going , back to clearing]")

    playerInput = input(">")

    if (playerInput == "search tree"): 
        print ("You search the tree...")
        print ("Let's roll a dice to see what happens next!")

        # roll a dice from 0 to 20 to see what happens
        # if your number is higher than the difficulty, you win!
        difficulty = 10
        roll = dice.rollDice()
        
        # you have to get lucky! this only happens to the player
        # if you roll the dice high enough
        if (roll >= 3):
            print ("It looks like a magic gem. Right here in the forest!")
            print ("Do you take the gem?")
            
            gameGraphics.printGraphic("gem")

            # we dive further into the logic
            playerInput = input("yes or no >")

            if (playerInput == "no"):
                print ("You leave it there.")
                strangePath()

            elif (playerInput == "yes"):
                print ("You pick it up and return to the clearing.")
                gameObjects.player["items"].append("gem") # add an item to the array with append
                gameObjects.player["score"] += 100 # add to the score
                forestClearing()

            else:
                print ("You leave it there.")
                forestClearing()

        else:
            print ("Turns out it's nothing... oh well.")
            strangePath()

    elif (playerInput == "keep going"):
        print ("You keep going forward... you have a strange feeling")
        print ("that you keep seeing the same trees over and over...") # the lost woods reference
        strangePath()

    elif (playerInput == "back to clearing"):
        print ("You decide to go back.")
        playerInput = input(">")
        forestClearing()

    else:
        print ("You can't do that!")
        strangePath()


def forestPath():
    print ("The forest path leads you down a narrow path of trees.")
    print ("It is a very nice day.")
    input("press enter >")

    gameGraphics.printGraphic("fox")
    print ("You walk for a while and see a small fox jump onto the path")
    print ("from the trees. 'Who travels in my woods?', says the fox.")
    print ("...He can talk!")
    input("press enter >")
    
    print ("You consider your options.")

    # check the list for items
    # the 'in' keyword helps us do this easily
    if ("gem" in gameObjects.player["items"]):
        print ("options: [ look around , talk to fox , give gem, run ]")
    else:
        print ("options: [ go back, talk to fox, run ]")

    playerInput = input(">")

    # option 1: look at the fox
    if (playerInput == "go back"):
        print ("You go back...")
        forestClearing() # try again
    
    # option 2: talk to the fox
    elif (playerInput == "talk to fox"):
        print ("You try and talk to the white fox!")
        print ("Let's roll a dice to see what happens next!")
        input("press enter to roll >")

        difficulty = 5
        chanceRoll = dice.rollDice() # roll a dice between 0 and 6

        # if the roll is higher than 5... 75% chance
        if (chanceRoll >= 3):
            print ("It's you're lucky day! He want's to be your friend.")
            gameObjects.player["score"] += 50
        else:
            print ("You try to talk to the fox, but... it looks at you confused.")
            forestPath() # try again
        
        # nested actions and ifs
        playerInput = input("be friends with the white fox? yes or no >")

        # yes
        if (playerInput == "yes"):

            print ("The fox becomes your friend!")

            gameObjects.player["friends"].append("white fox")

            # string and int converstion!
            # we need to convert the score to a number to add to it
            # then convert it back to a string to display it to the player
            gameObjects.player["score"] = int(gameObjects.player["score"]) + 100 # conversion

            # we generate a custom string and add the score
            print ( "Your score increased to: " + str(gameObjects.player["score"]) ) 
            
            gameOver()

        # no
        elif (playerInput == "no"):
            print ("The fox runs away!")
            forestPath()
        
        # try again
        else:
            forestPath()

    elif (playerInput == "give gem"):
        print ("You give the gem to the fox!")
        input("press enter>")
        gameGraphics.printGraphic("gem")
        gameOver()


    # option 3: run
    elif (playerInput == "run"):
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

    if (("gem" in gameObjects.player["items"]) and not ("fox" in gameObjects.player["friends"])):
        print ("Your options: [ look around, path, trade gem with the forest ghost]")

    elif ("gem" in gameObjects.player["items"]):
        print ("Your options: [ look around, path, exit ]")

    else:
        print ("Your options: [ look around, path , other path , exit ]")

    playerInput = input(">") # user input

    # player options
    if (playerInput == "look around"):
        # its a trick!
        print ("You look around... the path behind you is .... gone?")

        input("press enter >")
        forestClearing()

    # path option
    elif (playerInput == "path"):
        print ("You take the path.")
        input("press enter >")
        forestPath() # path 1

    # path2 option
    elif (playerInput == "other path"):
        print ("You take the other path.")
        input("press enter >")
        strangePath() # path 2

    # exiting / catching errors and crazy inputs
    elif (playerInput == "exit"):
        print ("you exit.")
        return # exit the application
        
    elif (playerInput == "trade gem with the forest ghost"):
        print ("you give the gem to the ghost... hugh?")
        gameGraphics.printGraphic("ghost")

        print ("'tooooodaaloooooo'\", he says.") # escaped
        return # exit the application, secret ending

    else:
        print ("I don't understand that")
        forestClearing() # the beginning


def introStory():
    # let's introduce them to our world
    print ("Good to see you gain! What should I call you?")
    gameObjects.player["name"] = input("Please enter your name >")

    # intro story, quick and dirty (think star wars style)
    print ("Welcome to the deep deep forest " + gameObjects.player["name"] + "!")
    print ("The story so far...")
    print ("You were walking back home from dinner with your friends.")
    print ("On the way home you see a path by your house leading into the woods.")
    print ("You live in the city, so a path and both woods seem strange.")
    print ("Do you decide to go for it?")

    playerInput = input("please choose yes or no >")

    # the player can choose yes or no
    if (playerInput == "yes"):
        print ("You walk down the path, it leads into a forest clearing...")
        input("press enter >")
        forestClearing()
    else:
        print ("No? ... That doesn't work here.")
        playerInput = input("press enter >")
        introStory() # repeat over and over until the player chooses yes!


def main():
    gameGraphics.printGraphic("title") # call the function to print an image
    introStory() # start the intro


if __name__ == "__main__":
    print("Running app...")
    main()