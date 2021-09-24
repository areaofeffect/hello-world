from os import system

worldInMyEyes = [
  {
    "name": "andrea",
    "light": True,
    "mikeysFries": ["fries", "cheese fries", "chili cheese fries", "sweet potato fries"]
  },
  {
    "name": "rachel",
    "StillAwake": True,
    "OnMyMind": ["HW", "Boyfriend", "money", "roommate"]
  },
  {
    "name": "kinza",
    "isHot": True,
    "namesofbooks": ["harrypotter", "sunday", "lordoftherings", "thinkingwithtype"]

  },
  {
    "name": "paula",
    "happy": True,
    "itemsOnMyBackbag": ["books", "phone", "macbook"]
  },
  {
    "name":"arielle",
    "dog": {
      "furLength": "Long",
      "furColor": "White",
      "breed": "Samoyed",
      "tailType": "Long and curly",
      "fixed": True,
      "legCount": 4,
      "temperment": "Happy / Playful",
      "age": .7
    }
  },
  {
    "name":"angie",
    "myPlant": "Cactus",
    "myBook": ["Novel","Self-help","Psychology"],
    "myAvocados": 3
  },
  {
    "name":"abhinav",
    "amIAlive": True,
    "myFavTvshows": ["24", "Game of Thrones", "Suits", "Fringe", "Black Mirror"],
    "myFav": "Priyanka Chopra"
  },
  {
    "name":"jason",
    "Bestmovies": ["gladiator", "theprestige", "inception"],
    "myfloat": 1.6180339887
  },
  {
    "name":"jennifer",
    "myWindow":True,
    "Christmas": "December 25, 2017"
  },
  {
    "name":"crystal",
    "theMeaningOfLife": "42",
    "myFavoriteDisneyMovies":["Mulan", "Aladdin", "Beauty and the Beast", "Zootopia", "Lion King", "Pocohantas", "Hunchback of Notre Dame"]

  },
  {
    "name":"glenda",
    "languages": ["English", "Code"],
    "status": "student"
  },
  {
    "name":"kate",
    "Todo": ["reading", "homemade switch", "eat", "sleep"],
    "DonaldTrump": {
      "color": "orange",
      "mental_health": "unstable",
      "leadership_style": "authoritarian",
      "communication_skills": "lies"
    }
  },
  {
    "name":"margarita",
    "myBackpackItems": ["Laptop", "Chargers", "Glasses", "Keys", "Metrocard", "Wallet", "Cellphone"],
    "myCoffeeOrder":  {
      "myDrink": "cappuccino",
      "size": "small",
      "milk": "skim",
      "sugar": "yes"
    }
  }
]

def sayPhrase(phrase):
  command = 'say ' + phrase
  system(command)

def getName(d):
  for key, value in d.items():
    if (key == "name"):
      return value

for i in range(len(worldInMyEyes)):  
  things = []
  for key, value in worldInMyEyes[i].items():
    if not(key == "name"):
      if (type(value) is str or type(value) is bool):
        strText = " " + key + " is " + str(value) + " "
        things.append(strText)  

      if (type(value) == list):
        listText = key + " are "  + " and ".join(str(x) for x in value) + " "
        things.append(listText)  

      if (type(value) == dict):
        for subKey, subValue in value.items():
          dictText = key + "'s " + subKey + " is " + str(subValue) + " "
          things.append(dictText)

  allThethings =  " and ".join(str(x) for x in things)
  talkToMe = getName(worldInMyEyes[i]) + " tells me that " + allThethings

  print(talkToMe)
  sayPhrase(talkToMe)




