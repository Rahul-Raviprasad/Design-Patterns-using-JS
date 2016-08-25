# Facade pattern

## Intent
Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher level interface that makes the subsystem easier to use.

## Motivation

Structuring a system into subsystem helps reduce complexity. A common design goal is to minimize the communication and dependencies between subsystems.

## Application
Use this pattern when
1. You want to provide a simple interface for a complex subsystem.
2. There are many between clients and implementation classes of an abstraction. Introduce a facade to decouple the subsystem from the clients and other subsystems, thereby promoting subsystem independence and portability.
3. you want to layer your subsystems. Define a Facade as an entry point to each level. 

This pattern provides a convenient higher-level interface to a larger body of code, hiding its true underlying complexity. Think of it as simplifying the API being presented to other developers, something which almost always improves usability.

Facades are a structural pattern which can often be seen in JavaScript libraries like jQuery where, although an implementation may support methods with a wide range of behaviors, only a "facade" or limited abstraction of these methods is presented to the public for use.
