# import required modules
from tkinter import *
from PIL import Image, ImageDraw, ImageTk

scaleFactor = 4
width = 100
height = 100

app = Tk()
app.geometry("400x400")

canvas = Canvas(app, bg="white")
canvas.pack(fill=BOTH, expand=1)

# create a blank image of size 100x100 and fill it with white
myImage = Image.new("RGB", (width * scaleFactor, height * scaleFactor), (255, 255, 255))
# next create a drawing context
drawingContext = ImageDraw.Draw(myImage)
# draw an ellipse at an x,y of 0,0 with a radius of 50 * scale_factor to fill the image we created on line 16
drawingContext.ellipse(
    (0, 0, width * scaleFactor, height * scaleFactor), fill=(255, 0, 0)
)
# resize it back to 100 so we can smooth it out, https://pillow.readthedocs.io/en/stable/handbook/concepts.html#PIL.Image.LANCZOS

# this is a hack to get around the fact that the PIL.Image.LANCZOS is not available in Pillow<9.0
if not hasattr(Image, "Resampling"):  # Pillow<9.0
    Image.Resampling = Image
myImage = myImage.resize((width, height), Image.Resampling.LANCZOS)

# this is the correct way to do it
# myImage = myImage.resize((width, height), Image.LANCZOS)

# convert the image to a Tkinter PhotoImage
myImage = ImageTk.PhotoImage(myImage)
# draw it to the app canvas
canvas.create_image(0, 0, image=myImage, anchor="nw")

app.mainloop()
