# Scope

# SVA IxD Weeks 5 and 6

[Week 5 slides](http://hello-world-week5.s3-website-us-east-1.amazonaws.com/)

## Review and Discussion of Week 4

### _for loops, while loops_

- for
- for in
- while

### _recursion_

- a function that calls itself

      def factorial(n):
          if n == 1:
              return 1
          else:
              return n * factorial(n-1)

## Turtle

_Week 4 Assignment Review_

# Scope

Scope refers to the part of a program where a name binding, like an assigment of a value to a variable, is valid.

Ok, but what does 'part of a program' mean?

## Lexical Scope

_lexical: relating to the words or vocabulary of a language._

Also referred to as static scope. In this type of scope the machine resovles variable by its location in the source code.

    function foo() {
    	console.log( a ); // 2
    }

    function bar() {
    	var a = 3;
    	foo();
    }

    var a = 2;

    bar();

## Dynamic Scope

In this type of scope, variables may be resolved by using the state of the program at run time. Dynamic scope is uncommon in most modern languages.

    function foo() {
    	console.log( a ); // 3
    }

    function bar() {
    	var a = 3;
    	foo();
    }

    var a = 2;

    bar();

How can this be? Because when foo() cannot resolve the variable reference for a, instead of stepping up the nested (lexical) scope chain, it walks up the call-stack, to find where foo() was called from. Since foo() was called from bar(), it checks the variables in scope for bar(), and finds an a there with value 3. - [You Don't Know JS: Scope & Closures, Appendix A](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/apA.md)

### foo? bar???

[metasyntactic variable](http://www.outpost9.com/reference/jargon/jargon_28.html#TAG1136)

> A name used in examples and understood to stand for whatever thing is under discussion, or any random member of a class of things under discussion.

> The etymology of hackish `foo` is obscure. When used in connection with `bar` it is generally traced to the WWII-era Army slang acronym FUBAR (`Fucked Up Beyond All Repair'), later bowdlerized to foobar.

## Levels of Scope

- Expression
- Block
- Function
- File
- Module
- Global

### Expression scope

here a declaration's scope is a single expression, like a `let` statement

    function varTest() {
      var x = 1;
      if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
      }
      console.log(x);  // 2
    }

    function letTest() {
      let x = 1;
      if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
      }
      console.log(x);  // 1
    }

[Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

### Block scope

You can think of this type of scope, as contained within curly braces `{}`

    for (var i=0; i<10; i++) {
    	console.log( i );
    }

### Function scope

Most blocks are contained in functions, which can have it's own scope. Functions can contain local variables which only apply to that subroutine.

    function foo(a) {
    	var b = 2;

    	// some code

    	function bar() {
    		// ...
    	}

    	// more code

    	var c = 3;
    }

[Scope from functions](https://github.com/getify/You-Dont-Know-JS/blob/main/scope%20%26%20closures/ch3.md#scope-from-functions)

### File scope

Variables and functions declared at the top level of a file (not within any function) is for the entire file. Arduino sketches have this type of scope. You will recall that these top level variables were available to your entire program.

    int led = 9;           // the PWM pin the LED is attached to
    int brightness = 0;    // how bright the LED is
    int fadeAmount = 5;    // how many points to fade the LED by

### Module scope

Before we talk about module scope, let's talk about what a module is. Essentially it's a set of functions you want to include in your program.

### Module scope in Python

Think of this way, your games were modules, and some of them included another module named `pyglet` that included a set of functionality to play sounds.

[Python Modules](https://docs.python.org/2/tutorial/modules.html)

### Module scope in Node.js

In node.js, anything declared with the var keyword at the top level (not inside a function or object, or any other block) of a file is in module scope, and will be accessible from anywhere within the same file, but will not exist anywhere else.

[Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)

### Global scope

A declaration has global scope if it has effect throughout an entire program. Variable names with global scope — called global variables — are frequently considered bad practice, at least in some languages, due to the possibility of name collisions and unintentional masking, together with poor modularity, and function scope or block scope are considered preferable.

# Modules, Libraries and Packages

## Python Modules

A module is a file containing Python definitions and statements. The file name is the module name with the suffix .py appended.

Rather than the term library in the Python, the term package is used.

## JavaScript Modules

### Writing your own modules

Immediately-Invoked Function Expression

    (function() {
          // Your code goes here
    }());

Revealing Module Pattern

    var pokemonModule = function(inName) {

      var name = inName;

      function sayHello() {
        console.log("hello i'm", name);
      }

      return {
        sayHello: sayHello
      }
    }

    var pikachu = new pokemonModule('pikachu');
    pikachu.sayHello();

[Modern JavaScript development can be overwhelming.](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)

### Using open source modules from NPM

> npm, short for Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

[NPM](https://www.npmjs.com/)

## Arduino Libraries

There are also many Arduino libraries you may add to your project to gain extra functionality.

https://www.arduino.cc/en/hacking/libraries

# Classes

A class is actually a Data Type :) A composite data type.

## Classes in Python

    class Pokemon:

      def __init__(self, name, health):

          self.name = name
          self.health = health

      def updateHealth(self, num):
          self.health += num

      def sayHello(self):
        print "hello i'm", self.name

    pikachu = Pokemon("pikachu", 100)
    pikachu.sayHello()

    squirtle = Pokemon("squirtle", 100)
    squirtle.sayHello()

[Classes in Python](http://python-textbok.readthedocs.io/en/1.0/Classes.html)

## Classes in JavaScript

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance.

[P5 Jitter class](https://p5js.org/examples/objects-objects.html)

## Classes in C

    typedef struct {
      float (*computeArea)(const ShapeClass *shape);
    } ShapeClass;

    typedef struct {
      ShapeClass shape;
      float width, height;
    } RectangleClass;

    static float rectangle_computeArea(const ShapeClass *shape)
    {
      const RectangleClass *rect = (const RectangleClass *) shape;
      return rect->width * rect->height;
    }

https://learn.adafruit.com/multi-tasking-the-arduino-part-1/a-classy-solution
https://stackoverflow.com/questions/1403890/how-do-you-implement-a-class-in-c

# Github

## Basic set up

https://desktop.github.com/

## Creating new repo

https://help.github.com/articles/create-a-repo/

## Uploading previous assignments

Create a github repo to store all your previous python code from the last 3 assignments.

Write a read me and include instructions on how to download and run your code.

# Building your first Node.js project

First let's install node using [Node Version Manager](https://github.com/creationix/nvm)

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

Now we're going to set up our bash profile, follow along.

Server side app

    npm install -g express-generator
    express --git --view=hbs ./myApp
    cd myApp
    npm install

# Asking questions

https://stackoverflow.com/help/how-to-ask

# Assignments

## Week 5 Assignment

### Update Week 4 assignment to JavaScript

Take your Week 4 assignment (repeating patterns/wallpaper) and translate it to JavaScript using P5.js.

[Week 5 Assignment Repo](https://github.com/areaofeffect/hello-world-week5-assignment)

## Week 6 Assignment

### Visualize sensor data from Arduino to your browser.

1. Watch [Welcome to p5](http://hello.p5js.org/) and read the [Getting started with p5 guides](https://p5js.org/get-started/).

2. Create a p5 sketch that accepts serial data from a sensor (analog or digital) attached to your Arduino. You can use the Arduino Read sketch in our repo as a starting point.

3. Now that you have Arduino 'talking' to your p5 code. Visualize the sensor data in an interesting way. Remember to run the serial bridge.

4. If you get stuck: Review the Resources and Additional examples from the p5-full folder in our README. There are tons of p5 resources online. Google-fu is your friend.

# Resources

[Why JavaScript Development is Crazy](http://www.planningforaliens.com/blog/2016/04/11/why-js-development-is-crazy/)

[Recursion in JavaScript](https://www.codecademy.com/courses/javascript-lesson-205/0/1)

[You Don't Know Javascript](https://github.com/getify/You-Dont-Know-JS)

[Scope (computer science)](<https://en.wikipedia.org/wiki/Scope_(computer_science)>)

[Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
