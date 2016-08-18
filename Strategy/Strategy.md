# Strategy Pattern
This is a Object Behavioral Pattern.

## Intent
Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy allows the algorithm to vary independently from clients that use it.

This is also known as Policy.

## Motivation

Many algorithms will exist for a particular task. Hard- wiring all such algorithms into the classes that require them isn't desirable because:
1. Clients become more complex if they involve the algorithm. That makes the client bigger and harder to maintain, especially if they support multiple algorithms.
2. Different algorithms will be appropriate at different times. We don't want to support each one of them, if we are not using all of them.
3. It is difficult to add a new algorithm or vary an existing one.

## Applicability
Use Strategy pattern when
1. many related classes differ only in there behavior. 
