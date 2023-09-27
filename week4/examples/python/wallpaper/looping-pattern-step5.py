# import required modules
from tkinter import *
from PIL import Image, ImageDraw, ImageTk

if not hasattr(Image, "Resampling"):  # Pillow<9.0
    Image.Resampling = Image

from random import randint
import seaborn as sns  # install seaborn for color palettes (https://seaborn.pydata.org/installing.html)
from math import sin, cos, pi

# create a palette of 16 colors as hex values
# http://man.hubwiz.com/docset/Seaborn.docset/Contents/Resources/Documents/tutorial/color_palettes.html
# https://holypython.com/python-visualization-tutorial/colors-with-python/
palette = list(sns.color_palette("magma", 16).as_hex())
# palette = list(sns.color_palette("Spectral", 16).as_hex())
# palette = list(sns.color_palette("ocean", 16).as_hex())
# palette = list(sns.color_palette("Purples", 16).as_hex())
# palette = list(sns.color_palette("Purples_r", 16).as_hex())

# convert hex to rgb
get_rgb = lambda x: list(int(x[i : i + 2], 16) for i in (0, 2, 4))
palette = [elem.replace("#", "") for elem in palette]
rgb_palette = list(map(get_rgb, palette))

print(palette)
print(rgb_palette)


scaleFactor = 4
appWidth = 400
appHeight = 400
width = 100
height = 100

app = Tk()
app.geometry("400x400")

# remove the white canvas background
canvas = Canvas(app, bg="white")
canvas.pack(fill=BOTH, expand=1)

# create a blank image the size of the app canvas, you can include or omit a background color
myImage = Image.new("RGB", (appWidth * scaleFactor, appHeight * scaleFactor))
# myImage = Image.new(
#     "RGBA", (appWidth * scaleFactor, appHeight * scaleFactor), (0, 0, 0, 0)
# )
# next create a drawing context
drawingContext = ImageDraw.Draw(
    myImage, "RGBA"
)  # specify that you will use the alpha channel

# create function so we can draw circles in a loop
def drawCircle(x, y, radius, color, outline_color):
    # draw with an outline color and thickness
    drawingContext.ellipse(
        (x, y, x + radius, y + radius), fill=color, outline=outline_color, width=5
    )
    # draw with a black outline and default thickness
    # drawingContext.ellipse((x, y, x + radius, y + radius), fill=color, outline="black")


def drawMultipleCircles(x, y, radius, color, number):
    # an example of drawing things in a circle, but you can modify x,y in any way you want
    angle = pi * 2 / number
    for i in range(number):
        new_x = sin(angle * i) * radius / 2 + x  # x + (i * 50)
        new_y = cos(angle * i) * radius / 2 + y  # y + (i * 50)
        drawCircle(new_x, new_y, radius / 2, (*color, 125), (*color, 255))


for i in range(4):
    for j in range(4):
        print("row", i, "col", j)
        # draw more than one thing in each cell
        drawMultipleCircles(
            i * (width * scaleFactor),
            j * (height * scaleFactor),
            width * scaleFactor,
            rgb_palette[4 * i + j],
            16,
        )

# resize it back to app width and so we can smooth it out, https://pillow.readthedocs.io/en/stable/handbook/concepts.html#PIL.Image.LANCZOS
# a note about this, newer versions of Pillow will warn about the use of ANTIALIAS DeprecationWarning: ANTIALIAS is deprecated and will be removed in Pillow 10 (2023-07-01). Use Resampling.LANCZOS instead.
# choose the line that works with your installation
myImage = myImage.resize((appWidth, appHeight), Image.Resampling.LANCZOS)
# option to save your image to file
myImage.save("myImage.png", bitmap_format="png")
# myImage = myImage.resize((appWidth, appHeight), Image.ANTIALIAS)
# convert the image to a Tkinter PhotoImage
myImage = ImageTk.PhotoImage(myImage)
# draw it to the app canvas
canvas.create_image(0, 0, image=myImage, anchor="nw")

app.mainloop()
