// The old way

// We declare a constructor that we can use to build
// a new Car object. Remember the make the first letter capital.
function Car(color) {
  this.color = color;
  this.wheels = 4;
  this.driving = false;
}

// We usually want to add our methods to the Car prototype and
// our properties to the Car constructor
// This method will update our cars `driving`
// property to true
Car.prototype.drive = function() {
  this.driving = true;
}

// Our new Coupe constructor. 
// Coupe is a type of car, so it should inherit from it
function Coupe(color) {
  // Calling the Car constructor, allows us to inherit the 
  // properties from the Car. Remember `this` in this case is the `coupe` object
  Car.call(this, color)
  this.doors = 2;
}

// Part of inheriting from prototypes means we need to make a copy of the
// the cars prototype and assign it to our coupes prototype.
Coupe.prototype = Object.create(Car.prototype);

// And make sure we update the Coupes constructor, otherwise it will
// point at the Car constructor, since we copied it.
Coupe.prototype.constructor = Coupe

// Here, create a new Coupe Object, invoke the drive method
// and make sure the `driving` property is set to `true` afterwards.
const coupe = new Coupe("Yellow");
coupe.drive();
console.log(coupe.driving);



// The new way ES6

// Instead of having a seperate constructor and prototype, we
// have a Car class. Note the capital `C`ar.
class Car {

  // Inside the class, we create a new function called constructor. 
  // Note the lack of the word `function`. We can call this constructor
  // in the same way that we did the old type of constructor, and pass 
  // it parameters. The name `constructor` is reserved, meaning it can't
  // be used in other places
  constructor(color) {
    this.color = color;
    this.wheels = 4;
    this.driving = false;
  }

  // Any methods inside the class, other than `constructor` get added to 
  // the Cars prototype. Note the lack of the word `function`
  drive() {
    this.driving = true;
  }
}

// Again, we create a Coupe class. This coupe inherits from Car, by
// using the keyword `extends`. This allows it to inherit all of cars
// prototype methods automagically.
class Coupe extends Car {
  constructor(color) {
    // The one thing we want to do is call the Cars constructor so that we
    // can make sure it runs and creates the properties we need, before our
    // own constructor runs. In this case `super` refers to the Cars constructor.
    super(color)
    this.doors = 2;
  }

  // We can override methods from our parent. In this case we are overriding Car's
  // drive method.
  drive() {
    // But we still want to make sure any logic that is being executed in our
    // parents (superclass) drive method is still happening. So, we call the Car
    // Drive method first, before performing any of our own logic. This is optional
    // but often desired when you override a method.
    super.drive()
    console.log("Drives Really Fast!")
  }
}

// Object declaration is no different when using new ES6 Syntax then OLD ES5 Syntax
const coupe = new Coupe("Yellow");
coupe.drive();
console.log(coupe.driving);

