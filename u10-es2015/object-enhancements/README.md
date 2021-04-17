# Object Enhancement Exercises

## Same Keys & Values

``` js
/* ES5 Version */
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
/* Write an ES2015 Version */
```

## Computed Property Names

``` js
/* ES5 Version */
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
/* Write an ES2015 Version */
```

## Object Methods

``` js
/* ES5 Version */
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
/* Write an ES2015 Version */
```

## createAnimal Function

Write a function which generates an animal object. The function should accept 3 arguments:

- species: the species of anime('cat', 'dog')
- verb: a string used too name a function ('bark', 'bleet')
- noise: a string to be printed when above function is callled ('woof', 'baaa')

``` js
/* Create a function using object enhancements from ES2015 */

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
```