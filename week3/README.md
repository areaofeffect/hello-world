# Week 3

[Week 3 slides](http://hello-world.areaofeffect.io/week3/slides/#1)

# Review and Discussion of Week 2
Variables and Data Types
- Booleans, Strings, Numbers, Arrays, and Objects
- Assignment
- Conversion
- Protocols


### Data Typing the real world.
- Review Assignment 1


### Objects

- A review of objects

### Stories and Thought experiment

- review of last 2 assignments


# Operators

> an operator is a character that represents an action

There are a few different categories of operators, some we've already used. Some we will explore today.


## Assignment operators
we've already used =


Python example

	myBool = True
	myBool = False
		
JavaScript example

	var myBool = true
	myBool = false


C example

	boolean myBool = true
	myBool = false

## Arithmetic operators

### addition ( + )

### substraction ( - ) 

### multiplication ( \* )

### division ( / )


### increment ( ++ )

Python example
	
	count = 0
	count += 1
		
JavaScript example

	var count = 0;
	count++;

C example

	int count = 0;
	count++;
	
*a note about placement*

For JavaScript and C, you can place this operator before your variable like this, `++count`. Depending on how you use your variable you may get different results.

	count = 3
	x = 0
	x = ++count; // x==4, count==4
  	x = count++; // x==3, count==4
  	

### decrement ( -- )

Python example
	
	count = 0
	count -= 1
		
JavaScript example

	var count = 0;
	count--;

C example

	int count = 0;
	count--;

	
## Comparison operators

Comparison operators yield Boolean values.

**==** equal to

**!-** not equal to

**\>** greater than

**<** less than

**\>=** great than or equal to

**<=** less than or equal to

## Data Types matter in Comparison Operations

## Strings
Python example
	
	myString = "hello"
	isEqual = (hello is myString) # False
	isEqual = ("hello" is myString) # False
	isNotEqual = (hello is not myString) # True
		
JavaScript example

	var isEqual = ("hello" == myString) // true

C example

The operators `!=` and `==` only compare the memory addresses and not the actual String contents so you have to `strcmp`

## Numbers

Python example
	
	x = 1
	y = 2
	(x < y) # False
		
JavaScript example

	var isGreater = (x > y) // false

C example

	boolean isGreater = (x > y) // true

## Logical operators, NOT, AND, OR
&& (Logical AND)

! (Logical NOT)

|| (Logical OR)


[CTD: logic gates, elementary ]

 
# Additional Operators
Bitwise
Compound Assignment
Ternary conditional
	
# Conditional Statements

The mighty if!

Python example
	
	if (x < y):
		print "x is less than y"
		
JavaScript example

	var isGreater = (x > y) // false
	if (isGreater) {
		console.log( "x is greater than y")
	}

C example

	boolean isGreater = (x > y) // true
	if (isGreater) {
		printf("isGreater is true");
	}

Start examples of using all of our newly learned operations


# Functions

Start letting your program make logical decisions.

Python example
	
	def myFunction():
		# statements here
		
JavaScript example

	function myFunction() {
		// statements here
	}

C example

	boolean findValue (x,y) {
		isGreater = (x > y); // true
		return isGreater;
	}


# Assignments

List of this weeks assignments


# Resources

[Python  operators](https://www.programiz.com/python-programming/operators)

[JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)


