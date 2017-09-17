# Week 3

[Week 3 slides](http://hello-world.areaofeffect.io/week3/slides/#1)

# Review and Discussion of Week 2
Variables and Data Types

- Creating variables and assigning values

- Booleans, Strings, Numbers, Arrays, and Objects

- Conversion

- Protocols



### Data typing the real world.
![Matrix](https://github.com/areaofeffect/hello-world/blob/week3/week3/slides/images/assignment1.jpg?raw=true)


### Review of Objects

- Time Series Data

Useful for data analysis like visualizations, pattern recognition, signal processing, and even things like machine learning.

Let's take for example analyzing the temperature of this room over time and then visualizing that data. Each discrete timestamp could be represented by an object.

```
{
	timestamp: "2017-09-17T12:00:00.000Z",
	temp: 71
}
```

Saving one object per minute would give you 60 temperatures to plot overtime to analyze the temp changes. Some companies are using data like this to make heating buildings more efficient.


### Stories and Thought experiment

![Hypercell](https://github.com/areaofeffect/hello-world/blob/week3/week3/slides/images/AADRL_Spyropoulos_Design_Lab_Hypercell_003.jpg?raw=true)

[https://www.youtube.com/watch?v=dg7SaaH-GYw](https://www.youtube.com/watch?v=dg7SaaH-GYw)



# Operators


_an operator is a character that represents an action_

Like data types, there are many different types of operators. We've already used the assignment operator, let's explore a few more.



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
PEMDAS

Parentheses

Exponents

Multiplication

Division

Addition

Subtraction


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

## Elif
Python can only have one else. But it can have many `elif`

Python example
	
	import math
	x = 'nan'
	y = 1
	if (x < y):
		print "x is less than y"
	elif math.isnan(float(x)):
		print "x is NaN"
	else:
		print "y is less than x"
		


# Functions


> In programming, a named section of a program that performs a specific task. In this sense, a function is a type of procedure or routine. Some programming languages make a distinction between a function, which returns a value, and a procedure, which performs some operation but does not return a value.
Most programming languages come with a prewritten set of functions that are kept in a library. You can also write your own functions to perform specialized tasks.

http://www.webopedia.com/TERM/F/function.html

## Declaration

Python example
	
	def myFunction():
		# statements here
		
JavaScript example

	function myFunction() {
		// statements here
	}

C example

	boolean myFunction () {
		// statements here
	}

## Definition

Python example

```  
def isGreater(x, y):
  return (x > y)

```

JavaScript example

```
function isGreater(x, y) {
  return (x > y);
}
```

C example

```
boolean isGreater (int x, int y) {
  boolean returnVal = (x > y); // true
  return returnVal;
}
```

## Parameters and Arguments

In the last slide `x` and `y` are parameters of the function. 

The values you pass in for `x` and `y` are known as arguments.

Python example

```  
def isGreater(x, y):
  return (x > y)

isGreater(0,1) #False
isGreater(1,0) #True
```

# A Forest
![AForest](https://github.com/areaofeffect/hello-world/blob/week3/week3/slides/images/forest.jpg?raw=true)

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

[Parameter](https://en.wikipedia.org/wiki/Parameter_(computer_programming))






