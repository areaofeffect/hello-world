# functions
# and passing parameters to functions

myMessage = "yo"

# example 1
def sayHello():
	print("hello")

def sayGoodbye():
	print("goodbye")

sayHello()
sayGoodbye()


# example 2
def sayMessage(myMessage):
	print(myMessage)

sayMessage(myMessage)
sayMessage("goodbye")