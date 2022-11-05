If you have not installed Node or Meteor, follow the steps in [Setting up your development environment](https://github.com/areaofeffect/hello-world/blob/master/week8/README.md#setting-up-your-development-environment) before running this application.

# How to run super-serial-app
## 1 
Download these files to your computer

## 2

Connect your Arduino to your computer via USB and run Examples -> Communcation -> AsciiTable (found in the Arduino IDE)

How to find the path to your serial port

	ls -al /dev/cu*


## 3
Edit the `server/main.js` files on [line 68](https://github.com/areaofeffect/hello-world/blob/master/week8/in-class-apps/super-serial-app/server/main.js#L68) with your serial port from step 2

## 4
In Terminal, `cd` into this directory (super-serial-app) and then run the following commands:

	meteor npm install serialport --save
	meteor npm install react-p5-wrapper --save
	meteor npm install --save react react-dom
	meteor add react-meteor-data
	meteor
	
## 5
View the application in your browser at `http://localhost:3000`
