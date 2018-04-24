// Question 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = numbers.filter(number => number % 2);
console.log(oddNumbers);

// Question 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = numbers.filter(number => {
  return number % 2;
});

console.log(oddNumbers);

// Question 3a.
// method A
const add = (a, b) => a + b;

console.log(add(3, 4));

// method B
const add = (a, b) => (a + b);

console.log(add(3, 4));

// method C
const add = (a, b) => {return a + b};

console.log(add(3, 4));

// Question 3b.
let greeting = "Hello There!"

const myEs5 = () =>  { console.log(greeting) }

myEs5();

// Question 3c.

let es5name = (firstName, lastName) => ({firstName: firstName, lastName: lastName})

console.log(es5name ("Rick","Sanchez"));

// Question 3d.

function CounterES5() {
  this.counter = 0;
  setTimeout(() => this.counter++, 1000)
}

var counterA = new CounterES5();
console.log(counterA.counter);

setTimeout(() => console.log(counterA.counter), 1200);

// Question 4
const multiply = (a = 1, b = 1) => a * b

console.log(multiply(6, 4)) // expected output: 24

console.log(multiply(7)); // expected output: 7

// Question 5

const sayHello = (a = "Hello", b = "There!") => {
  console.log(a, b)
}

sayHello(undefined, undefined); // "Hello There!"
sayHello("Hiya", undefined);    // "Hiya There!"
sayHello(undefined, "Over Yonder");  // "Hello Over Yonder!"

// Question 6

const myHouse = ({color = "green", shutters = ["red"]} = {}) => {
  console.log(`My House is ${color} with ${shutters.join(" and ")} shutters`)
}

myHouse({shutters: ["purple", "green", "blue"], color: "Yellow"}) // My house is Yellow with purple and green and blue shutters
myHouse({color: "Yellow", shutters: ["purple", "green", "blue"] }) // My house is Yellow with purple and green and blue shutters
myHouse({shutters: ["green"]}) // My house is green with green shutters
myHouse(); // My house is green with red shutters