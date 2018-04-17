# `This` review

For each of the questions below, determine what is the value of `this`? 


## 1

```javascript

function testing(5) {
  this.fun = 5;
}

```

a) window

b) undefined

c) Object

d) 5


## 2

```javascript
const bear = {
  noise: "rawr",
  growl: function() {
    console.log(this.noise);
  }
}

bear.growl();
```

a) "rawr"

b) bear

c) undefined

d) window

## 3 

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

a) "rawr"

b) bear

c) undefined

d) window

## 4 

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

a) "rawr"

b) bear

c) undefined

d) window
