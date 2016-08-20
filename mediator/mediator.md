# Mediator Pattern

A mediator is a behavioral design pattern that allows us to expose a unified interface through which the different parts of a system may communicate.

The Mediator promotes loose coupling by ensuring that instead of components referring to each other explicitly, their interaction is handled through this central point. This can help us decouple systems and improve the potential for component reusability.

## Mediator Vs. Facade

We will be covering the Facade pattern shortly, but for reference purposes some developers may also wonder whether there are similarities between the Mediator and Facade patterns. They do both abstract the functionality of existing modules, but there are some subtle differences.

The Mediator centralizes communication between modules where it's explicitly referenced by these modules. In a sense this is multidirectional. The Facade however just defines a simpler interface to a module or system but doesn't add any additional functionality. Other modules in the system aren't directly aware of the concept of a facade and could be considered unidirectional.
