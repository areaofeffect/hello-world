# let the user know what's going on
print ("Welcome to MadLibs!")
print ("Answer the questions below to play.")
print ("-----------------------------------")

# variables containing all of your story info
adjective1 = raw_input("Enter an adjective: ")
color1 = raw_input("What is your favorite color?: ")
location1 = raw_input("Name a place: ")
object1 = raw_input("An object from your home: ")
famousPerson1 = raw_input("A famous person you don't really like: ")
famousPerson2 = raw_input("A famous person you sort of like, but not you're favorite: ")
yourName = raw_input("What's your name?: ")
adjective2 = raw_input("Enter one more adjective: ")

# this is the story. it is made up of strings and variables.
story = "The dear " + adjective1 + " grandma has come to " + color1 + " Riding Hood's " + location1 + ", " \
"carrying a " + object1 + " for her grandchild which she has made by " + famousPerson1 + ". " \
"This is a " + adjective2 + " hood made in " + yourName + " cleverest and most loving way. " \
"" + yourName + " then goes home to her lonely hut in the woods. " \
"One beautiful autumn afternoon little " + color1 + " Riding Hood is sent by " + famousPerson2 + " " \
"to take some goodies back to " + yourName + "."

# finally we print the story
print (story)