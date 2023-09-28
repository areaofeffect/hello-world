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
# palette = list(reversed(sns.color_palette("magma_r", 16).as_hex()))
# palette = list(sns.color_palette("Spectral", 16).as_hex())
# palette = list(sns.color_palette("ocean", 16).as_hex())
# palette = list(sns.color_palette("Purples", 16).as_hex())
# palette = list(sns.color_palette("Purples_r", 16).as_hex())
# palette = list(sns.color_palette("hls", 16).as_hex())
# palette = list(sns.color_palette("mako", 16).as_hex())
# palette = list(sns.color_palette("viridis", 16).as_hex())
# palette = list(sns.color_palette("cubehelix", 16).as_hex())
# palette = list(sns.color_palette("coolwarm", 16).as_hex())
palette = list(sns.color_palette("twilight", 16).as_hex())
# palette = list(sns.color_palette("Greys", 16).as_hex())


# convert hex to rgb
get_rgb = lambda x: list(int(x[i : i + 2], 16) for i in (0, 2, 4))
new_palette = [elem.replace("#", "") for elem in palette]
rgb_palette = list(map(get_rgb, new_palette))


scaleFactor = 4
appWidth = 1920
appHeight = 1080
width = int(1920 / 16)
height = int(1080 / 9)

app = Tk()
app.geometry("1920x1080")

# remove the white canvas background
canvas = Canvas(app, bg=palette[1])
canvas.pack(fill=BOTH, expand=1)
# canvas = Canvas(width=appWidth, height=appHeight)
# canvas.pack()

# create a blank image the size of the app canvas, you can include or omit a background color
# myImage = Image.new("RGBA", (appWidth * scaleFactor, appHeight * scaleFactor))
myImage = Image.new(
    "RGB",
    (appWidth * scaleFactor, appHeight * scaleFactor),
    color="black",
)
# next create a drawing context
drawingContext = ImageDraw.Draw(
    myImage, "RGBA"
)  # specify that you will use the alpha channel

# create function so we can draw circles in a loop
def drawCircle(x, y, radius, color, outline_color):
    # draw with an outline color and thickness
    drawingContext.ellipse(
        (x, y, x + radius, y + radius),
        fill=color,
        outline=outline_color,
        width=1, #randint(1, 20),
    )
    # draw with a black outline and default thickness
    # drawingContext.ellipse((x, y, x + radius, y + radius), fill=color, outline="black")


def drawMultipleCircles(x, y, radius, number):
    # an example of drawing things in a circle, but you can modify x,y in any way you want
    angle = pi * 2 / number
    for i in range(number):
        # if (i % 4) == 0:
        #     alpha = 10
        # else:
        #     alpha = 0
        outline_alpha = 255
        alpha = 0
        new_x = sin(angle * i) * radius / 2 + x  # x + (i * 20)
        new_y = cos(angle * i) * radius / 2 + y  # y + (i * 20)
        drawCircle(
            new_x,
            new_y,
            radius,
            (*rgb_palette[i], alpha),
            (*rgb_palette[i], outline_alpha),
        )


for i in range(int(appWidth / width)):
    for j in range(int(appHeight / height)):
        # draw more than one thing in each cell
        drawMultipleCircles(
            i * (width * scaleFactor),
            j * (height * scaleFactor),
            width * scaleFactor,
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
