# import required modules
from tkinter import *
from PIL import Image, ImageDraw, ImageTk

if not hasattr(Image, "Resampling"):  # Pillow<9.0
    Image.Resampling = Image
    
from random import randint
import seaborn as sns  # install seaborn for color palettes (https://seaborn.pydata.org/installing.html)

# create a palette of 16 colors as hex values
# http://man.hubwiz.com/docset/Seaborn.docset/Contents/Resources/Documents/tutorial/color_palettes.html
# https://holypython.com/python-visualization-tutorial/colors-with-python/
# palette = list(sns.color_palette("Spectral", 16).as_hex())
# palette = list(sns.color_palette("ocean", 16).as_hex())
palette = list(sns.color_palette("Purples", 16).as_hex())
# palette = list(sns.color_palette("Purples_r", 16).as_hex())

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
drawingContext = ImageDraw.Draw(
    myImage, "RGBA"
)  # specify that you will use the alpha channel

# create function so we can draw circles in a loop
def drawCircle(x, y, radius, color):
    drawingContext.ellipse((x, y, x + radius, y + radius), fill=color)


for i in range(4):
    for j in range(4):
        print("row", i, "col", j)
        drawCircle(
            i * (width * scaleFactor),
            j * (height * scaleFactor),
            width * scaleFactor,
            palette[4 * i + j],
        )

# resize it back to app width and so we can smooth it out, https://pillow.readthedocs.io/en/stable/handbook/concepts.html#PIL.Image.LANCZOS
# a note about this, newer versions of Pillow will warn about the use of ANTIALIAS DeprecationWarning: ANTIALIAS is deprecated and will be removed in Pillow 10 (2023-07-01). Use Resampling.LANCZOS instead.
# choose the line that works with your installation
myImage = myImage.resize((appWidth, appHeight), Image.Resampling.LANCZOS)
# myImage = myImage.resize((appWidth, appHeight), Image.ANTIALIAS)
# convert the image to a Tkinter PhotoImage
myImage = ImageTk.PhotoImage(myImage)
# draw it to the app canvas
canvas.create_image(0, 0, image=myImage, anchor="nw")

app.mainloop()
