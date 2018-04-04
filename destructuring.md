# Destructuring and Object Literal Shorthand

1. Change the following code to use array destructuring.

```javascript
const superheroes = ["Superman", "He-Man", "Spiderman"];

const superman = superheroes[0];
const heMan = superheroes[1];
const spiderman = superheroes[2];
```

2. To destructure an array, should the brackets `[]` go on the left or right side of the `=` sign?

3. What would happen if there was more items in the array, then there are variables that we want to destructure into?\

4. When destructuring an object, what happens if we have a variable that doesn't exist as a  property in the object? For example, what will the value of `spin`?

```javascript
const washingMachine = {
  rinse: true,
  dry: "not now"
}

let {rinse, spin, dry} = washingMachine;
```

5. What do you expect to be printed when the following code is executed?

```javascript
let someVar = "stringsssss"

const object = {
  someVar: "variablesss"
}
```

6. Write 1 of your own destructuring question to try to stump your classmates.

7. Write 1 of your own object literal shorthand questions to try to stump your classmates.
