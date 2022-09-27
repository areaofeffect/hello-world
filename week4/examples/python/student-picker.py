# import required modules
from tkinter import *
import os
from PIL import Image, ImageTk
from playsound import playsound
import random

students = [
    {"name": "EunJung Yang", "image": "EunJungYang-Headshot.png"},
    {"name": "Fan Fang", "image": "FanFang.png"},
    {"name": "Yiran Chi", "image": "YirinChi.png"},
    {"name": "Jinhee Jung", "image": "JinheeJung.jpeg"},
    {"name": "Jihye Kim", "image": "JihyeKim.png"},
    {"name": "Amogh Gharpure", "image": "AmoghGharpure.jpeg"},
    {"name": "Bashayer Algow", "image": "BashayerAlgow.jpeg"},
    {"name": "Sunwoo Park", "image": "SunwooPark.jpeg"},
    {"name": "Minahil Kasher", "image": "MinahilKasher.jpeg"},
    {"name": "Clear She", "image": "ClearShen.jpeg"},
    {"name": "Harshi Rambhia", "image": "HarshiRambhia.jpeg"},
    {"name": "Sukyong Kwon", "image": "sukyong_1589604.png"},
    {"name": "Brenda Son", "image": "BrendaSon.png"},
    {"name": "Joel Giambra", "image": "JoelGiambra.jpeg"},
    {"name": "Yuri Kim", "image": "YuriKim.jpeg"},
    {"name": "Junghye Hwang", "image": "JunghyeHwang.jpeg"},
    {"name": "Yixin Chen", "image": "YixinChen.jpeg"},
    {"name": "Tzuyi Lee", "image": "TzuyiLee.jpeg"},
    {"name": "Chaeo Ri Bong", "image": "ChaeRiBong.jpeg"},
    {"name": "Jueun Jeon", "image": "JueunJeon.jpeg"},
    {"name": "Mihira Patel", "image": "MihiraPatel.jpeg"},
    {"name": "Valunporn Sithivaraporn", "image": "ValunpornSithivaraporn.png"},
]

path = os.path.join(os.getcwd() + "/images")
images = os.listdir(path)

soundPath = os.path.join(os.getcwd() + "/sounds")
soundfiles = ["1.wav", "2.wav", "3.wav", "4.wav", "5.wav"]

GUI = Tk()
GUI.title("Class of 2024")
GUI.geometry("768x550")

l = Label(text="Student Picker", compound=TOP, font=("Helvetica", 32))
l.pack()

count = 0
photo_images = []
loop = True

# create dispaly images
for i in range(0, len(students)):
    photo_images.append(
        ImageTk.PhotoImage(Image.open(path + "/" + students[i]["image"]))
    )
final_image = ImageTk.PhotoImage(Image.open(os.getcwd() + "/" + "thats_all_folks.png"))

# recursive function to display images in a loop
def move():
    global count
    global photo_images
    global loop
    # return to the beginning of the list if we hit the end
    if count == len(students):
        count = 0
    l.config(text=students[count]["name"], image=photo_images[count])
    # spin the wheel by calling this recursively
    if loop:
        playsound(soundPath + "/tick.wav", block=False)
        count += 1
        speed = int(1000 / len(students))
        GUI.after(speed, move)


# start the loop
move()

# handle enter/return key press
def select(event):
    global count
    global loop
    # print("select loop: ", loop, " count: ", count, " # left: ", len(students))

    if len(students) == 1:
        print("that's all folks!")
        l.config(text="No more students", image=final_image)
        GUI.unbind_all("<Return>")
        playsound(soundPath + "/folks.mp3", block=False)
        return

    if loop:
        # stop the loop and select a student
        loop = False
        if count == len(students):
            count = 0
        print("stop loop and select", count, students[count]["name"])
        print("only... ", len(students) - 1, " left!")
        playsound(soundPath + "/" + str(random.randrange(1, 6)) + ".wav", block=False)

    else:
        # remove the selected student, and start the loop again
        print("remove selected student", count, students[count]["name"])
        students.remove(students[count])
        photo_images.remove(photo_images[count])
        count = 0
        if len(students) > 1:
            # start the loop again
            loop = True
            move()
        else:
            # only one student left, so do not restart the loop
            print("select the last student", students, photo_images)
            l.config(text=students[0]["name"], image=photo_images[0])
            playsound(
                soundPath + "/" + str(random.randrange(1, 6)) + ".wav", block=False
            )


# bind the enter/return key to the select function
GUI.bind("<Return>", select)
# start the GUI
GUI.mainloop()
