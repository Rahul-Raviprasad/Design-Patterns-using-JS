Design-Patterns-using-JS

A lot has been taken and learnt from Bob Nystrom's book http://gameprogrammingpatterns.com/.
Also from JavaScript Design Patterns: Writing maintainable and scalable code with JavaScript.
https://www.amazon.com/Learning-JavaScript-Design-Patterns-Osmani/dp/1449331815
Courtesy of Addy Osmani(https://medium.com/@addyosmani).
Design Patterns: Elements of Reusable Object-Oriented Software by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (ominously called the “Gang of Four”).


One of the most important goals in writing maintainable code is being able to notice
recurring themes in that code and optimize them.

What is good software architecture?

The first key peice is that architecture is about "change". Anticipate change!!!

The most time consuming process is understanding the requirement and figuring out
what needs to be done. How it might change in the future and anticipate ahead of time?
How to write code that's so generic that it solve multiple problems(similar of course)?
a very simple eg.
you have asked to write a function that adds 3 to a number and returns it.
it would be something like

function addThree(number) {
  return number + 3;
}

This can so easily be changed to be more generic like

function add(number1, number2) {
  return number1 + number2;
}

The previous function can be now reused in many places.

Once you understand the problem and the parts of the code it touches, the actual coding is sometimes trivial.

You can define “decoupling” a bunch of ways, but I think if two pieces of code are coupled, it means you can’t understand one without understanding the other. If you de-couple them, you can reason about either side independently.


You have to think about which parts of the program should be decoupled and introduce abstractions at those points. Likewise, you have to determine where extensibility should be engineered in so future changes are easier to make.

But this is where it starts to get tricky. Whenever you add a layer of abstraction or a place where extensibility is supported, you’re speculating that you will need that flexibility later. You’re adding code and complexity to your game that takes time to develop, debug, and maintain.

That effort pays off if you guess right and end up touching that code later. But predicting the future is hard, and when that modularity doesn’t end up being helpful, it quickly becomes actively harmful. After all, it is more code you have to deal with.

Performance vs architecture
Many of the patterns are about making the programs more flexible. So that there has to be less number of
changes in the future, but when it comes to performance or optimization, we want to have certain assumptions
eg. Can we safely assume we’ll never have more than 256 enemies? Great, we can pack an ID into a single byte. Will we only call a method on one concrete type here? Good, we can statically dispatch or inline it. Are all of the entities going to be the same class? Great, we can make a nice contiguous array of them.

It’s easier to make a fun game fast than it is to make a fast game fun. One compromise is to keep the code flexible until the design settles down and then tear out some of the abstraction later to improve your performance.

Abstraction and decoupling make evolving your program faster and easier, but don’t waste time doing them unless you’re confident the code in question needs that flexibility.

Think about and design for performance throughout your development cycle, but put off the low-level, nitty-gritty optimizations that lock assumptions into your code until as late as possible.

Move quickly to explore your game’s design space, but don’t go so fast that you leave a mess behind you. You’ll have to live with it, after all.

If you are going to ditch code, don’t waste time making it pretty. Rock stars trash hotel rooms because they know they’re going to check out the next day.

But, most of all, if you want to make something fun, have fun making it.
