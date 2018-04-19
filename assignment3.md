# SD 120 - Assignment #3 
## Battle Arena

You should create one `.js` file. The filename must contain your first and last name.

The `.js` file containing your solution should be uploaded to the [Assignment #3 Dropbox link](https://www.dropbox.com/request/VpxVqbkVYOpuIvnPUQVP), no later than 8:45 AM, Tuesday, April 24th, 2018

You can NOT submit more than 1 file. 

See [Assignment #3 rubric]() for the evaluation criteria.

**NO LATE ASSIGNMENTS WILL BE ACCEPTED**


Create a character for our own battle arena.

---

Choose from one of 4 classes: *Fighter*, *Cleric*, *Mage*, *Assassin*

#### Fighter

* You excel at close combat.
* You have 120 life
* **Specialty**: Your attacks each strike for a bonus percentage, up to 25%.

#### Cleric

* Healing is your specialty.
* You have 100 life
* **Specialty**: You prevent up to 25% of all incoming damage through your healing magic.

#### Mage

* You prefer long range spell casting.
* You have 80 life
* **Specialty**: Occasionally you can dodge an attack, given your long range

#### Assassin

* You are stealthy and often invisible to your enemies.
* You have 60 life
* **Specialty**: You have a 25% chance your attacks striking twice

You have 50 points to distribute the way you like on armour, power and attackSpeed. Each property cannot be assigned more than 25 points.
The properties work as follows: 

**power**: Your attacks random amount of damage, between 0-100% of your total power.
**armor**: Your armour prevents a random amount of damage, between 0-100% of your total armour.
**attackSpeed**: Determines how quickly you can attack next. By default all characters attack at random 50-100ms intervals, your attack speed lowers this interval by 0-100% of your attack speed.

## How To

### 1 

You must create a new object for your character, using a custom Constructor. Your constructor should be the name of your character, so that no 2 students should have the same constructor name. 

### 2 

Your constructor must inherit from the `Character` constructor. Here it is:

```javascript
const Character = function(power, armour, attackSpeed, name){
  this.power = power;
  this.armour = armour;
  this.attackSpeed = attackSpeed;
  this.name = name;
}
```

### 3

You must add 2 properties to your own Constructor.

The 1st property must be one of the following:
`cloakColor` (if your an Assasin)
`shieldColor` (if your a Fighter)
`staffMaterial` (if your a Cleric)
`capeColor` (if your a Mage)

The 2nd property, is `characterClass` which must have the value of `assassin`, `mage`, `fighter`, or `cleric`, based on the class you selected.

### 4

Your own character must inherit from the `Character` prototype.

### 5

You must add your own protype methods:

`attack` - a function that accepts 1 argument, the `opponent` object. Inside this method, you must call the `getDamage` method on your objects prototype. You inherit this method from the character prototype. The `getDamage` method will tell you how much potential damage you can deal your opponent on this attack. Your `attack` method must return the potential damage amount. 

It should also print out some interesting information - Which 2 characters are battling, who attacked whom and for how much potential damage?Print this out to the console.

`defend` - a function that accepts 1 argument, the `damage` amount. Inside this method, you must call the `blockDamage` method on your objects prototype. You inherit this method from the character prototype. The `blockDamage` method will determine how much of the potential damage you block with your armour, and will return the actual total damage your character will take in the battle. Your `defend` method must return this total damage amount.

It should also print out your characters name and how much damage was attempted, and how much was blocked. Print this out to the console.

`loseLife` - a function that accepts 1 argument, the `totalDamage` amount. The total damage is how much damage will actually be dealt to your character. Your `loseLife` method should decrement your current life total by this amount.

It should also print out your character name and how much life you have left. Print this out to the console.

### 6 

Finally, create your object using your constructor, distribute your 50 points as you see fit.
