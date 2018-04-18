## Prototypal Inheritance

## 1

Create a `Person` object using a constructor which contains the following properties:
`firstName`, `lastName`, `age`, `gender`, `interests`

Add the following methods to the Person's prototype
`greeting`, `fullname`

The fullName method should return 
"`firstName` `lastName`"

The `greeting` method should print the following
"Hi there, my name `fullName`"

Create a instance of Person and call the greeting function

Add another method to the Person prototype
`celebrateBirthday`
It should update the persons age by 1 year.

Using the previously created person, update their age by celebrating their birthday.

## 2

Create an Employee object with the following information:
`firstName`, `lastName`, `employeeNumber`, `position`, `salary`, `hourlyWage`, `paycheck`, `hoursWorked`

Decide which of these should be methods, and which should be properties. Decide which should be on the Constructor and which should be on the Prototype.

## 3

Prove that `winnie` the dog has a prototype of dog using the `isPrototypeOf` method.

```javascript
const dog = {
  favoriteFood: 'meat',
  hasTail: true
};

function Dog() {
  this.favoriteFood = 'meat';
}

Dog.prototype = dog;
const winnie = new Dog();
```

## 4

Using the code in question 3, create a new prototype for the `Dog` object, called `dog2`. Change the favorite food to 'Kibble'. Assign this as a new prototype to the `Dog` object.

Create a new instance of the `Dog` object and check to see if it `isPrototypeOf` the `dog` prototype.
