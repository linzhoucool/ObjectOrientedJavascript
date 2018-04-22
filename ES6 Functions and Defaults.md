## 1

Using Array's `filter` method and the ES6 arrow function, return a new array containing only the odd numbers of the given array. Use concise body syntax.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

## 2

Repeat the same process, now this time use block body syntax.

## 3
Convert the following functions into ES6 using it's new arrow syntax

#### A
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(3, 4));
```

#### B
```javascript
let greeting = "Hello There!"

function myEs5() {
    console.log(greeting);
};
```

#### C
```javascript 
let es5name = function myEs5Name(firstName, lastName) {
  return {
    firstName: firstName,
    LastName: lastName
  };
};

es5name ("Rick","Sanchez")
```

#### D
```javascript
function CounterES5() {
  this.counter = 0;
  setTimeout(function() {
    this.counter++;
  }.bind(this), 1000); 
}

var counterA = new CounterES5();
console.log(counterA.counter);

setTimeout(function() {
  console.log(counterA.counter);
}, 1200);
```

## 4

Write a function `multiply`, that accepts 2 parameters, which both default to 1 and that satisfies the following block of code

```javascript
console.log(multiply(6, 4)) // expected output: 24

console.log(multiply(7)); // expected output: 7
```

## 5

Write a function `sayHello`, that accepts 2 parameters and that satisfies the following block of code:

```javascript
sayHello(undefined, undefined); // "Hello There!"
sayHello("Hiya", undefined);    // "Hiya There!"
sayHello(undefined, "Over Yonder");  // "Hello Over Yonder!"
```

## 6 

Write a function `myHouse`, that accepts 1 parameter and that satisfies the following block of code:

```javascript
myHouse({shutters: ["purple", "green", "blue"], color: "Yellow"}) // My house is Yellow with purple and green and blue shutters
myHouse({color: "Yellow", shutters: ["purple", "green", "blue"] }) // My house is Yellow with purple and green and blue shutters
myHouse({shutters: ["green"]}) // My house is green with green shutters
myHouse(); // My house is green with red shutters
```


