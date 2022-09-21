#!/usr/bin/env python

# enter a greeting
print ("How was your day?")
playerAnswer = input ("options [good, bad, sleepy, tired] : ")

# now we validate
# little demo in a string function
playerAnswer = playerAnswer.lower()

if (playerAnswer == 'good'):
	print ("Glad you are feeling good!")

elif (playerAnswer == 'bad'):
	print ("Hope your day gets better!")

elif (playerAnswer == 'sleepy' or playerAnswer =='tired'):
	print ("I'm just a computer. Get some rest!")

else:
	print ("I don't understand!")
