# Silicon to Singularity
# SVA IxD Week 1

[Week 1 slides](http://week1-hello-world.areaofeffect.io)

Notes from our week one class. These notes are generated into the slides we use for class.

<br/>

#### TLDR;
1. [Slides from Week 1](http://hello-world.areaofeffect.io/#1)
2. [Office Hours/ Slack info](#resources)
3. [Overview of Computation: From Silicon to Singularity](#singularity)
4. [Week 1: Assignments](#assignments)
5. [Software to download](#downloads)


<br/>

---

> How do we speak to machines?
>
> Code usually means a system for transferring information amongst people and machines, and now objects. Code is communication.

---

<br/>

# Introductions

---

# Area of Effect
- Carrie Kengle @kandizzy
- Bruno Kruse @brunokuse
- areaofeffect.io

---
# Introduce yourselves

- Do you want to code? Why or why not?  
- How do you feel about the singularity?  
- Tell us one thing you'd like to get out of this class.  

---
<a name="resources"></a>

# Resources and Office Hours

- Office Hours
  - Quick questions, project help, code review
  - Web / Skype / Hangout: Schedule with us in advance
- Slack
- Posting Assignments
  - Due 12:00pm Wednesday's before class

---
# Class Methods
- This class is designed to immerse you in programming and learn a new language or method by the end of our journey.
- We'll add code as as a tool to our design process, solving complex and specific problems in our projects.
- We'll show you what tools and systems are available. It's up to you to
choose what you need for your projects. We'll guide you along the way.
- If you already know programming, thats great! We'll continue to reinforce
these skills and learn new ones even faster.
- Design wise, we'll measure our successes by not only the code we write, but
the problems code enables us to solve.
- We'll learn how to evaluate what's good Copy Pasta (paste) v.s bad Copy Pasta. We want you to own your successes and failures. :)


---
# Real-time
- Lot's of feedback and communication.
- Coding is massive; we want to know what's confusing and what's not.
- Join our #slack channel.

---
<a name="singularity"></a>
# From Silicon to Singularity

- How computers work. Powers of two.
- Layers of abstraction and computer architecture.
- Types of programmers
- People in history
- Types of computers
- Computers in history
- Types of programming languages
- Code + Design + Machines + People
- Evolution of Creative Coding
- What's next?

---

# Silicon

Grace Jones. What does she have to do with code? In the 80s there was an entire Bond film about the destruction all of Silicon Valley. Why Silicon?


![Jones](/week1/images/silicon/silicon_mayday.jpg)

  The element silicon is used extensively as a semiconductor in solid-state devices in the computer and microelectronics industries. For this, hyperpure silicon is needed. The silicon is selectively doped with tiny amounts of boron, gallium, phosphorus or arsenic to control its electrical properties.

Grace Jones saves the day.

(note: the goals are money and power, but it's more in hindsight. it's about human evolution)

Moore's law is the observation that the number of transistors in a dense integrated circuit doubles approximately every two years.

Silicon together with Moore's law is the driving force behind everything that's happened with computers since the microcontroller.

It is an interesting time now because we are about to hit a physical wall where the

> Moore's law has died at the age of 51 after an extended illness.

[Moores law is really dead this time.](https://arstechnica.com/information-technology/2016/02/moores-law-really-is-dead-this-time/)

---
# Kernel
Many times when evaluating a toolchain, you end up with Linux. And why is that?

Linux now supports more different types of devices and processors than any other operating system ever has in the history of computing. It runs on everything from mobile phones, to laptops and cloud servers, to raspberry pi.

![Kernel Map](/week1/images/kernel/1280px-Kernel_Layout.svg_.png)

This is largely due to the development of it's kernel.

*Beautiful Code, Chapter 16*

1. Small objects loosely coupled
2. Iterative dev process
3. Extremely collaborative

---

# Algorithms

![Sol](https://raw.githubusercontent.com/areaofeffect/hello-world/master/week1/images/algorithms/tiedie.png?token=AADEj9_Ke9ABTA5qyzx2WnmF09oGrmrfks5ZuUyFwA%3D%3D)

The thing about algorithms is that they are really, really beautiful.

And, they solve really hard problems in computer science. Which makes computational tasks run better, which makes things more beautiful, which makes our lives better.

If you are interested, try exploring the many ways to sort something. 'Can we do better?' - a question that computer scientists ask themselves.

[http://sortvis.org/algorithms/timsort.html](http://sortvis.org/algorithms/timsort.html)

Or just explore their jaw-dropping beauty.
[https://bost.ocks.org/mike/algorithms/](https://bost.ocks.org/mike/algorithms/)

---
# Sol Lewitt

> According to the principle of his work, LeWitt's wall drawings are usually executed by people other than the artist himself. Writing about making wall drawings, LeWitt himself observed in 1971 that "each person draws a line differently and each person understands words differently".


![Sol](/week1/images/art/Figure-3.png)

---
# Workshop

---
# Software Tools
We'll start by downloading our favorite tools to grow our workflow and process.

Goals:
- To become familiar with programming tools and consoles.
- Execute intro JS and Python
- Learn process and workflow
- Detect errors

---
<a name="downloads"></a>

# Editors
VSCode will be the editor we use for most things in class.
- [VSCODE](https://code.visualstudio.com/)

---
# Scripting
- [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [What is Markdown?](https://www.markdownguide.org/getting-started/)
- Python
- JavaScript

---
# Useful markdown

```markdown
# h2
## h2
> quotes
<code></code>
```

---


# Hello JavaScript (your first javascript program)

### 1. open the developer console
*View -> Developer -> JavaScript Console*
*CMD + OPTION + J*

![Developer Console](/week1/images/tutorial/Screen%20Shot%202017-09-03%20at%203.40.07%20PM.png)

### 2. type your code
```javascript
alert ('hello, world.')
```

![notes](/week1/images/tutorial/Screen%20Shot%202017-09-03%20at%2011.46.43%20PM.png)

---

# Terminal Tips

### shortcuts
[terminal cheatsheet by 0nn0](https://github.com/0nn0/terminal-mac-cheatsheet)

### useful commands
```bash
ls
```

```bash
open .
```

```bash
history
```

```bash
ifconfig
```

---
# Hello Python (your first python program)
You already have python on your computer!

### 1. write
```python
person = input('Enter your name: ')
print('Hello', person)
```
### 2. run
```bash
python hello-world.py
```

---
<a name="commandline"></a>
# Install OSX Command Line Tools 
Unlike JavaScript and Python, your machine doesn't have a way to build C applications. Sometimes we need to download additional things to get our apps working. These are usually referred to as <i>dependencies</i> We'll try a quick demo.

### 1. Open your terminal

### 2. Type the following
```bash
xcode-select --install
```

The following will pop up. Click OK to install.
![](/week1/images/tutorial/Screen%20Shot%202017-09-03%20at%202.42.00%20PM.png)

---
# Hello C (your first javascript program)

### 1. write
```c
/* Hello World program */

#include <stdio.h>

int main(void) {
   printf("Hello, world!\n\n");

   return 0;
}
```

### 2. compile
```bash
gcc -ansi -o hello-world hello-world.c
```

### 3. run
```bash
./hello-world
```
---


<br/>
<br/>
<br/>
<br/>

---
<a name="assignments"></a>
# Assignments Week 1

1. Join our slack. We will help you through questions and guide installing any of the software below.

2. Download and setup your computer for coding. Come to next prepared class with VSCode installed.

3. Review our 'From Silicon to Singularity' notes above. This is a (very brief) overview of the world of computation, coding and the internet.

4. Pick any of the hello world examples from above and modify to say a different message. We will discuss the differences between the languages next class.

5. Watch Bret Victors the [Humane Representation of Thought](https://vimeo.com/115154289). Write three things you learned, we will share next class.
