# SD-120 Assignment #4

### ES6 Functions, Classes, Built-ins

You should create one `.js` for each each of the questions below. Clearly identify which file answers which question by specifying question in the filename.

The solution should be submitted as `.zip` file that includes only your `.js` files. 

The `.zip` file should contain your first and last name.

A `.zip` file containing all your solution files should be uploaded to the [Assignment #2 Dropbox link](https://www.dropbox.com/request/xm0ZCaVGBcR7rbPQtG0k), no later than 8:45 AM, Tuesday, April 17th, 2018

You can NOT submit more than 1 file. 

See [Assignment #3 rubric](https://github.com/jniziol/ObjectOrientedJavascript/blob/master/SD120%20Assignment%20%232%20-%20Rubric.pdf) for the evaluation criteria.

**NO LATE ASSIGNMENTS WILL BE ACCEPTED**


## 1
Change the following to ES6. Use `arrow` functions, the updated `class` keywords, `let` and `const` and `extends`.

```javascript
var CEO = function(firstName, lastName) {
    this.salary = 450000
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = "Smith"
    this.age = 82
    this.previousPosition = "Administrative Assistant" 
    this.currentBankAccount = 100
}

ceoPrototype = {
    makeMoney: function someFunction() {
        this.currentBankAccount += 500;
    },
    addMoney: function(money) {
        this.currentBankAccount += money;
    },
    howRichAmI: function() {
        console.log("I'm very rich.")
        return this.currentBankAccount;
    }
}

CEO.prototype = ceoPrototype

CEO.prototype.work = function(hours) {
    if(hours > 10)
        console.log("The CEO worked " + hours + " hours")
    else
        console.log("The CEO refused to work.")    
}

function CEODaughter(firstName, lastName, nickName) {
    CEO.call(this, firstName, lastName)
    this.nickName = nickName
}

CEODaughter.prototype = Object.create(CEO.prototype)
CEODaughter.prototype.constructor = CEODaughter

CEODaughter.prototype.spendMoney = function(howMuch) {
    console.log(this.firstName + " is spending the money.")
}

CEODaughter.prototype.work = function() {
    console.log(this.firstName + " tells her dad to work");
    CEO.prototype.work.call(this, 30)
}


var daughter = new CEODaughter("Missy", "McDonald")
daughter.work();
```

## 2 
Write a method `lookupPrice` which returns a promise and will run the success function, printing `"The price is $5.00"` for any item with an even item ID, and will run the failure function for any item that has an odd itemID.

```javascript
lookupPrice(123).then((price) => {
    console.log(`The price is ${price}`);   
}, () => {
    console.log(`Sorry we were unable to find that item`);   
}) // This prints 'Sorry we were unable to find that item'
```

