from os import system
import random

sayings = ['Next up is ', 'Introducing ', 'Put your hands together for ']

classmates = ['Abhinav Sircar', 'Addl Hou', 'Andrea Kang', 'Arielle Royston',
'Chao Dai', 'Crystal Wang', 'Glenda Capdeville', 'Jason Branch', 'Johnson Vinoth Kumar',
'Kate Styer', 'Ke Hu', 'Kinza Kasher', 'Margarita Yong', 'Mia Darling Ibanez Risso',
'Angie Ngoc Tran', 'Rachel Balma', 'Jennifer Wei', 'Xiaoxi Yuan', 'Yumeng Ji']

command = 'say ' + random.choice(sayings) + random.choice(classmates)

system(command)