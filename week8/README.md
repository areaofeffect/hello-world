# DATA
# SVA IxD WEEK 8

We will talk about how to consume data in a software/web application. We will explore 2 types of data acquisition.

## API 
Request <-> response

## Streams 
Continuous stream of data, possibly from a sensor

# Setting up your development environment

## 1
[Download and install the free version of Robo 3T](https://robomongo.org/)


## 2
Open a new window in Terminal and run the following commands line by line

	touch ~/.bash_profile
	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
	nvm install node
	
## 3
In the same or new window in Terminal run the following command

	curl https://install.meteor.com/ | sh

# HTTP
Hypertext Transfer Protocol

[Hypertext Transfer Protocol (HTTP)](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

> HTTP functions as a request–response protocol in the client–server computing model.


## Client
Examples of clients

- web browsers
- mobile devices
- other software applications requesting data from the 'internet'


## Server

A server is an computer, available on the internet (or localhost) that hosts an application accessible to clients.


## HTTP Requests
[Request protocol](https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html)
There are different types of request but the ones most frequently used are:

- GET (this method means retrieve whatever information (in the form of an entity) is identified by the request)
- POST (this method asks the server to accept some packet of information before returning an response)


## HTTP Responses
The majority of responses include
- some content (the data you may have requested from the API, often formatted as JSON)
- a status code
- in the case of an error, and erro message

#### Common status codes
[Response protocol](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html)
-	"200" OK (Success!)
-	"400" Bad request (Check the format of your request)
-	"401" Unauthorized (Do you need an API key?)
-	"50x" Something is wrong with the server where the response should be coming from
	
# NASA OPEN API

Let's query some data via this API from Nasa
[https://api.nasa.gov/index.html](https://api.nasa.gov/index.html)


# Building some isomorphic Javascript apps

We will be using [Meteor](https://www.meteor.com/) which is built on node. You installed node via [NVM](https://github.com/creationix/nvm) or Node Version Manager. This allows easily switching to various [releases](https://en.wikipedia.org/wiki/Software_release_life_cycle) of node if your applications dependencies require it.

Our apps are based on the standard starter apps that come with Meteor. App 1 uses Meteor's Blaze templates, App 2 uses React, App 3 also uses react and adds serial communication with your Arduino.

## 1 Astronomy picture of the day
Terminal commands to start this app from scratch:

	meteor create --release 1.6-rc.16 api-app
	cd api-app
	meteor add http
	meteor
	
Code from class can be found here:
	
[in-class-apps/api-app](https://github.com/areaofeffect/hello-world/tree/master/week8/in-class-apps/api-app)

[API](https://api.nasa.gov/api.html#apod)

## 2 Asteroids near the earth in React
Terminal commands to start this app from scratch:

	meteor create --release 1.6-rc.16 react-app
	cd react-app
	meteor npm install --save react react-dom
	meteor add react-meteor-data
	meteor add http
	meteor
	
Code from class can be found here:

[in-class-apps/react-app](https://github.com/areaofeffect/hello-world/tree/master/week8/in-class-apps/react-app)

[API](https://api.nasa.gov/api.html#NeoWS)
	
Further reading

[What is NPM](https://docs.npmjs.com/getting-started/what-is-npm)

[Application structure](https://guide.meteor.com/structure.html)

[Type checking](https://reactjs.org/docs/typechecking-with-proptypes.html)

[Higher Order Components](https://reactjs.org/docs/higher-order-components.html)



### 3 Node serial 
	meteor create --release 1.6-rc.16 super-serial-app
	cd super-serial-app
	npm install serialport --save
	meteor npm install --save react react-dom
	meteor add react-meteor-data
	meteor
	
	
How to find the path to your serial port

	ls -al /dev/cu*

Further reading

[Adding P5 to your React Application](https://github.com/NeroCor/react-p5-wrapper)

[Node Serial Port](https://github.com/EmergingTechnologyAdvisors/node-serialport)
	
Though we did not review this in class, the link to the application will be posted soon.


# ASSIGNMENT

Build an app that incorporates some data from an API or sensor. 

To step through the tutorial on Meteor + React again, follow it [here](https://www.meteor.com/tutorials/react/creating-an-app). Note that in step 3 (collections), we are using the newer way to wrap components with reactive data. Refer to [line 2 import of withTracker](https://github.com/areaofeffect/hello-world/blob/master/week8/in-class-apps/react-app/imports/ui/AsteroidList.js#L2) and [lines 26-33](https://github.com/areaofeffect/hello-world/blob/master/week8/in-class-apps/react-app/imports/ui/AsteroidList.js#L26-L33) where the component is wrapped with data. (looks like they are on it though [https://github.com/meteor/todos/pull/247](https://github.com/meteor/todos/pull/247))

You can further explore the APIs provided by NASA and use your existing key. Or explore other available APIs like [Open Notify](http://open-notify.org/Open-Notify-API/). Plot the course of the International Space Station :)

Add to one of our example apps, or explore [React](https://reactjs.org/) with [D3](https://d3js.org/) as your front end. Here's an [example](https://github.com/iamvdo/globe-react-d3-topojson) of geographic data visualized.

Google Maps also has an extensive API, and there are some [React components prebuilt](https://github.com/istarkov/google-map-react) if you are interested.

The events channel has a [link](https://www.bklynlibrary.org/calendar/nyc-open-data-101-central-library-info-102317) to a session at the Brooklyn Library to learn how to use the [NYC OpenData](https://opendata.cityofnewyork.us/).

If you have an idea but need help scaffolding your app, let us know.








	
