## Higher Order Functions Part 2

---
### 1
1. What does the code below print out when executed?

2. Write a set of steps that describes how the code below works.

```javascript
function doTo5(anything) {
  return anything(5)
}

function appendToHello(s) {
  return `Hello, ${s}!`
}

console.log(doTo5(appendToHello));
```

---
### 2

Update the code below so that the function `first` calls function `second` after it has completed printing `1` to the the console. Do this by making `second` a callback in `first`. 

```javascript
// update me - start
function first(){
  console.log(1);
}
// update me - end

function second(){
  console.log(2);
}

first(second);
```

---

### 3

Convert the function `alertFinished` to an anonymous function and pass it directly into the `doHomework` function as a callback. **DO NOT** assign `alertFinished` to a variable, and **DO NOT** give it a name.


```javascript
function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

function alertFinished(){
  console.log('Finished my homework');
}

doHomework('math', alertFinished); // You will need to change me
```

---

### 4

Write a function that returns a function that prints "Hello World" to the console. Return that function as the return value of the `returnsFunctions` function.

```javascript
function returnsFunctions() {
  // Return a function here
}
```

---

### 5

Using your answer from question 4, invoke `returnsFunctions` and store the returned function in a variable. Invoke the returned function afterwards.

```javascript
function returnsFunctions() {
  // Return a function here
}

// invoke returnsFunctions here, and store the answer in a variable
// invoke the function stored in that variable
```

---

### 6

Write a function, `numberFilter`, that takes an array of numbers as an argument and returns a
filtered array containing the same elements but with the `numbers` removed. Use Array's `filter` method

Below is a list of numbers that should be removed:
```javascript
numbers = [1, 2, 3, 5, 7, 11, 13, 17, 19]
```
For example, if this array were passed as an argument:
```javascript
[1, 21, 5, 6, 4, 78, 1, 18, 13]
```

Your function would return the following array:
```javascript
[21, 6, 4, 78, 18]
```

---

### 7

Iterate over the following array with arrays `forEach` method.

```javascript
[1, 2, 3, 5, 7, 11, 13, 17, 19]
```

For each iteration, print out the element multiplied by it's array index location.

Your output should look like the following

```javascript
0
2
6
15
28
55
78
119
152
```

