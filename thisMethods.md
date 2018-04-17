# `This` Methods

Using  the `bind` and `call` methods, solve the following questions:

## 1

Using the `call()` function, set the `this` keyword inside the `makeMeLaugh` function to the `clown` object, and so that "Hahaha" is printed.

```javascript
clown = {
  fun: "Hahaha"
}

function makeMeLaugh() {
  console.log(this.fun);
}

makeMeLaugh();
```

## 2

Using the `call()` function, set the `this` keyword inside the `makeMeLaugh` function to the `clown` object, and so that "Hohoho Hahaha HeeHeeHee" is printed.
 

```javascript
clown = {
  fun: "Hahaha"
}

function makeMeLaugh(preLaugh, postLaugh) {
  console.log(this.fun);
}

makeMeLaugh();
```

## 3 

Using the `bind()` function, set the `this` keyword inside the `growl` function to the `bear` object, and so that "rawr" is printed.

```javascript
const bear = {
  noise: "rawr",
  growl: function() {
    console.log(this.noise);
  }
}

const placeholder = bear.growl;
placeholder();
```

## 4 

Using the `bind()` function, set the `this` keyword inside the `growl` function to the `bear` object, and so that "rawr" is printed.

```javascript
const bear = {
  noise: "rawr",
  growl: function() {
    console.log(this.noise);
  }
}

function callMeBack(callback) {
  callback();
}

const placeholder = bear.growl;
callMeBack(placeholder);
```
