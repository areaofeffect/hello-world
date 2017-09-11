# this is how you declare a list in python
thingsInFridge = ["Water"]

# you can add items to the list with .append
# .append method works because Python already knows
# its a list (you said so above). all list2 can be appended
# to just like below.

thingsInFridge.append("Apple") 		# adds the string Apple to the list
thingsInFridge.append("Banana")		# adds the string Banana to the list
thingsInFridge.append("Tomato")		# adds the string Tomato to the list

# to use items in your array you can do this
# this will print out "Water, Apple, Banana, Tomato"
print ("Here's what's in my fridge: ")
print (thingsInFridge[0] + "," + thingsInFridge[1] + "," + thingsInFridge[2])
