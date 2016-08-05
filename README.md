Design-Patterns-using-JS

A lot has been taken and learnt from Bob Nystrom's book http://gameprogrammingpatterns.com/.
Also from JavaScript Design Patterns: Writing maintainable and scalable code with JavaScript.
https://www.amazon.com/Learning-JavaScript-Design-Patterns-Osmani/dp/1449331815
Courtesy of Addy Osmani(https://medium.com/@addyosmani).
Design Patterns: Elements of Reusable Object-Oriented Software by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (ominously called the “Gang of Four”).


One of the most important goals in writing maintainable code is being able to notice
recurring themes in that code and optimize them.

What is good software architecture?

The first key piece is that architecture is about "change". Anticipate change!!!

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

Patterns are not Exact solutions

We need to realize that patterns in themselves don't solve design issues

Remember that not every algorithm, best practice or solution represents what might be considered a complete pattern. There may be a few key ingredients here that are missing and the pattern community is generally wary of something claiming to be one unless it has been heavily vetted. Even if something is presented to us which appears to meet the criteria for a pattern, it should not be considered one until it has undergone suitable periods of scrutiny and testing by others.

In studying design patterns, it's not irregular to come across the term "proto-pattern". What is this? Well, a pattern that has not yet been known to pass the "pattern"-ity tests is usually referred to as a proto-pattern. Proto-patterns may result from the work of someone that has established a particular solution that is worthy of sharing with the community, but may not have yet had the opportunity to have been vetted heavily due to its very young age.

Alternatively, the individual(s) sharing the pattern may not have the time or interest of going through the "pattern"-ity process and might release a short description of their proto-pattern instead. Brief descriptions or snippets of this type of pattern are known as patlets.

The work involved in fully documenting a qualified pattern can be quite daunting. Looking back at some of the earliest work in the field of design patterns, a pattern may be considered "good" if it does the following:

Solves a particular problem: Patterns are not supposed to just capture principles or strategies. They need to capture solutions. This is one of the most essential ingredients for a good pattern.
The solution to this problem cannot be obvious: We can find that problem-solving techniques often attempt to derive from well-known first principles. The best design patterns usually provide solutions to problems indirectly - this is considered a necessary approach for the most challenging problems related to design.
The concept described must have been proven: Design patterns require proof that they function as described and without this proof the design cannot be seriously considered. If a pattern is highly speculative in nature, only the brave may attempt to use it.
It must describe a relationship: In some cases it may appear that a pattern describes a type of module. Although an implementation may appear this way, the official description of the pattern must describe much deeper system structures and mechanisms that explain its relationship to code.
We would be forgiven for thinking that a proto-pattern which fails to meet guidelines isn't worth learning from, however, this is far from the truth. Many proto-patterns are actually quite good. I’m not saying that all proto-patterns are worth looking at, but there are quite a few useful ones in the wild that could assist us with future projects. Use best judgment with the above list in mind and you’ll be fine in your selection process.

The rule of 3

Fitness of purpose - how is the pattern considered successful?
Usefulness - why is the pattern considered successful?
Applicability - is the design worthy of being a pattern because it has wider applicability? If so, this needs to be explained. When reviewing or defining a pattern, it is important to keep the above in mind.


Anti Patterns
Describe a bad solution to a particular problem which resulted in a bad situation occurring
Describe how to get out of said situation and how to go from there to a good solution

To summarize, an anti-pattern is a bad design that is worthy of documenting. Examples of anti-patterns in JavaScript are the following:

Polluting the global namespace by defining a large number of variables in the global context
Passing strings rather than functions to either setTimeout or setInterval as this triggers the use of eval() internally.
Modifying the Object class prototype (this is a particularly bad anti-pattern)
Using JavaScript in an inline form as this is inflexible
The use of document.write where native DOM alternatives such as document.createElement are more appropriate. document.write has been grossly misused over the years and has quite a few disadvantages including that if it's executed after the page has been loaded it can actually overwrite the page we're on, whilst document.createElement does not. We can see here for a live example of this in action. It also doesn't work with XHTML which is another reason opting for more DOM-friendly methods such as document.createElement is favorable.
Knowledge of anti-patterns is critical for success. Once we are able to recognize such anti-patterns, we're able to refactor our code to negate them so that the overall quality of our solutions improves instantly.

## Notes on AMD and CommonJS Standards

Both AMD and CommonJS are valid module formats with different end-goals.

AMD adopts a browser-first approach to development, opting for asynchronous behavior and simplified backwards compatibility but it doesn't have any concept of File I/O. It supports objects, functions, constructors, strings, JSON and many other types of modules, running natively in the browser. It's incredibly flexible.

CommonJS on the other hand takes a server-first approach, assuming synchronous behavior, no global baggage and attempts to cater for the future (on the server). What we mean by this is that because CommonJS supports unwrapped modules, it can feel a little more close to the ES.next/Harmony specifications, freeing us of the define() wrapper that AMD enforces. CommonJS modules however only support objects as modules.

## Design patterns VS Architecture pattern VS Architecture Style

Myth 2:- Design patterns and architecture patterns are same.

Fact: - Design patternare at leastpseudo code level while architecture patterns are at component level.
Meaning of the word “Pseudo “:- Approximately it looks like that.

We have seen lot of people using these vocabularies interchangeably. But there is a significant difference in the way they work.

So first let us try to understand the word “patterns” and then we will dive deeper.

If you see the plain English meaning of patterns: - They are recurring and predictable events.

For example climate change follows a pattern. Generally ( at least in India) you have summer followed by rains and then cold. Humans identify these patterns to organize themselves in a better manner.

In the same way in software world the problems which occur mostly have a specific pattern and many developers have solved these problems and have come out with a solution. Later some of these solutions have proven their worth over a period of time and have become standard solution for that problem pattern.

For example if you want to SORT then you have time tested algorithms like bubble sort, inserted sort etc.

Design Pattern are pseudo code level solutions while architecture pattern are 30,000 feet level solutions defined at component level. In simple words if someone says “X” is a Design Pattern, Expect code, if someone say “Y” is an Architecture Pattern expect some kind of component level block diagram.

Architecture style is a thought process, a principle which just comes in one liners. For example REST is a architecture style where we give importance to HTTP.

Below are some examples for each one of them.

Design Pattern	Factory , Iterator , Singleton
Architecture Pattern	MVC, MVP, MVVM
Architecture Style	REST, SOA , IOC

This has been taken from : http://www.codeproject.com/Articles/1009532/Learn-Csharp-Design-patterns-step-by-step-with-a-p
