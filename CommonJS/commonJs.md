# CommonJS

## A module format optimized for the server.

The CommonJS module proposal specifies a simple API for declaring modules server-side and unlike AMD attempts to cover a broader set of concerns such as I/O, file-system, promises and more.

From a structure perspective, a CommonJS module is a reusable piece of JavaScript which exports specific objects made available to any dependent code. Unlike AMD, there are typically no function wrappers around such modules (so we won't see define here for example).

CommonJS modules basically contain two primary parts: a free variable named exports which contains the objects a module wishes to make available to other modules and a require function that modules can use to import the exports of other modules.

### Understanding CommonJS: require() and exports

```javascript
// package/lib is a dependency we require
var lib = require( "package/lib" );

// behavior for our module
function foo() {
  lib.log( "hello world!" );
}

// export (expose) foo to other modules
exports.foo = foo;
```

##### AMD equivalent of the above example

```javascript
define(function(require){
   var lib = require( "package/lib" );

    // some behaviour for our module
    function foo(){
        lib.log( "hello world!" );
    }

    // export (expose) foo for other modules
    return {
        foobar: foo
    };
});
```
This can be done as AMD supports a simplified CommonJS wrapping feature.

## Require a source of confusion
Although it's beyond the scope of this section, one may have also noticed that there were different types of "require" methods mentioned when discussing AMD and CommonJS. The concern with a similar naming convention is of course confusion and the community are currently split on the merits of a global require function. John Hann's suggestion here is that rather than calling it "require", which would probably fail to achieve the goal of informing users about the different between a global and inner require, it may make more sense to rename the global loader method something else (e.g. the name of the library). It's for this reason that a loader like curl.js uses curl() as opposed to require.
