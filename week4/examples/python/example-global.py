global myInput


def changeInput():
    global myInput
    print("You entered: " + myInput)
    # you are able to change a global variable inside a function if you declare it as global like on line 5
    myInput = "something else"


def printInput():
    # you can simply print a global variable
    print("My input is now: " + myInput)


def main():
    global myInput
    # you can set or change a global variable inside a function if you declare it as global like on line 17
    myInput = input("What is your input: ")
    changeInput()
    printInput()


main()
