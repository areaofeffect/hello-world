# Week 3

[Week 3 slides](http://hello-world.areaofeffect.io/week3/slides/#1)

# Review and Discussion of Week 2
Variables and Data Types

- Creating variables and assigning values

- Booleans, Strings, Numbers, Arrays, and Objects

- Conversion

- Protocols



### Data typing the real world.
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
	
	count = 1
	count -= 1
		
JavaScript example

	var count = 1;
	count--;

C example

	int count = 1;
	count--;

	
## Comparison operators

Comparison operators yield Boolean values.

**==** equal to

**!-** not equal to

**\>** greater than

**<** less than

**\>=** great than or equal to

**<=** less than or equal to

### Comparison Operations on data types

#### Strings
Python example
	
	myString = "hello"
	isEqual = (hello is myString) # False
	isEqual = ("hello" is myString) # False
	isNotEqual = (hello is not myString) # True
		
JavaScript example

	var isEqual = ("hello" == myString) // true

C example

The operators `!=` and `==` only compare the memory addresses and not the actual String contents so you have to `strcmp`

#### Numbers

Python example
	
	x = 1
	y = 2
	(x < y) # False
		
JavaScript example

	var isGreater = (x > y) // false

C example

	boolean isGreater = (x > y) // true
	
#### Order of operations
Some operators are given a higher precedence.

## Logical operators

With logical operators you can combine one or more comparisons to make more complex decisions.

We know that Booleans were one of our primitive data types in computer science. Now we are going to learn about Boolean logic. We will use it in our programs, but it is interesting to note that the this same logic is a core component of a computer's CPU.

Logic circuits include such devices as multiplexers, registers, arithmetic logic units (ALUs), and computer memory, all the way up through complete microprocessors, which may contain more than 100 million gates. 

[CTD: logic gates, elementary ]

https://en.wikipedia.org/wiki/Logic_gate

### Logical AND ( && )

Python example
	
	
	(x < y and myString is "hello") # True
		
JavaScript example

	var isGreater = (x > y && myString == "world") // false

C example
	
	int x = 0;
	int y = 10;
	boolean bothAreNonZero = (a && b); // false


### Logical NOT ( ! )

Python example
	
	x = 1
	y = 2
	!(x > y) # False
		
JavaScript example

	var isGreater = !(x > y) // true

C example

	int x = 0;
	int y = 10;
	boolean bothAreNonZero = !(a && b); // true


### Logical OR ( || )

Python example
	
	x = 1
	y = 2
	(x > y || x > 0) # True
		
JavaScript example

	var isGreater = (x > y || y > 2) // false

C example

	boolean oneIsNonZero = (x || y) // true



# Additional Operators
Just like there were more data types than we covered in class last week, there are also more operators. Here are a few types to explore on your own.

Bitwise

Compound Assignment

Ternary conditional

	
# Conditional Statements

## If
Now that we've reviewed the operators that evaluate our variables into meaningful logic, we are ready to make deicisions. Enter the mighty if statement!

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

## Else
In the case that the conditional expression in your if statement is not true, you may want to do something else.

Python example
	
	if (x < y):
		print "x is less than y"
	else:
		print "y is less than x"
		
JavaScript example

	if (x > y) {
		console.log( "x is greater than y")
	} else {
		console.log( "y is greater than x")
	}

C example

	if (x > y) {
		printf( "x is greater than y")
	} else {
		printf( "y is greater than x")
	}


# Functions

Start letting your program make logical decisions.

Functions are procedures or routines.

## Declaration

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

## Return

## Parameters

Parameters are a type of variable that belong to the function.


# Assignments

List of this weeks assignments


# Resources

[Python  operators](https://www.programiz.com/python-programming/operators)

[JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

[Logic gates](https://vimeo.com/106364318)

[Logic gate symbols](https://www.allaboutcircuits.com/technical-articles/universal-logic-gates/)

[JavaScript Logical Operators](https://javascript.info/logical-operators)

[Function Declaration vs Expression in JavaScript](https://www.sitepoint.com/function-expressions-vs-declarations/)

[Order of operations](https://www.khanacademy.org/math/pre-algebra/pre-algebra-arith-prop/pre-algebra-order-of-operations/v/introduction-to-order-of-operations)






