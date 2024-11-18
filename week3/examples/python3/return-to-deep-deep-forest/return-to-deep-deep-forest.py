import random
import sys
import paho.mqtt.client as mqtt
import gameObjects
import gameGraphics
import dice

# MQTT Configuration
mqtt_broker = "23.21.151.236"
mqtt_port = 1883
mqtt_topic = "led/control"

# Simplified callbacks
def on_connect(client, userdata, flags, rc, properties=None):  # Made properties optional
    if rc == 0:
        print("Successfully connected to MQTT broker")
    else:
        print(f"Failed to connect to MQTT broker, error code: {rc}")

def on_disconnect(client, userdata, rc):
    if rc != 0:
        print(f"Unexpected MQTT disconnection, code: {rc}")

def on_publish(client, userdata, mid):
    print(f"Message {mid} published successfully")

# Modify MQTT setup
client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
client.on_connect = on_connect
client.on_publish = on_publish
client.connect_async(mqtt_broker, mqtt_port, 60)
client.loop_start()  # Starts background thread for non-blocking operation

# Initialize MQTT - moved to main function
client = None

def init_mqtt():
    global client
    try:
        # Create client with default protocol
        client = mqtt.Client()
        client.on_connect = on_connect
        client.on_disconnect = on_disconnect
        print(f"Connecting to MQTT broker at {mqtt_broker}...")
        client.connect(mqtt_broker, mqtt_port, 60)
        client.loop_start()
        return True
    except Exception as e:
        print(f"Error connecting to MQTT: {e}")
        return False

def send_color(color_hex):
    if client and client.is_connected():
        try:
            client.publish(mqtt_topic, f"color:{color_hex}")
            print(f"Sent color command: {color_hex}")
        except Exception as e:
            print(f"Error sending color: {e}")

def send_win():
    if client and client.is_connected():
        try:
            client.publish(mqtt_topic, "win")
            print("Sent win command")
        except Exception as e:
            print(f"Error sending win: {e}")

def cleanup_mqtt():
    if client:
        try:
            client.loop_stop()
            client.disconnect()
            print("MQTT connection closed")
        except Exception as e:
            print(f"Error during MQTT cleanup: {e}")


def gameOver():
    gameGraphics.print("fox")
    send_win()  # Trigger rainbow pattern
    print("-------------------------------")
    print("to be continued!")
    print("name: " + gameObjects.player["name"])
    print("score: " + str(gameObjects.player["score"]))
    return

def strangePath():
    print("The path looks dark but you move forward anyway...")
    print("You stop when you notice something shiny next to a tree.")
    gameGraphics.printGraphic("tree")
    input("press enter >")

    print("You consider your options.")
    print("options: [ search tree , keep going , back to clearing]")

    playerInput = input(">")

    if (playerInput == "search tree"): 
        print ("You search the tree...")
        print ("Let's roll a dice to see what happens next!")

        difficulty = 10
        roll = dice.rollDice()
        
        if (roll >= 3):
            print ("It looks like a magic gem. Right here in the forest!")
            print ("Do you take the gem?")
            
            gameGraphics.printGraphic("gem")

            playerInput = input("yes or no >")

            if (playerInput == "no"):
                print ("You leave it there.")
                strangePath()

            elif (playerInput == "yes"):
                print ("You pick it up and return to the clearing.")
                gameObjects.player["items"].append("gem")
                gameObjects.player["score"] += 100
                send_color("0000FF")  # Blue for finding gem
                forestClearing()

            else:
                print ("You leave it there.")
                forestClearing()

        else:
            print ("Turns out it's nothing... oh well.")
            strangePath()

    elif (playerInput == "keep going"):
        print ("You keep going forward... you have a strange feeling")
        print ("that you keep seeing the same trees over and over...")
        strangePath()

    elif (playerInput == "back to clearing"):
        print ("You decide to go back.")
        playerInput = input(">")
        forestClearing()

    else:
        print ("You can't do that!")
        strangePath()

