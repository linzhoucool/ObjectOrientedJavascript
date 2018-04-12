## 1

Given an input `n`, write a function `always` that returns a function which returns `n`.

```javascript
var three = always(3);
three(); // returns 3
```

---

## 2 

You are given an array of objects representing data about developers who have signed up to attend a coding meetup.

Your task is to return the number of JavaScript developers coming from Europe.

Given the following list:

```javascript
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
```

Your function should return number `1`.

If, there are no JavaScript developers from Europe then your function should return 0.

The format of the strings will always be Europe and JavaScript.

---

## 3

What we want to implement out own array filter function called `myFilter`, like Array.filter()

The usage is quite simple, like:

```javascript
myFilter([1,2,3,4], function(num){ return num > 3})
```

Let me get your started:

```javascript
function myFilter(array, func) {
  //your code here
}

console.log(myFilter([1,2,3,4],(function(num){ return num > 3}))) // should return [4]

```

What is Array.prototype? Don't worry for now, we'll learn about that soon!

---

## 4 

Write a function called `delay` that will accept a callback function as a parameter. It will invoke the callback after a 5 second delay.

Test it out.

## 5

What is the length of the `sum` function? How about the `add` function?

```javascript
function sum(...numbers) {
  return numbers.reduce(add, 0);
}

function add(a, b) {
  return a + b;
}

sum(4, 6, 7, 8, 32, 45);
```

--- 

## 6
You are given an array of objects representing info about developers who have signed up to attend a coding meetup. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

`'< firstName here >, < country here >'` of the first Python developer who has signed up; or
`'There will be no Python developers'` if no Python developer has signed up.

For example, given the following input array:

```javascript
var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
```
In this instance your function should return Victoria, Puerto Rico.

---

## 7

Write a function expression that creates a `dog` object and returns it to the caller. The `dog` object should have a method called `bark` which print `'Woof'`.

Invoke your method to create the dog, store it in a variable and finally invoke the dogs `woof` method.


