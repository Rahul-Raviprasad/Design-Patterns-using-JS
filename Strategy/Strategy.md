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

## Consequences

1. Families of related algorithms: Hierarchies of Strategy classes define a family of algorithms or behaviors for contexts to reuse.
2. An alternative to subclassing
3. Strategies eliminate conditional statements
4. A choice of implementations:  Strategies can provide different implementations for the same behavior. The client can choose among strategies with different space/time trade-offs
5. Clients must be aware of different strategies: The client has a drawback that it must know before itself, how strategies differ before it can select the appropriate one. Clients must be exposed to implementation issues.
6. Communication overhead between Strategy and Context: Strategy interface is shared by all ConcreteStrategy classes whether the algorithms they implement are trivial or complex. Hence it's likely that some ConcreteStrategy won't use all the information passed to them through this interface; simple ConcreteStrategies may not use any of them!. That means that the context will create and initialize parameters that never get used. If this is an issue, then you will need tighter coupling between context and strategy.
7. Increased number of objects: Sometimes we can reduce this problem by implementing a stateless objects that contexts share. Any residual state is maintained by the context, which passes it in each request to strategy object. Shared strategies should not maintain state across invocations, The flyweight pattern describes this approach better.
