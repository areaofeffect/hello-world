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

![Hypercell](https://raw.githubusercontent.com/areaofeffect/hello-world/master/week3/slides/images/AADRL_Spyropoulos_Design_Lab_Hypercell_003.jpg)

[https://www.youtube.com/watch?v=dg7SaaH-GYw](https://www.youtube.com/watch?v=dg7SaaH-GYw)



# Operators


_an operator is a character that represents an action_

Like data types, there are many different types of operators. We've already used the assignment operator, let's explore a few more.

![Smooth Operator](https://raw.githubusercontent.com/areaofeffect/hello-world/master/week3/slides/images/operator.jpg)


## Assignment operators
Let's think of the light in a room. What is it's current state? What happens to the assignment when that state changes?

Python example

	isOn = True
	isOn = False
		
JavaScript example

	var isOn = true
	isOn = false


C example

	boolean isOn = true
	isOn = false

## Arithmetic operators

### addition ( + )

### substraction ( - ) 

### multiplication ( \* )

### division ( / )

### modulo ( % )

#### Order of operations
Some operators are given a higher precedence.

PEMDAS

Parentheses

Exponents

Multiplication

Division

Addition

Subtraction

### increment ( ++ )

Python example
	
	studentsInClass = 0
	studentsInClass += 1 # studentsInClass will be 1
		
JavaScript example

	var studentsInClass = 1;
	studentsInClass++; // studentsInClass will be 2

C example

	int studentsInClass = 2;
	studentsInClass++; // studentsInClass will be 3
	
### decrement ( -- )

Python example
	
	studentsInClass = 1
	studentsInClass -= 1
		
JavaScript example

	var studentsInClass = 1;
	studentsInClass--;

C example

	int studentsInClass = 1;
	studentsInClass--;
	
*a note about placement*

For JavaScript and C, you can place this operator before your variable like this, `++count`. Depending on how you use your variable you may get different results.

	count = 3
	x = 0
	x = ++count; // x==4, count==4
  	x = count++; // x==3, count==4

	
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
	
	teachers = ["bruno", "carrie"]
	haveSameName = (teachers[0] is teachers[1]) # False
		
JavaScript example

	var teachers = ["bruno", "carrie"]
	var slackHandle = ["brun.no", "carrie"]
	var nameMatchesSlackHandle = (teachers[0] == slackHandle[0]) // false

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
	not(x > y) # False
		
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

Bitwise Operators

[Python](https://wiki.python.org/moin/BitwiseOperators) | [JavaScript](https://www.w3resource.com/javascript/operators/bitwise-operator.php) | [C](https://www.tutorialspoint.com/cprogramming/c_bitwise_operators.htm)

[Compound Assignment](https://docs.microsoft.com/en-us/scripting/javascript/reference/compound-assignment-operators-javascript)

[Ternary conditional](https://en.wikipedia.org/wiki/%3F:)

	
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
		


![image](https://raw.githubusercontent.com/areaofeffect/hello-world/master/week3/slides/images/if_else_statement.jpg)

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
![AForest](https://raw.githubusercontent.com/areaofeffect/hello-world/master/week3/slides/images/forest.jpg)

# Assignment


### Create a logic game!

Design and build a game of your own using different types of operators:

- [arithmetic](http://hello-world.areaofeffect.io/week3/slides/#8) ```=``` ```+``` ```/``` ```-``` ```%```

- [comparison](http://hello-world.areaofeffect.io/week3/slides/#13) ```!=``` ```==``` ```>``` ```<``` ```>=``` ```<=```

- [logical](http://hello-world.areaofeffect.io/week3/slides/#16) ```and``` ```(&&)``` , ```or``` ```(||)``` , ```not``` ```(!)```

- [conditional statements](http://hello-world.areaofeffect.io/week3/slides/#23) ```if``` ```elif``` ```else```

- [functions](http://hello-world.areaofeffect.io/week3/slides/#29)

Some inspirations can be: puzzle games, a sudoku checker, a card or dice games, escape the room type game or the [sample forest game](https://github.com/areaofeffect/hello-world/tree/master/week3/examples) game from class.

To start, it will help to break down your game as variables, datatypes and objects. Use a flow-chart and plan your game before writing any code. You can work in groups of 2, pair coding. Next week we will be play-testing our games in class.

<br/>

### Due next week (9 / 26):
- Create a flow-chart of your game logic and how you imagine it working as code.
- A prototype of your game in python demonstrating conditionals and logic from your design.



<br/>


#### Advanced assignment (a 2nd path, optional):
- Convert your game logic into a JavaScript web app
- Use our slides, notes and most importantly the internet (stackoverflow, repl.it, w3schools etc...) as reference on how to set this up.
- Add graphics, finess your copy. Make it fun :)

Here are some JavaScript resources for getting started, if you choose this path!:

- [Codemy Tutorials](https://www.codecademy.com/courses/html-javascript-css/0/1)
- [Mozilla Javascript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [W3 schools HTML](https://www.w3schools.com/html/)

# Resources

[Python  operators](https://www.programiz.com/python-programming/operators)

[JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

[Logic gates](https://vimeo.com/106364318)

[Logic gate symbols](https://www.allaboutcircuits.com/technical-articles/universal-logic-gates/)

[JavaScript Logical Operators](https://javascript.info/logical-operators)

[Function Declaration vs Expression in JavaScript](https://www.sitepoint.com/function-expressions-vs-declarations/)

[Order of operations](https://www.khanacademy.org/math/pre-algebra/pre-algebra-arith-prop/pre-algebra-order-of-operations/v/introduction-to-order-of-operations)

[Parameter](https://en.wikipedia.org/wiki/Parameter_(computer_programming))






