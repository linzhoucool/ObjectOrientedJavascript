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

