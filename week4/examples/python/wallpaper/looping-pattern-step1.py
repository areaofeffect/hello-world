# import required modules
from tkinter import *
from PIL import Image, ImageDraw, ImageTk

app = Tk()
app.geometry("400x400")

canvas = Canvas(app, bg="white")
canvas.pack(fill=BOTH, expand=1)

# create a blank image of size 100x100 and fill it with white
myImage = Image.new("RGB", (100, 100), (255, 255, 255))
# next create a drawing context
drawingContext = ImageDraw.Draw(myImage)
# draw an ellipse at an x,y of 0,0 with a radius of 50 to fill the image we created on line 12
drawingContext.ellipse((0, 0, 100, 100), fill=(255, 0, 0))
# convert the image to a Tkinter PhotoImage
myImage = ImageTk.PhotoImage(myImage)
# draw it to the app canvas
canvas.create_image(0, 0, image=myImage, anchor="nw")

app.mainloop()
