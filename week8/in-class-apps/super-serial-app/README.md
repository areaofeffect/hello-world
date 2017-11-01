# How to run this app
## 1 
Download these files to your computer

## 2

Connect your Arduino to your computer via USB and run Examples -> Communcation -> AsciiTable (found in the Arduino IDE)

How to find the path to your serial port

	ls -al /dev/cu*


## 3
Edit the `server/main.js` files on [line 73](https://github.com/areaofeffect/hello-world/blob/master/week8/in-class-apps/super-serial-app/server/main.js#L73) with your serial port from step 2

## 4
In Terminal, `cd` into this directory (super-serial-app) and then run the following commands:

	meteor npm install serialport --save
	meteor npm install react-p5-wrapper --save
	meteor npm install --save react react-dom
	meteor add react-meteor-data
	meteor
	
## 5
View the application in your browser at `http://localhost:3000`
