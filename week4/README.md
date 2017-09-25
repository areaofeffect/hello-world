# Week 4

<br/>

## Last week in Code Literacy...
- Let's play our games!
- Week 3 review
- Operators
- Conditionals
- Functions

</br>

# LOOPS

> from Bees and Bombs: [https://beesandbombs.tumblr.com/](https://beesandbombs.tumblr.com/)

<br/>

You can use loops to run sections of code over and over again.

There are many types of loops but we will focus on `for` and `while` for learning.


<br/>

## for loops

#####python
try it out: [repl link](https://repl.it/L70G/0)

```python
# declare an array
fruits = [ "mango", "banana", "apple" ]

# loop through items in array
for fruit in fruits:
  print fruit
```

<br/>

#####javascript

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

<br/>

#####p5
The code inside the draw() function runs continuously from top to bottom until the program is stopped.

- [https://p5js.org/examples/structure-loop.html](https://p5js.org/examples/structure-loop.html)
- [http://learningprocessing.com/examples/chp06/example-06-06-forloop](http://learningprocessing.com/examples/chp06/example-06-06-forloop)

<br/>

#####c
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

<br/>

## while loops
#####python
[repl link](https://repl.it/L71v/0)

```python
while x < 10:      # do this ten times
  increaseCount() # call a function we defined above
```

<br/>

#####javascript
- [repl link](https://repl.it/L72P/1)
- [w3schools: while example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_while)

```
while (i < 10) {
    text += "The number is " + i;
    i++;
}
```

<br/>

#####c
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

<br/>

## "break" and "continue" statements

- `break` is used to exit a `for` or a `while` loop

<br/>

## draw()

<br/>

## recursion

<br/>

## sublime text

<br/>

## variables and scope

<br/>

## Assignment

- create an arwork or study in the style of orbital view
- repetition


Take photos throughout the week.
You are collecting a dataset, next week we will be creating data visualizations.
http://www.chartjs.org/


## resources

- [learnpython.org loops tutorial](https://www.learnpython.org/en/Loops)
- [Tutorials Point python overview](https://www.tutorialspoint.com/python/)
- [Coding Train with Daniel Shiffman](https://www.youtube.com/watch?v=h4ApLHe8tbk)
- [Python Turtle](https://www.youtube.com/watch?v=Grc1-j4EvTk)
- [Invent With Python - Tic Tac Toe](https://inventwithpython.com/chapter10.html)
- [Tic Tac Toe AI with Javascript](https://mostafa-samir.github.io/Tic-Tac-Toe-AI/)
- [Using Python - Programs](http://usingpython.com/programs/)