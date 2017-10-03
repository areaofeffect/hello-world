from PIL import Image

# open your image
img = Image.open('red.png')

# convert to RGB color space
colors = img.convert('RGB').getcolors()

# sort the colors from biggest to smallest (reverse)
sortedColors = sorted(colors, reverse=True)

# print out the results
print sortedColors
