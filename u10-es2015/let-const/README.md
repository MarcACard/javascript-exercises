
## ES5 to ES2015 Global Constants 

Refactor the ES5 Code Example below into ES2015.

``` js
var PI = 3.14;
PI = 42; // stop me from doing this!
/* Write an ES2015 Version Below */
const PI = 3.14;
PI = 42; // By delcaring PI with const, the attempt to reassign will throw an errow.
```

## Q&A

### What is the difference between **var** and **let**?

`var` is function scoped, compared to `let` which is block scoped. Both `var` and `let` can be reassigned, but `let` cannot be redeclared.  

### What is the difference between **var** and **const**? 

`var` is function scoped, compared to `const` which is block scoped. `const` cannot be reassigned or redeclared like `var`. 

### What is the difference between **let** and **const**? 

`let` can be reassigned, but while `const` cannot be reassigned. Both `let` and `const` are both block scoped and cannot be redeclared. 

### What is hoisting? 

Javascript will _hoist_ or run declarations before they are intialized. This behavior is specific to `var` or function declarations. `let` and `const` are not hoisted.  

``` js
// Basic Hoisting Example
console.log(message); // Output: undefined

var message = 'hello'
console.log(message) // Output: hello
```
