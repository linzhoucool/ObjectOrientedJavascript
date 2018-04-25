# Proxies and Promises

## 1

Write a proxy for this CEO object that will only allow access to the `previousPosition` property, but returns `undefined` for everything else.

```javascript
class CEO {
    constructor() {
        this.salary = 450000
        this.middleName = "Rizzle"
        this.age = 82
        this.previousPosition = "Administrative Assistant"
    }
}
```

## 2

Write a proxy called `arrayProxy` for the `numbers` array that will add 5 to each element when their accessed.

```javascript
const numbers = [1,2,3,4,5]

const proxy = new Proxy(numbers, arrayProxy)
  
console.log(proxy[0])
console.log(proxy[1])
console.log(proxy[2])
console.log(proxy[3])
```

