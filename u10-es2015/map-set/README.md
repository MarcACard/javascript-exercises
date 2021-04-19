# Maps & Sets Exercise

## Quick Questions

### Question #1

What does the following code return? 

``` js 
new Set([1,1,2,2,3,4])
```

### Question #2

What does the following code return? 

``` js
[...new Set("referee")].join("")
```

### Question #3

What does the Map **m** look like after running the following code?

``` js
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
```

## Write some Functions

### hasDuplicate

Write a function called **hasDuplicate** which accepts an array and returns true or false if that array contains a duplicate

``` js
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
```

### vowelCount

Write a function called **vowelCount** which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

``` js
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
```