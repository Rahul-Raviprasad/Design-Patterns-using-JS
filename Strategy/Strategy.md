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
1. Many related classes differ only in there behavior. Strategies provide a way to configure a class with one of many behavior.
2. You need different variants of an algorithm. For example you might define algorithms reflecting different space/time complexity. Strategies can be used when these variants are implemented as a class hierarchy of algorithms.
3. An algorithm uses data that clients shouldn't know about. Use strategy pattern to avoid exposing complex, algorithm specific data-structures.
4. A class defines many behaviors, and these appear as multiple conditional statements in its operations. Instead of many conditionals, move related conditional statements to their won Strategy class.

## Participants
#### Strategy
declares an interface common to all supported algorithms. Context uses this interface to call the algorithm defined by a ConcreteStrategy.
#### ConcreteStrategy
implements the strategy using the Strategy interface.
#### Context
is configured with a ConcreteStrategy Object
maintains a reference to a strategy Object
may define an interface that lets strategy access its data.
