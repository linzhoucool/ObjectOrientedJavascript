# Scope & Closures

### 1

What will the output of the following code?

```javascript
function makeItRain() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function() { 
      console.log(i); 
    }, 1000);
  }
}

makeItRain();
```

---

### 2

What will the following code output when executed?

```javascript
let a = 12;

function logIt() {
  console.log(a);
}

logIt();
```

---

### 3

What will the following code output when executed?

```javascript
let a = 5;

functio logIt() {
  let a = 12;
  console.log(a);
}
```

---

### 4

What will the following code output when executed?

```javascript
let a = 10;

let first = function() {
  let a = 12;

  return function() {
    console.log(a);
  };
}

let second = first();
second();
```

---

### 5 

What will the following code output when executed?

```javascript
let a = 10;

let first = function() {
  let a = 12;

  return function(a) {
    console.log(a);
  };
}

let second = first();
second();
```
---

### 6

Given the following code, and the expected outputs, write the `createBase` function.

```javascript
var addSix = createBase(6);
addSix(10); // outputs 16
addSix(21); // outputs 27
```

---

### 7 

What will the following code output when executed?

1. What will the following code output when executed?

2. Write a set of steps that describes how the code below works.

```javascript
function first() {
  let name = "Johnny"

  return function() {
    console.log(name);
  }
}

function second(cb) {
  cb();
}

let callback = first();
second(callback);
```
