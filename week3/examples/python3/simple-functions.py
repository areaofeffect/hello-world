#!/usr/bin/env python

# functions
# and passing parameters to functions

myMessage = "yo"

# example 1
def sayHello():
	print("hello")

def sayGoodbye():
	print("goodbye")

# call the function, with no parameters
sayHello()
sayGoodbye()


# example 2
def sayMessage(myMessage):
	print(myMessage)

# call the function and pass a parameter
sayMessage(myMessage)
sayMessage("goodbye")