def forestPath():
    print ("The forest path leads you down a narrow path of trees.")
    print ("It is a very nice day.")
    input("press enter >")

    gameGraphics.printGraphic("fox")
    print ("You walk for a while and see a small fox jump onto the path")
    print ("from the trees. 'Who travels in my woods?', says the fox.")
    print ("...He can talk!")
    input("press enter >")
    
    print ("You consider your options.")

    if ("gem" in gameObjects.player["items"]):
        print ("options: [ look around , talk to fox , give gem, run ]")
    else:
        print ("options: [ go back, talk to fox, run ]")

    playerInput = input(">")

    if (playerInput == "go back"):
        print ("You go back...")
        forestClearing()
    
    elif (playerInput == "talk to fox"):
        print ("You try and talk to the white fox!")
        print ("Let's roll a dice to see what happens next!")
        input("press enter to roll >")

        difficulty = 5
        chanceRoll = dice.rollDice()

        if (chanceRoll >= 3):
            print ("It's you're lucky day! He want's to be your friend.")
            gameObjects.player["score"] += 50
        else:
            print ("You try to talk to the fox, but... it looks at you confused.")
            forestPath()
        
        playerInput = input("be friends with the white fox? yes or no >")

        if (playerInput == "yes"):
            print ("The fox becomes your friend!")
            gameObjects.player["friends"].append("white fox")
            gameObjects.player["score"] = int(gameObjects.player["score"]) + 100
            send_color("00FF00")  # Green for fox friendship
            print ("Your score increased to: " + str(gameObjects.player["score"]))
            gameOver()

        elif (playerInput == "no"):
            print ("The fox runs away!")
            forestPath()
        
        else:
            forestPath()

    elif (playerInput == "give gem"):
        print ("You give the gem to the fox!")
        input("press enter>")
        gameGraphics.printGraphic("gem")
        gameOver()

    elif (playerInput == "run"):
        print ("You run!")
        forestClearing()

    else:
        print ("I don't understand.")
        forestPath()

def forestClearing():
    print ("You stand in a forest clearing.")
    print ("There is a path ahead of you and another path to the right.")
    
    if (("gem" in gameObjects.player["items"]) and not ("fox" in gameObjects.player["friends"])):
        print ("Your options: [ look around, path, trade gem with the forest ghost]")
    elif ("gem" in gameObjects.player["items"]):
        print ("Your options: [ look around, path, exit ]")
    else:
        print ("Your options: [ look around, path , other path , exit ]")

    playerInput = input(">")

    if (playerInput == "look around"):
        print ("You look around... the path behind you is .... gone?")
        input("press enter >")
        forestClearing()

    elif (playerInput == "path"):
        print ("You take the path.")
        input("press enter >")
        forestPath()

    elif (playerInput == "other path"):
        print ("You take the other path.")
        input("press enter >")
        strangePath()

    elif (playerInput == "exit"):
        print ("you exit.")
        return
        
    elif (playerInput == "trade gem with the forest ghost"):
        print ("you give the gem to the ghost... hugh?")
        gameGraphics.printGraphic("ghost")
        print ("'tooooodaaloooooo'\", he says.")
        return

    else:
        print ("I don't understand that")
        forestClearing()

def introStory():
    print ("Good to see you gain! What should I call you?")
    gameObjects.player["name"] = input("Please enter your name >")

    print ("Welcome to the deep deep forest " + gameObjects.player["name"] + "!")
    print ("The story so far...")
    print ("You were walking back home from dinner with your friends.")
    print ("On the way home you see a path by your house leading into the woods.")
    print ("You live in the city, so a path and both woods seem strange.")
    print ("Do you decide to go for it?")

    playerInput = input("please choose yes or no >")

    if (playerInput == "yes"):
        print ("You walk down the path, it leads into a forest clearing...")
        input("press enter >")
        forestClearing()
    else:
        print ("No? ... That doesn't work here.")
        playerInput = input("press enter >")
        introStory()

def main():
    print("Initializing game...")
    if not init_mqtt():
        print("Failed to initialize MQTT, continuing without LED control")
    
    try:
        gameGraphics.printGraphic("title")
        introStory()
    except KeyboardInterrupt:
        print("\nGame interrupted by user")
    except Exception as e:
        print(f"Game error: {e}")
    finally:
        cleanup_mqtt()

if __name__ == "__main__":
    print("Running app...")
    main()
