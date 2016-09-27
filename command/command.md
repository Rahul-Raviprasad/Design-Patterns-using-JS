## Command Pattern

Gof defn:
"Encapsulate a request as an object, thereby letting users parameterize clients with different requests, queue or log requests, and support undoable operations."

Command pattern is nothing but a method call wrapped in an object.

That sounds a lot like a “callback”, “first-class function”, “function pointer”, “closure”, or “partially applied function” depending on which language you’re coming from, and indeed those are all in the same ballpark. The Gang of Four later says:
"Commands are an object-oriented replacement for callbacks."

An example car purchasing service

```javascript
(function(){

  var carManager = {

    // request information
    requestInfo: function( model, id ){
      return "The information for " + model + " with ID " + id + " is foobar";
    },

    // purchase the car
    buyVehicle: function( model, id ){
      return "You have successfully purchased Item " + id + ", a " + model;
    },

    // arrange a viewing
    arrangeViewing: function( model, id ){
      return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }

  };

})();

carManager.execute = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
};
```
