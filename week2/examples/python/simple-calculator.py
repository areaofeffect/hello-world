# our boolean will let us know
# if we are still playing or not
playing = True

# this happens over and over if playing is True
while playing:

	# a dash of UX
	print ("welcome to the amazing numbers machine...")

	x = raw_input("enter first number: ")
	y = raw_input("enter second number: ")

	# take our inputs and convert them to integers
	# this allows us to do maths on them
	x = int(x)
	y = int(y)

	# print out our results
	print ("x + y: " + str(x + y)) # add
	print ("x - y: " + str(x - y)) # subtract
	print ("x * y: " + str(x * y)) # multiply
	print ("x / y: " + str(x / y)) # divide
	print ("x % y: " + str(x % y)) # modulo