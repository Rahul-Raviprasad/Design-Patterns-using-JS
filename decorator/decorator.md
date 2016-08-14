# Decorator Pattern
It is a structural Pattern
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

## Consequences

1. More flexibility than static inheritance: With decorators, responsibilities can be added or removed at runtime, simply by attaching them or detaching them.
In contrast, inheritance requires creating a new class for each additional responsibility we want.
This results in many classes being added and that makes the system very complex.
We can also mix and match decorators

2. Avoids feature-laden classes high up the hierarchy: Instead of having a full featured complex class high up the hierarchy, you can define a simple class and add functionality as and when required. Also you can add new decorators later when you need them.

3. A decorator and its component aren't identical: A decorator acts as a transparent enclosure. But from an object identity point of view, a decorated component is not identical to the component itself. Hence you should not rely on the object identity.

4. Lots of little objects: When we use Decorator, we end up with lots of small objects which look similar. These objects differ only in the way they are interacted, not in their class or the variable values in them. People who know the pattern should be comfortable, but it could be difficult for those who are new to these.

## Implementation
1. Interface Conformance: A decorator object's interface must conform to the interface of the components it decorates.
ConcreteDecorator classes must therefore inherit from a common class.
2. Omitting the abstract Decorator Class: There's no need to define an abstract Decorator class when you only need to add a single responsibility. This is generally the case when you are dealing with an existing class hierarchy rather than designing a new one.
3. Keeping component classes lightweight: To ensure a conforming interface, components and decorators should descend from a common Component Class. It is important to keep this component class lightweight. This can make the decorators too heavy to be used.
4. Changing the skin of an object vs changing the guts: Strategy Pattern is better applied in scenarios where the component class itself is very heavy.

## Known uses

#### Object oriented UI toolkits
Many of these use Decorators

#### Streams in I/O facilities
For example define an abstract Stream class with MemoryStream and FileStream. But let say we want to do the following.
1. Compress the Stream data using different compression algorithms(run-length encoding, Lempel-Ziv, etc)
2. Reduce the Stream data to 7 bit ASCII characters so that it can be transmitted over an ASCII communication channel.

## How to use them in Javascript?

Decorating a Tea
Let's illustrate the decorator pattern with an example: decorating a Tea. You start with the prepare() method.
```javascript
   var tea = {};
     //note that we are intentionally keeping it lightweight and simple, so as to cater to a larger customer base
     //like some don't want sugar, others don't want milk and want a black tea
   tea.prepare = function() {
     console.log("heating water, adding tea powder");
   };

/*
Now let's implement a getDecorator() method which will be used to add extra decorators. The decorators will be implemented as constructor functions, and they'll all inherit from the base tree object.*/
tea.getDecorator = function(deco){
     tea[deco].prototype = this;
     return new tea[deco];
};

/* Now let's create the first decorator, Milk(). The Milk objects also provide a decorate() method, but they make sure they call their parent's decorate() first. */
  tea.Milk   = function() {
     this.prepare = function() {
       this.Milk.prototype.prepare();
       console.log('Pouring some milk');
     }
}
//Similarly, adding a Mint() and Masala() decorators:
  tea.Mint   = function() {
     this.prepare = function() {
       this.Mint.prototype.prepare();
       console.log('Adding mint leaves');
     }
   }
  tea.Masala   = function() {
     this.prepare = function() {
       this.Masala.prototype.prepare();
       console.log('Adding masala');
     }
   };

   tea = tea.getDecorator('Milk');
   tea = tea.getDecorator('Masala');
   tea = tea.getDecorator('Mint');
//Finally, running the prepare() method: tea.prepare();
/*
logs the following as expected
"heating water, adding tea powder"
'Pouring some milk'
'Adding masala'
'Adding mint leaves'
*/
```

## How to use in ES6?
It is much easier to implement the design pattern in ES6 since we are not using any other patterns to do stuff like inheritance.
Another Example is upgrading your weapons or basic units in game development.

Following Code taken from a CodeWars problem Marine gets a WeaponUpgrade it increases the damage by 1, and if it is a ArmorUpgrade then increase the armor by 1.

You have 3 classes:

Marine: has a damage and an armor properties
MarineWeaponUpgrade and MarineArmorUpgrade: upgrades to apply on marine. Accepts a Marine in the constructor and has the same properties as the Marine
```javascript
class Marine {
  constructor(_damage, _armor) {
    this.damageCount = _damage || 0;
    this.armorCount = _armor || 0;
  }

  get damage() { return this.damageCount; }
  set damage(value) { this.damageCount = value; }

  get armor() { return this.armorCount; }
  set armor(value) { this.armorCount = value;}
}

class MarineWeaponUpgrade {
  constructor(decoratedMarine) {
    this.decoratedMarine = decoratedMarine;
  }

  get damage() { return this.decoratedMarine.damage + 1; }
  set damage(value) { this.decoratedMarine.damage = value; }

  get armor() { return this.decoratedMarine.armor; }
  set armor(value) { this.decoratedMarine.armor = value; }
}

class MarineArmorUpgrade {
  constructor(decoratedMarine) {
    this.decoratedMarine = decoratedMarine;
  }

  get damage() { return this.decoratedMarine.damage; }
  set damage(value) { this.decoratedMarine.damage = value; }

  get armor() { return this.decoratedMarine.armor+1; }
  set armor(value) { this.decoratedMarine.armor = value; }
}

//tests

describe('Decorator', () => {
  it('Single upgrade', () => {
    let marine = new Marine(10, 1);

    Test.assertEquals(new MarineWeaponUpgrade(marine).damage, 11);
    Test.assertEquals(new MarineWeaponUpgrade(marine).damage, 11);
  });

  it('Double upgrade', () => {
    let marine = new Marine(15, 1);
    marine = new MarineWeaponUpgrade(marine);
    marine = new MarineWeaponUpgrade(marine);

    Test.assertEquals(marine.damage, 17);
  });

  it('Triple upgrade', () => {
    let marine = new Marine(20, 1);
    marine = new MarineWeaponUpgrade(marine);
    marine = new MarineWeaponUpgrade(marine);
    marine = new MarineWeaponUpgrade(marine);

    Test.assertEquals(marine.damage, 23);
  });
});

```

## Decorators in ES7

Note: ES7 is not yet out and is not a standard and this can change.
