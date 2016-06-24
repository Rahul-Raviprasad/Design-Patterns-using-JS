Good software is generally modular.

In JavaScript there are several ways to make modules.
The Module pattern
Object literal notation
AMD modules
CommonJS modules
ECMAScript Harmony modules


Object literal notation

var myObjectLiteral = {

    variableKey: variableValue,

    functionKey: function () {
      // ...
    }
};

Advantage of module pattern
helps with encapsulation

Disadvantages
Since we can't access the private members of the module. providing a quick fix
or patch becomes a big problem. 
