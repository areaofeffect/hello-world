# IoT

# SVA IxD | Week 9


# MQTT

Let's install MQTT using [Homebrew](http://brew.sh/) Run each of the following commands in Terminal

#### 1
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
#### 2
	brew install mosquitto
#### 3
	ln -sfv /usr/local/opt/mosquitto/*.plist ~/Library/LaunchAgents
#### 4
	launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mosquitto.plist


## Testing MQTT
Now that you have the Mosquitto broker and clients install on your computer, you can begin publishing and subscribing to messages. Open two separate windows in Terminal and run the following commands in each to test.

#### Terminal Window 1
	mosquitto_sub -h 127.0.0.1 -t hello
#### Terminal Window 2
	mosquitto_pub -h 127.0.0.1 -t hello -m world


## Combining MQTT with Node

We will add MQTT to [one of our apps from last class](https://github.com/areaofeffect/hello-world/tree/master/week8#building-some-isomorphic-javascript-apps).

### Node + Serial + MQTT
	meteor create --release 1.6 serial-mqtt-app
	cd serial-mqtt-app
	meteor npm install serialport --save
	meteor npm install mqtt --save
	meteor npm install react-p5-wrapper --save
	meteor npm install --save react react-dom
	meteor add react-meteor-data
	meteor
	
	
How to find the path to your serial port

	ls -al /dev/cu*

Further reading

[Adding MQTT to Processing](https://github.com/256dpi/processing-mqtt)

[Using MQTT with Node](https://github.com/mqttjs/MQTT.js)
	
Code to consume serial data and send it to Processing can be found here:

[Serial -> Node -> Processing](https://github.com/areaofeffect/hello-world/tree/master/week9/in-class-apps)



