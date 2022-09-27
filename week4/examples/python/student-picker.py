# import required modules
from tkinter import *
import os
from PIL import Image, ImageTk

students = [
  {"name": 'EunJung Yang', "image": 'EunJungYang-Headshot.png'}, 
  {"name": "Fan Fang","image": 'FanFang.png' }, 
  {"name": "Yiran Chi","image": 'YirinChi.png' }, 
  {"name": "Jinhee Jung", "image": 'JinheeJung.jpeg' }, 
  {"name": "Jihye Kim", "image": 'JihyeKim.png' }, 
  {"name": "Amogh Gharpure", "image": 'AmoghGharpure.jpeg' }, 
  {"name": "Bashayer Algow", "image": 'BashayerAlgow.jpeg' }, 
  {"name": "Sunwoo Park", "image": 'SunwooPark.jpeg' }, 
  {"name": "Minahil", "image": 'MinahilKasher.jpeg' }, 
  {"name": "Clear She", "image": 'ClearShen.jpeg' }, 
  {"name": "Harshi Rambhia", "image": 'HarshiRambhia.jpeg' }, 
  {"name": "Sukyong Kwon", "image": 'sukyong_1589604.png' }, 
  {"name": "Brenda Son", "image": 'BrendaSon.png' }, 
  {"name": "Joel Giambra", "image": 'JoelGiambra.jpeg' }, 
  {"name": "Yuri Kim", "image": 'YuriKim.jpeg' }, 
  {"name": "Junghye Hwang", "image": 'JunghyeHwang.jpeg' }, 
  {"name": "Yixin Chen", "image": 'YixinChen.jpeg' }, 
  {"name": "Tzuyi Lie", "image": 'TzuyiLee.jpeg' }, 
  {"name": "Chaeo Ri Bong", "image": 'ChaeRiBong.jpeg' }, 
  {"name": "Jueun Jeon", "image": 'JueunJeon.jpeg' }, 
  {"name": "Mihira Patel", "image": 'MihiraPatel.jpeg' }, 
  {"name": "Valunporn Sithivaraporn", "image": 'ValunpornSithivaraporn.png'} 
]


path = os.path.join(os.getcwd() +'/images')
images = os.listdir(path)

GUI = Tk()

GUI.title('Class of 2024')
GUI.geometry('768x550')

l=Label(text="Student Picker", compound=TOP, font=("Helvetica", 32))
l.pack()

count = 0
photo_images = []

# create dispaly images
for i in range(0, len(students)):
  photo_images.append(ImageTk.PhotoImage(Image.open(path + "/" + students[i]['image'])))

# recursive function to display images
def move():
  global count
  global photo_images
  print(count)
  if (count == len(students)):
    count=0
  l.config(text=students[count]['name'], image=photo_images[count])
  count += 1
  GUI.after(100, move)

move()

GUI.mainloop()