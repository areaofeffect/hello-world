global myInput


def changeInput():
    global myInput
    print("You entered: " + myInput)
    myInput = "something else"


def printInput():
    print("My input is now: " + myInput)

def main():
    global myInput
    myInput = input("What is your input: ")
    changeInput()
    printInput()

main()

