# Arrow Function Exercise

In this exercise, refactor some ES5 code into ES2015

## ES5 Map Callback Refactor

``` js
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

/* Re-write using Arrow Function Shorthand */
const double = arr => arr.map(val => val * 2);

```

## Refactor the Function Pt. 2

``` js
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

/* Re-write using Arrow Functions */
const squareAndFindEvens = numbers => numbers
  .map(num => num ** 2)
  .filter(square => square % 2 === 0)
```
