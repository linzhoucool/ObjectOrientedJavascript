# SD-120 Assignment #1

## ES6 Syntax, Object Basics, and `this`

You should create one `.js` for each each of the questions below. Clearly identify which file answers which question by specifying question in the filename.

The solution should be submitted as `.zip` file that includes only your `.js` files. 

The `.zip` file should contain your first and last name.

A `.zip` file containing all your solution files should be uploaded to the [Assignment #1 Dropbox link](https://www.dropbox.com/request/i8n7MmazvZGG1wwAfPAK), no later than 8:45 AM, Wednesday, March April 11th, 2018

You can NOT submit more than 1 file. 

See Assignment #1 rubric from evaluation criteria

**NO LATE ASSIGNMENTS WILL BE ACCEPTED**

---

## 1

Write a function called `determineLargest` that will accept in any amount of Numbers.
Using a `for..of` loop, iterate through all the numbers and determine which is the largest.

Be sure you declare your variables in a way that they are only available in the scope where they are required.

Using a template string, print out the following:

```
Of all the numbers X, Y, Z...The largest is: Y" 
```

Where X, Y and Z are all the numbers passed into the function

Demonstrate your function works by calling it with at least 5 parameters.

---
## 2

Create a 4 car objects that have the following properties: `color`, `brand`, and `price`. The object should also have a method `drive`, when used, will print out the following:

```
"The 'car color' car goes VROOOOoooom"

```

Where `car color` is the spefic color of the car object on which the method was invoked.

### Additional Requirements
1. 2 of the car objects must be created using object literal syntax
2. 2 of the car objects must be created using the object constructor
3. Write a global method that will take in 1 color string and 1 car object and will update the color of the provided car object to the color provided in the string. This function is not allowed to have a return value.
4. Use the method you just wrote 4 times to update the color of a car object(s) 4 times.
5. Use a `for..of` loop to call the `drive` method of each car object

---

## 3

Create an object called `person` with the following properties: `hairColor`, `eyeColor`, `height`
`name`

You must define method `walk` on your object. When called, the `walk` method will use the 'this' keyword to add a new property on the object called `speed` and set it `15km` and a new property called `walking` and set it to `true`

## 4

Using the code below, use the `this` keyword to print out both the useMe variable that is declared outside of the function `aRandomFunction` and the one declared on the inside of the function

```javascript
var useMe = 15;

function aRandomFunction(){
  var useMe = 10;
  console.log(useMe)
  // Add another console.log here that prints out the useMe variable declared
  // outside this function, so the output should be 15  

}
```

---

## 5

Declare a new function that is within the function scope `addToWindow`. This new function you write should have the name `printMe` that prints out the followinginside  function that prints out 

```javascript
function addToWindowAndPrint(stringToPrint) {
  // Your Code
  // Here
  console.log(`AddToWindow ${stringToPrint}`)
} 

// Move me inside of the function above
function printMe(stringToPrint) {
  console.log(`printMe ${stringToPrint}`)
}

// Invoke addToWindowAndPrint and have it print "AddToWindowAndPrint is Great!"
// Invoke printMe and have it print "printMe is Event Better!"
```
