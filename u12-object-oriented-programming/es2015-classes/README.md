# ES2015 Exercises 

## Part One 

Create a class for vehicle. Each vehicle instance should have the following properties: make, model, year

Each vehicle instance should have access to a method called **honk**, which returns the string “Beep.”

``` js
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
```

Each vehicle instance should have access to a method called honk, which returns the string “Beep.”

``` js
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."
```

### Solution

``` js 

```

## Part Two

Create a class for a car. The **Car** class should inherit from **Vehicle** and each car instance should have a property called **numWheels** which has a value of 4.

``` js 
let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4
```

### Solution

``` js 

```

## Part Three 

Create a class for a Motorcycle. This class should inherit from **Vehicle** and each motorcycle instance should have a property called **numWheels** which has a value of 2. It should also have a **revEngine** method which returns “VROOM!!!”


### Solution

``` js 
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2
```

## Part Four

Create a class for a Garage. It should have a property called **vehicles** which will store an array of vehicles, and a property called **capacity** which is a number indicating how many vehicles will fit in the garage. When you create a garage, **vehicles** will always be empty; you only need to provide the capacity.

A garage should also have an **add** method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

``` js 
let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."
```

### Solution

``` js

```

## Full Solution

``` js

```