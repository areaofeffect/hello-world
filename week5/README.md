# Week 5

[Week 5 slides](http://hello-world.areaofeffect.io/week5/slides/#1)



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

the part of a program where a name binding, like an assigment of a value to a variable, is valid

what does 'part of a program' mean?

## Lexical Scope

_lexical: relating to the words or vocabulary of a language._

Also referred to as static scope. In this type of scope the machine resovles variable by location in the source code. 

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

In this type of scope, variables may be resolved by using the state of the program at run time. Dynamic scope is uncommon in most modern languages, but some like Clojure use it in combination with Lexcial scope.

	function foo() {
		console.log( a ); // 3
	}
	
	function bar() {
		var a = 3;
		foo();
	}
	
	var a = 2;
	
	bar();
	
How can this be? Because when foo() cannot resolve the variable reference for a, instead of stepping up the nested (lexical) scope chain, it walks up the call-stack, to find where foo() was called from. Since foo() was called from bar(), it checks the variables in scope for bar(), and finds an a there with value 3. - [You Don't Know JS: Scope & Closures, Appendix A](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/apA.md)

### foo? bar???
[metasyntactic variable](http://www.outpost9.com/reference/jargon/jargon_28.html#TAG1136)


## Levels of Scope

### Expression scope
let-expressions, which allow a declaration's scope to be a single expression

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
You can think of this as whatever is inside of a pair of curly braces {}

	for (var i=0; i<10; i++) {
		console.log( i );
	}

### Function scope
Most often this block is contained within a function, thus restricting the scope to a part of a function.  offer a way to create a local variable in a function or subroutine: a variable whose scope ends (that goes out of context) when the function returns.

	function foo(a) {
		var b = 2;
	
		// some code
	
		function bar() {
			// ...
		}
	
		// more code
	
		var c = 3;
	}
[Scope from functions](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md#scope-from-functions)

### File scope
Scope of variables and functions declared at the top level of a file (not within any function) is for the entire file. Arduino sketches have this type of scope. You will recall that these top level variables were available to your entire program.

	int led = 9;           // the PWM pin the LED is attached to
	int brightness = 0;    // how bright the LED is
	int fadeAmount = 5;    // how many points to fade the LED by

### Module scope

Before we talk about module scope, let's talk about what a module is. Essentially it's a set of functions you want to include in your program.

Think of this way, your games were modules, and some of them included another module named `pyglet` that included a set of functionality to play sounds.

[Python Modules](https://docs.python.org/2/tutorial/modules.html)

In node.js, anything declared with the var keyword at the top level (not inside a function or object, or any other block) of a file is in module scope, and will be accessible from anywhere within the same file, but will not exist anywhere else.

[Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)

### Global scope
A declaration has global scope if it has effect throughout an entire program. Variable names with global scope — called global variables — are frequently considered bad practice, at least in some languages, due to the possibility of name collisions and unintentional masking, together with poor modularity, and function scope or block scope are considered preferable. 


# Modules and Libraries


## Python Modules
which can expose classes, functions and global variables. 

## JavaScript Modules
NPM

## Arduino Libraries

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

## Classes in Javascript
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
## Creating new repo
## Uploading previous assignments
## Creating your own node project

# Asking question
https://stackoverflow.com/help/how-to-ask

# EXIF data
## Extract data from one image
## How to extract data from 100+ images


# Assignment

p5 web site (try to recreate turtle sketch or improve on it)
start thinking about image data vis


# Resources

[Why JavaScript Development is Crazy](http://www.planningforaliens.com/blog/2016/04/11/why-js-development-is-crazy/)
[Recursion in JavaScript](https://www.codecademy.com/courses/javascript-lesson-205/0/1)
[You Don't Know Javascript](https://github.com/getify/You-Dont-Know-JS)
[Scope (computer science)](https://en.wikipedia.org/wiki/Scope_(computer_science))
[Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

