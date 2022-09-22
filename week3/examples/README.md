# deep deep forest: setup

<br/>

Deep deep forest is an adventure game designed to explore conditionals, functions and interactive story telling. There are multiple endings depending on which path you take. Good luck!

```python
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
```

[The full game source is available here](https://github.com/areaofeffect/hello-world/blob/master/week3/examples/python3/deep-deep-forest/deep-deep-forest.py)
 
<br/>

## imports


- place these at the top of your python file
- imports are used to add functionality to our application
- they are also known as libraries.

```python
import random # random numbers
import sys # system stuff for exiting
```

<br/>

## objects
- an object describing our player
- keeping track of player state
- keeping track of what the player has picked up

<br/>

```json
player = { 
    "name": "p1", 
    "score": 0,
    "items" : ["milk"],
    "friends" : [],
    "location" : "start"
}
```

<br/>

- we can change the name with: ```player["name"] = "new name"```
- we can add to the score with: ```player["score"] += 100```
- we can add items with: ```player["items"].append("new item")```

<br/>

## included functions

- the following functions make up the game


### roll dice
- a chance! rolls a dice to decide what happens next
- the dice roll function takes parameters
- You pick the numbers you want to roll from with ```min``` and ```max```
- if the roll is ```>=``` the difficulty, the event is successful! (or true)
- all the numbers are ints

[rollDice(min, max, difficulty)](https://github.com/areaofeffect/hello-world/blob/master/week3/examples/python3/deep-deep-forest/deep-deep-forest.py#L19)

<br/>

### print graphics
- prints graphics to the screen
- pass in the name of the graphic you want to print as a "string"

[printGraphic(name)](https://github.com/areaofeffect/hello-world/blob/master/week3/examples/python3/deep-deep-forest/deep-deep-forest.py#L32)

<br/>

### game over
- lets the use know our game is over, and exits the game

[gameOver()](https://github.com/areaofeffect/hello-world/blob/master/week3/examples/python3/deep-deep-forest/deep-deep-forest.py#L104)

<br/>

### strange path (player option 2)
- the road less traveled
- a series of player choices and dice rolls to try to find the hidden gem

[strangePath()](https://github.com/areaofeffect/hello-world/blob/master/week3/examples/python3/deep-deep-forest/deep-deep-forest.py#L114)

<br/>

### forest path (player option 1)
- player option one
- meet the fox, roll dice to see if he is friendly
- special 'give gem' options appear if you have the gem!

[forestPath()](https://github.com/areaofeffect/hello-world/blob/master/week3/examples/python3/deep-deep-forest/deep-deep-forest.py#L174)

<br/>

### forest clearing
- there are two paths here, and player choice is decided with conditionals
- here the player can decide which path to take

[forestClearing()](https://github.com/areaofeffect/hello-world/blob/master/week3/examples/python3/deep-deep-forest/deep-deep-forest.py#L256)

<br/>

### intro story
- a little intro so the user has context to what is going on.

[introStory()](https://github.com/areaofeffect/hello-world/blob/master/week3/examples/python3/deep-deep-forest/deep-deep-forest.py#L306)

<br/>

### main
- the application starts here!

[main()](https://github.com/areaofeffect/hello-world/blob/master/week3/examples/python3/deep-deep-forest/deep-deep-forest.py#L334)

<br/>

## endings
- spoilers!

>! Sly Ending: Be friends with the fox!

>! Forest Hero Ending: Find the gem, and give it to the fox!

>! Spooky Ending: Find the gem, and trade it with the ghost!
