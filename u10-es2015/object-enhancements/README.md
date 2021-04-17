# Object Enhancement Exercises

## Same Keys & Values

``` js
/* ES5 Version */
function createInstructor(firstName, lastName) {
  let instructor = {};
  instructor[firstName] = firstName;
  instructor[lastName] = lastName;
  return instructor;
}
/* Write an ES2015 Version */
function createInstructor(firstName, lastName) {
  return { firstName, lastName }
}
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
const favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}
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
var instructor = {
  firstName: 'colt',
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  }
}
```

## createAnimal Function

Write a function which generates an animal object. The function should accept 3 arguments:

- species: the species of anime('cat', 'dog')
- verb: a string used too name a function ('bark', 'bleet')
- noise: a string to be printed when above function is callled ('woof', 'baaa')

``` js
/* Create a function using object enhancements from ES2015 */
function createAnimal(species, verb, noise){
  return {
    species, noise,
    [verb]: function (){
      return this.noise
    }
  }
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
```