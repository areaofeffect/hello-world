# import required modules
from tkinter import *
from PIL import Image, ImageDraw, ImageTk
from random import randint

scaleFactor = 4
appWidth = 400
appHeight = 400
width = 100
height = 100

app = Tk()
app.geometry("400x400")

canvas = Canvas(app, bg="white")
canvas.pack(fill=BOTH, expand=1)

# create a blank image the size of the app canvas
myImage = Image.new(
    "RGB", (appWidth * scaleFactor, appHeight * scaleFactor), (255, 255, 255)
)
# next create a drawing context
drawingContext = ImageDraw.Draw(myImage)

# create function so we can draw circles in a loop
def drawCircle(x, y, radius, color):
    drawingContext.ellipse((x, y, x + radius, y + radius), fill=color)


for i in range(4):
    for j in range(4):
        print("row: ", i, "col: ", j)
        drawCircle(
            i * (width * scaleFactor),
            j * (height * scaleFactor),
            width * scaleFactor,
            (randint(0, 255), randint(0, 255), randint(0, 255)),  # Random colors
        )
# resize it back to 100 so we can smooth it out, https://pillow.readthedocs.io/en/stable/handbook/concepts.html#PIL.Image.LANCZOS
myImage = myImage.resize((appWidth, appHeight), Image.Resampling.LANCZOS)
# convert the image to a Tkinter PhotoImage
myImage = ImageTk.PhotoImage(myImage)
# draw it to the app canvas
canvas.create_image(0, 0, image=myImage, anchor="nw")

app.mainloop()
