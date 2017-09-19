# enter a greeting
playerAnswer = raw_input ("How was your day?: ")

# now we validate
# little demo in a string function
playerAnswer = playerAnswer.lower()

# little demo in a few things
# conditionals (or, and)
# == operators
# if, elif, and else

if (playerAnswer == 'good'):
	print ("Glad you are feeling good!")

elif (playerAnswer == 'bad'):
	print ("Hope your day gets better!")

elif (playerAnswer == 'sleepy' or playerAnswer =='tired'):
	print ("I'm just a computer. Get some rest!")

else:
	print ("I don't understand!")