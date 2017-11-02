If you have not installed Node or Meteor, follow the steps in [Setting up your development environment](https://github.com/areaofeffect/hello-world/blob/master/week8/README.md#setting-up-your-development-environment) before running this application. hen, request an API Key from [NASA](https://api.nasa.gov/index.html).
# How to run react-app
## 1 
Download these files to your computer

## 2
Edit the `server/main.js` files on [line 15](https://github.com/areaofeffect/hello-world/blob/master/week8/in-class-apps/react-app/server/main.js#L15) with your NASA Open API key. 

## 3
In Terminal, `cd` into this directory (react-app) and then run the following commands:

	npm install
  meteor npm install --save react react-dom
	meteor add react-meteor-data
	meteor add http
	meteor
	
## 4
View the application in your browser at `http://localhost:3000`
