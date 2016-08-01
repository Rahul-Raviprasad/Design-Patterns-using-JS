# AMD
The Asynchronous Module Definition (AMD) API specifies a mechanism for defining modules such that the module and its dependencies can be asynchronously loaded. This is particularly well suited for the browser environment where synchronous loading of modules incurs performance, usability, debugging, and cross-domain access problems.

We can find the actual spec here.
https://github.com/amdjs/amdjs-api/blob/master/AMD.md

RequireJS and curl.js are good examples for the use of AMD spec.

## Define method
This method is for facilitating module definition.

```javascript
define(
    module_id /*optional*/,
    [dependencies] /*optional*/,
    definition function /*function for instantiating the module or object*/
);
```

## Require method
This is for handling dependency loading.

```javascript
// Consider "foo" and "bar" are two external modules
// In this example, the "exports" from the two modules
// loaded are passed as function arguments to the
// callback (foo and bar) so that they can similarly be accessed

require(["foo", "bar"], function ( foo, bar ) {
    // rest of your code here
    foo.doSomething();
});
```

## Why Is AMD A Better Choice For Writing Modular JavaScript?

* Provides a clear proposal for how to approach defining flexible modules.
* Significantly cleaner than the present global namespace and <script> tag solutions many of us rely on. There's a clean way to declare stand-alone modules and dependencies they may have.
* Module definitions are encapsulated, helping us to avoid pollution of the global namespace.
* Arguably works better than some alternative solutions (e.g. CommonJS, which we'll be looking at shortly). It doesn't have issues with cross-domain, local or debugging and doesn't have a reliance on server-side tools to be used. Most AMD loaders support loading modules in the browser without a build process.
* Provides a "transport" approach for including multiple modules in a single file. Other approaches like CommonJS have yet to agree on a transport format.
* It's possible to lazy load scripts if this is needed.

## Steps to use RequireJS in your project.
1. Include RequireJS library in the head or body of the html
2. Set the data-main attribute of the requireJS script tag to the relative file location of the first script, that you would like requirejs to load.

```html
<html>
  <head>
    <!--main.js here is the first script we want reuirejs to load. data-main tells requirejs to load the given script. Notice we don't need to provide .js extension-->
    <script src="js/require.js" data-main="js/main"></script>
  </head>
  <body>
  </body>
</html>
```
To load it asynchronously and dynamically through script

```html
<html>
  <head>

    <script>
      (function(w, d){
        var script = d.createElement("script");
        script.setAttribute("data-main", "js/main");
        script.src = "js/require.js";
        script.async = true;
        d.getElementByTagName("head")[0].appendChild(script);
      })(window, window.document);
    </script>
  </head>
  <body>
  </body>
</html>
```

Including RequireJS synchronously is an accepted practice, but you can choose to include it asynchronously as well.
