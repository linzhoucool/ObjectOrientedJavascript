## ES6 Syntax Practice

---
## 1

Look up the the string method `split`.

Using `split`, and array destructuring initialize the variables `firstName`, `lastName`, `totalBooks` and `bookType` using the following string declaration:

```javascript
let nameArr = "Colin Toh owns 10 detective books"
```

---

## 2

Using object desctructuring, convert this old school ES5 code so that it initializes the variables `hardCovers`, `classics`, `totalBooks` and `bookType`

```javascript
//Without Object Destructuring
var bookShelf = {totalBooks: 10, booksType: "detective", classics: 5, hardCovers: 5};

var totalBooks = bookShelf.totalBooks,
    booksType = bookShelf.booksType,
    classics = bookShelf.classics,
    hardCovers = bookShelf.hardCovers;
```

---

## 3

Given the data in this starting code

```javascript
const teamName = "tooling"
const people = [{name: "John", role: "senior"},
                {name: "David", role: "junior"},
                {name: "Joseph", role: "senior"},
                {name: "Dennis", role: "junior"}]

let message = YOUR_CODE_HERE

console.log(message)
```


use a template literal to produce the following string. 

```
There are 4 people on the tooling team.
Their names are John, David, Joseph, Dennis.
2 of them have a senior role.
```

Make sure the numbers, names, and team name actually come from the data.

---
## 4

Simplify the return value in this function by replacing instances of `concoat` with the spread syntax.

`copyReplace` replaces part of an array with elements from another array, and returns a new `array`.

```javascript
function copyReplace(array, from, to, elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to))
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))
```

---

## 5

Prevent the variable `name` from being changed by the if block.

```javascript
var name = "Colin";
 
if(true){
    var name = "Max";  
    console.log(name); 
}
 
console.log(name); 
```

---

## 6 

Without modifying either of the `console.log`, prevent the `console.log` outside the `for` loop from printing `i`

```javascript
var arr = new Array(3);
 
for (var i = 0; i<arr.length; i++) {
  console.log(i); // 0,1,2
}
 
console.log(i); // 3
```

---

## 7 

Using the spread operator, create a new alphabet array that are arranged in order

```javascript
var alphabet = ["a","d","e","h","i"],
    firstSet = ["b","c"],
    secondSet = ["f","g"];

console.log("Without Spread Operator: ",alphabet); //[a,b,c,d,e,f,g,h,i]

```

---

## 8 

Write a function that takes in an undefined amount of parameters, loops through each of them using a `for...of` loop and prints out each of the parameters to the console.

Use your function to print the following 

Write that uses a `...rest` parameter, a `for...of` loop and `template literals`

It should produce the following output:

```javascript
"I love broccoli!"
"I love pizza!"
"I love ham!"
"I love noodles!" 
"I love rice!"
```
--- 
## 9 

Update the following code to ES6 taking every opportunity to use `spread`, `rest`, `destructuring`, `template literals`, `object literal shorthand` and `for-of` loops.

```javascript
var numbersToSum = [1, 1, 2, 3, 5, 8, 13]

var firstNumber = numbersToSum[0]
var thirdNumber = numbersToSum[2]
var theRest = numbersToSum.splice(2, 5)

// Sums the numbers provided and sqaures them
// Accepts up to 5 numbers, but probably could accept more or less
function squaredSum(first, second, third, fourth, fifth) { 
  var sum = 0; 

  if(first != undefined)
    sum += first;
  if(second != undefined)
    sum += second;
  if(third != undefined)
    sum += third;
  if(fourth != undefined)
    sum += fourth;
  if(fifth != undefined)
    sum += fifth;

  return sum * sum; 

}

for(var x = 0; x < theRest.length; x++){
  var preString = "The value square of the sum of the numbers is:"
  console.log(preString + squaredSum(firstNumber, thirdNumber, theRest[x])) 
}

```

