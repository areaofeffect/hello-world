from os import system
import random
from PIL import Image # library for images

# array of strings
sayings = ['Next up is ', 'Introducing ', 'Put your hands together for ', 'say hello to ']
classmates = [ 
    "Allison",
    "April",
    "Awanee",
    "Danny",
    "Esther",
    "Hillary",
    "Hyun Lee",
    "Jane",
    "Leey",
    "Mona",
    "Nayeon Kim",
    "Roshel",
    "Yi Jie",
    "Shiyu",
    "Sukky Yan",
    "Syed",
    "Yazhen",
    "Yeseul Namkoung",
    "Yi Li",
    "Young Kim",
    "Zhuofan"]

# create the command by concatinating strings
chosenIntroduction = random.choice(sayings)
chosenClassmate = random.choice(classmates)
command = 'say ' + chosenIntroduction + chosenClassmate

# do the command
print(command)
system(command)

# creating a object
im = Image.open('./classmates/' + chosenClassmate + '.png')

# show the image
im.show()