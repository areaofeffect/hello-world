# Week 4

---

## Last week in Code Literacy...
- Week 3 Assignment: Lets playtest our games!
- Review:
	- Operators
	- Conditionals
	- Functions

---

# LOOPS
You can use loops to run sections of code over and over again.
There are many types of loops but we will focus on `for` and `while` for learning.


---

Some inspiration from Bees and Bombs: [https://beesandbombs.tumblr.com/](https://beesandbombs.tumblr.com/)


---

# for loops

---

##python (example 1)
- a simple counting example
- try it out: [repl link](https://repl.it/LaMW)

```python
for x in range(1,10):
	print(x)
```

##python (example 2)
- example: looping through an array
- try it out: [repl link](https://repl.it/L70G/0)

```python
# declare an array
fruits = [ "mango", "banana", "apple" ]

# loop through items in array
for fruit in fruits:
  print fruit
```

---

##javascript - for

- try it out: [repl link](https://repl.it/L70V/0)
- [https://www.learn-js.org/en/Loops](https://www.learn-js.org/en/Loops)

```javascript
// declare an array
var fruits = [ "mango", "strawberry", "kiwi" ];

// loop through items in arary
// note: .length is a property of array datatype that results to 3
for (x = 0; x < fruits.length; x++) {
  console.log(fruits[x]); // print each string
}
```

---

##p5 - for
The code inside the draw() function runs continuously from top to bottom until the program is stopped.

- [https://p5js.org/examples/structure-loop.html](https://p5js.org/examples/structure-loop.html)
- [http://learningprocessing.com/examples/chp06/example-06-06-forloop](http://learningprocessing.com/examples/chp06/example-06-06-forloop)

---

##c - for
there's a repl: [for that too!](https://repl.it/L709/0)

```c
#include <stdio.h>

int main() {
  // note: remember to type your variable
  for (int a = 1; a <= 20; a++) {
      printf("value of a: %d\n", a);
  }
}
```

---

# while loops

---

##python - while
[repl link](https://repl.it/L71v/0)

```python
while x < 10:      # do this ten times
  increaseCount() # call a function we defined above
```

---

##javascript - while
- [repl link](https://repl.it/L72P/1)
- [w3schools: while example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_while)

```
while (i < 10) {
    text += "The number is " + i;
    i++;
}
```

---

##c - while
- try in a repl: [repl link](https://repl.it/L73B/0)
- [arduino example](https://www.arduino.cc/en/Tutorial/WhileStatementConditional)

```c
#include <stdio.h>
 
int main () {

   /* local variable definition */
   int a = 0;

   /* while loop execution */
   while( a <= 10 ) {
      printf("value of a: %d\n", a);
      a++;
   }
 
   return 0;
}
```

---

# "break" and "continue" statements

- `break` is used to exit a `for` or a `while` loop

<br/>

Below is a python example that will break and exit the loop once the count is greator than five.

- try it out: [repl link](https://repl.it/LaMW)

```python
for x in range(1,10):	# a for loop that counts from 1 to 10
	if (x > 5): 		# a conditional, are we less than 5
	  break 			# exit the loop once our count is higher than 5
	else:
		print(x)
```

---

# draw()
A draw loop is a type of loop that occurs *every frame* of your application. It is generally used for programing animations, interactions or visuals. Think of it working like a movie or gif with sequential frames.

In Arduino programming this is simply called loop().

>After creating a setup() function, which initializes and sets the initial values, the loop() function does precisely what its name suggests, and loops consecutively, allowing your program to change and respond. Use it to actively control the Arduino board.


- [Arduino Loop](https://www.arduino.cc/en/Reference/Loop)
- [p5 Loop](https://p5js.org/examples/structure-loop.html)

---

# recursion
The most common application of recursion is in mathematics and computer science, where a function being defined is applied within its own definition. While this apparently defines an infinite number of instances (function values), it is often done in such a way that no loop or infinite chain of references can occur.

- Factorials
- Fractals
- Inception

---

# sublime text
- Convert tabs to spaces
- Remember to choose your language for syntax highlighting
- [Common Shortcuts](http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_osx.html)
- [Plugins and package control](https://packagecontrol.io/)

---

# variables and scope
- Local variables
- Global variables


---

# Assignment

- create an arwork or study in the style of orbital view
- Take photos throughout the week. You are collecting a dataset, next week we will be creating data visualizations.


## resources

- [learnpython.org loops tutorial](https://www.learnpython.org/en/Loops)
- [Tutorials Point python overview](https://www.tutorialspoint.com/python/)
- [Coding Train with Daniel Shiffman](https://www.youtube.com/watch?v=h4ApLHe8tbk)
- [Python Turtle](https://www.youtube.com/watch?v=Grc1-j4EvTk)
- [Invent With Python - Tic Tac Toe](https://inventwithpython.com/chapter10.html)
- [Tic Tac Toe AI with Javascript](https://mostafa-samir.github.io/Tic-Tac-Toe-AI/)
- [Using Python - Programs](http://usingpython.com/programs/)
- [ChartJS](http://www.chartjs.org/)