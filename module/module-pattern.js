//Module Patterns
/*
The Module pattern encapsulates "privacy", state and organization using
closures. It provides a way of wrapping a mix of public and private methods
and variables, protecting pieces from leaking into the global scope and
accidentally colliding with another developer's interface. With this pattern,
only a public API is returned, keeping everything else within the closure private.

It should be noted that there isn't really an explicitly true sense of
"privacy" inside JavaScript because unlike some traditional languages,
it doesn't have access modifiers. Variables can't technically be declared
as being public nor private and so we use function scope to simulate this
concept. Within the Module pattern, variables or methods declared are only
available inside the module itself thanks to closure. Variables or methods
defined within the returning object however are available to everyone.


*/

var testModule = (function () {

  var counter = 0;

  return {

    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };

})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();

//Module Pattern variations
//Import Mixins
//This variation of the pattern demonstrates how globals (e.g jQuery, Underscore)
//can be passed in as arguments to our module's anonymous function.
//This effectively allows us to import them and locally alias them as we wish.

// Global module
var myModule = (function ( jQ, _ ) {

    function privateMethod1(){
        jQ(".container").html("test");
    }

    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }

    return{
        publicMethod: function(){
            privateMethod1();
        }
    };

// Pull in jQuery and Underscore
})( jQuery, _ );

myModule.publicMethod();
