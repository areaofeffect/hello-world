from os import system
import random

sayings = ['Next up is ', 'Introducing ', 'Put your hands together for ']

classmates = ['name1', 'name 2', 'name 3']

command = 'say ' + random.choice(sayings) + random.choice(classmates)

system(command)
