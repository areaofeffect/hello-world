#!/usr/bin/env python3

# a classic dice rolling app
# start by configuring your dice below.
# python roll-dice.py to run

# import required modules
import random # to generate random numbers

# configure options
numberOfSides = 6 # how many sides on your dice
weightedDiceOption = False # True or False
prediction = 0 # global variable

# function to roll the dice
def rollDice(inNumberOfSides, weightedDice=weightedDiceOption):
    global prediction # we need to access the global variable

    # if weighted dice is true, we will cheat
    if (weightedDice == True):
        result = prediction
    else:
        # generate a random number between 1 and the number of sides
        result = random.randint(1, numberOfSides)

    print ("You roll : " + str(result) + " out of " + str(numberOfSides))

    return result

def main():
    global prediction # we need to access the global variable

    # user input
    prediction = input("Enter a prediction up to " + str(numberOfSides) + " : ")

    print("You predicted: " + str(prediction))

    # roll the dice and assign the result to a variable
    diceRoll = rollDice(numberOfSides, False)

    print("The dice rolled a: " + str(diceRoll))

    # if the prediction is correct, we will print a message
    if (int(diceRoll) == int(prediction)):
        print("Winner winner!")
    else:
        print("You lose!")


if __name__ == "__main__":
    print("Running app...")
    main()