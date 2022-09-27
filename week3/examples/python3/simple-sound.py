#!/usr/bin/env python

import os
from playsound import playsound # pip3 install playsound

# Get the path of the sound file
currentDirectory = os.getcwd()
filepath = os.path.join(currentDirectory, 'sounds/SFX_GET_ITEM_1.wav')

# make sure the file exists
print(filepath)

# play the sound
playsound(filepath)