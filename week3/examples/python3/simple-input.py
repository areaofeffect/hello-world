# an object describing our player
player = { 
    "items": []
}

rawInputValue = "2"

def printGraphic(inGraphic):
  if (inGraphic == "test"):
    print("""
       ***************                                                
       *             *                                                
       *             *                                                
       *             *                                                
       *           ....                                               
       *           .  ..                                              
       *          ..   .                                              
       *          ..   .                                              
       *           .....                                              
       *             .                                                
       *       .......                                                
       *                                                              
       *                                                              
       *                                                              
       *                                                              
       *                                                              
       *                                                              
       *                                                              
       *                                                              
       *                                                              
       *                                                              
       *                  
  """)
  

def setUpPlayer():
  player["items"].append("money")
  print(player)

def gringots():
  print("awesome you are in gringots")

def chooseStore():
  print("chooseStore")
  playerCommand = input("please choose a store [1, 2, 3] > ")
  print ("playerCommand", (playerCommand == "1"))
  
  if (playerCommand == "1"):
    print("it's 1")
    gringots()
    
  
def main():
  chooseStore()



main()