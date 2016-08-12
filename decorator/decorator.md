# Decorator Pattern

## Intent

Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

Also known as Wrapper.

## Motivation

Sometimes we want to add responsibilities to individual objects, not to an entire class.
One way to add responsibility is with inheritance. This is inflexible, however, because the choice of feature is made statically.
A client can't control how and when to decorate the component with the feature.

A more flexible approach is to enclose the component in another object that adds the feature. This enclosing object is called a decorator. The decorator conforms to the interface of the component it decorates, so that its presence is transparent to the components clients. The decorator forwards requests to the component and may perform additional actions before or after forwarding. This transparency lets you nest decorators recursively, thereby allowing an unlimited number of added responsibilities.

## Applicability
Use decorator
1. to add responsibilities to individual objects dynamically and transparently, that is, without affecting other objects.
2. for responsibilities that can be withdrawn.
3. when extension by subclassing is impractical. Sometimes a large number of independent extensions are possible and would produce an explosion of subclasses to support every combination. Or a class definition may be hidden or otherwise unavailable for subclassing.

## Participants

### Component
defines the interface for objects that can have responsibilities added to them dynamically
### ConcreteComponent
defines an object to which additional responsibilities can be attached.
### Decorator
maintains a reference to a Component object and defines an interface that conforms to Component's interface.
### ConcreteDecorator
adds responsibilities to the component.
