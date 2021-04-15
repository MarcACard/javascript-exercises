# Rest & Spread Operator Exercises

## Refactor with an Arrow Function and Rest Operator

``` js 
function filterOutOdds() { 
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num){
    return num % 2 === 0
  });
}
/* Write an ES2015 Version*/

```

## findMin

Write a function called **findMin** taht accepts a variable number of arguments and returns the smallest argument. 

``` js

findMin(1,4,12,-3) // -3
findMin(1,1) // -1
findMin(3,1) //1
```

## mergeObjects

Write a function called **mergeObjects** that accepts two objects and return a new object which contains all the keys and values of the first object and second object. 

``` js

mergObjects({a:1, b:2}, {c:3,d:4}) // {a:1, b:2, c:3, d:4}
```

## doubleAndReturnArgs

Write a function called **doubleAndReturnArgs** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

## Slice and Dice

Write the following functions using rest, spread and refactor these functions to be arrow functions!

``` js
/** remove a random element in the items array
and return a new array without that item. */
function removeRandom(items) {

}

/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {

}


/** Return a new object with a key removed. */
function removeKey(obj, key) {

}


/** Combine two objects and return a new object. */
function combine(obj1, obj2) {

}


/** Return a new object with a modified key and value. */
function update(obj, key, val) {

}
```