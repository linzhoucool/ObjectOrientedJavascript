# SD-120 Assignment #2

### Javascript Functions

You should create one `.js` for each each of the questions below. Clearly identify which file answers which question by specifying question in the filename.

The solution should be submitted as `.zip` file that includes only your `.js` files. 

The `.zip` file should contain your first and last name.

A `.zip` file containing all your solution files should be uploaded to the [Assignment #2 Dropbox link](https://www.dropbox.com/request/xm0ZCaVGBcR7rbPQtG0k), no later than 8:45 AM, Tuesday, April 16th, 2018

You can NOT submit more than 1 file. 

See [Assignment #2 rubric](https://github.com/jniziol/ObjectOrientedJavascript/blob/master/SD120%20Assignment%20%231%20-%20Rubric.pdf) for the evaluation criteria.

**NO LATE ASSIGNMENTS WILL BE ACCEPTED**

---

## 1

Update the code below so that the function `printsThings` accepts a callback as a parameter. Your code should invoke `printThings` and pass the function `myName` as an argument. `printsThings` should execute the callback function and print the your name, out to the console. 

```javascript
// update me - start
function printsThings(){
}
// update me - end

function myName(name){
  returns name
}

//invoke printThings in this area here.
```

---

## 2

Write a function called `printAndCount`, that returns an anonymous function. The returned function should print "Hello World X" (where `X` is the value of count) to the console and create a closure around a `count` variable which is defined in your `printAndCount` function. The returned, anonymous, function should be stored in a variable. You should invoke this returned function several times, each time you invoke it, the it should print out "Hello World X" and the count should be increased by one.

---

## 3

Write an immediately invoked function expression that returns a function that prints "Hello World". This IIFE should be used in a setTime out which waits 2 seconds before it executes.

```javascript
setTimeout(
  //put your IFFE here
  , 2000 )
```

---

## 4 

Given the following code, and the expected outputs, write the `FullName` function. 

```javascript
var lastName = fullName("Abe");
lastName("Lincoln"); // John Lincoln
lastName("Simpson"); // John Simpson
```
