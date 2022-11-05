# DATA

# SVA IxD WEEK 9

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

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
    nvm use 14

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

[Response protocol](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html)
The majority of responses include

- some content (the data you may have requested from the API, often formatted as JSON)
- a status code
- in the case of an error, and error message

#### Common status codes

- "200" OK (Success!)
- "400" Bad request (Check the format of your request)
- "401" Unauthorized (Do you need an API key)
- "404" Not found
- "50x" Something is wrong with the server where the response should be coming from

And the best status code

- "418" [I'm a teapot](https://www.google.com/teapot)

# NASA OPEN API

Let's query some data via this API from Nasa
[https://api.nasa.gov/index.html](https://api.nasa.gov/index.html)

# Building some isomorphic Javascript apps

We will be using [Meteor](https://www.meteor.com/) which is built on node. You installed node via [NVM](https://github.com/creationix/nvm) or Node Version Manager. This allows easily switching to various [releases](https://en.wikipedia.org/wiki/Software_release_life_cycle) of node if your applications dependencies require it.

Our apps are based on the standard starter apps that come with Meteor. The both use React as it is now the default. We also add serial communication with your Arduino which you can visualize in real-time in p5.

You must be in the folder that contains the code for the app you want to run. For example, if you want to run the API app, you must be in the folder `week9/in-class-apps/api-api` for example. Then you can run `meteor npm install` and then `meteor` in the terminal. Note: only run one app at a time which will be on port 3000 (http://localhost:3000).

## 1 Astronomy picture of the day

Terminal commands to run this app:

    meteor npm install
    meteor

Code from class can be found here:
[in-class-apps/api-app](./in-class-apps/api-app)

[API](https://api.nasa.gov/api.html#apod)

## 2 Super serial app

Terminal commands to run this app:

    meteor npm install
    meteor

Code from class can be found here:
[in-class-apps/super-serial-app](./in-class-apps/super-serial-app)
