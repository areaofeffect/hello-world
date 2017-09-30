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

Also referred to as static scope. In this type of scope the machine resovles variable by location in the source code. 

https://stackoverflow.com/questions/1047454/what-is-lexical-scope?noredirect=1&lq=1

	void fun()
	{
	    int x = 5;
	
	    void fun2()
	    {
	        printf("%d", x);
	    }
	}

## Dynamic Scope

In this type of scope, variables may be resolved by using the state of the program at run time. Dynamic scope is uncommon in most modern languages, but some like Clojure use it in combination with Lexcial scope.

	void fun()
	{
	    printf("%d", x);
	}
	
	void dummy1()
	{
	    int x = 5;
	
	    fun();
	}
	
	void dummy2()
	{
	    int x = 10;
	
	    fun();
	}


## Levels of Scope

### Expression
Many languages, especially functional languages, offer a feature called let-expressions, which allow a declaration's scope to be a single expression

### Block
Many, but not all, block-structured programming languages allow scope to be restricted to a block, which is known as block scope. Most often this block is contained within a function, thus restricting the scope to a part of a function

### Function
offer a way to create a local variable in a function or subroutine: a variable whose scope ends (that goes out of context) when the function returns

### File
where scope of variables and functions declared at the top level of a file (not within any function) is for the entire file

### Module
the scope of a name can be an entire module, however it may be structured across various files.

### Global
A declaration has global scope if it has effect throughout an entire program. Variable names with global scope — called global variables — are frequently considered bad practice, at least in some languages, due to the possibility of name collisions and unintentional masking, together with poor modularity, and function scope or block scope are considered preferable. 



# Classes

A class is actually a Data Type :) A composite data type.

## Classes in Python

http://python-textbok.readthedocs.io/en/1.0/Classes.html

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
	
https://stackoverflow.com/questions/1403890/how-do-you-implement-a-class-in-c

# Modules and Libraries


## Python Modules
which can expose classes, functions and global variables. 

## JavaScript Modules
NPM

## Arduino Libraries

https://www.arduino.cc/en/hacking/libraries

# Github

## Basic set up
## Creating new repo
## Uploading previous assignments
## Creating your own node project

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

