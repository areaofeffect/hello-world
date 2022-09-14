# raw_input allows the user to type
x = raw_input("enter first number: ")
y = raw_input("enter second number: ")

# by default numbers are treated as 'strings
# the result of below is "1" + "2" or "12" 
resultString = x + y 

# we can convert our strings to integers
# the result of below is 1 + 2 or 3
resultInt = int(x) + int(y)

# finally we print out our results to the user
print("the result of x + y as strings: " + resultString) # result as a string
print("the result of x + y as integers: " + str(resultInt)) # result as numbers