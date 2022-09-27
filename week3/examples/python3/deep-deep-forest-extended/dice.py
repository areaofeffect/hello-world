#!/usr/bin/env python3

# a classic dice rolling app

import random 

numberOfSides = 6 # how many sides on your dice
weightedDiceOption = False # True or False

def simulateRoll(inNumberOfSides, weightedDice=weightedDiceOption):
    
    if (weightedDice == True):
        result = inNumberOfSides
    else:
        result = random.randint(1, numberOfSides)
    
    print ("You roll a: " + str(result) + " out of " + str(numberOfSides))

    return result
 
def rollDice():
    # this code will ask the user for a prediction
    # and roll the dice to find out if they are correct

    diceRoll = simulateRoll(numberOfSides, False)
    return diceRoll


if __name__ == "__main__":
    print("Running app...")
    rollDice()