# Object Constructors

Convert the Javascript below to use a constructor. Call the constructor `Car`. Re-create each of the cars by passing in parameters to the constructor to properly customize each of the properties. Move the `changeColor` to the objects by including as a method in the constructor.

```javascript
const corolla = {
    color: "blue",
    brand: "Toyota",
    price: 10000,
    drive: function(){
        console.log(`"The ${this.color} car goes VROOOOoooom"`);
    },
};

const accord = {
    color: "red",
    brand: "Honda",
    price: 11000,
    drive: function(){
        console.log(`"The ${this.color} car goes VROOOOoooom"`);
    },
};

const sonata = new Object();
sonata["color"] = "black";
sonata["brand"] = "Hyundai";
sonata["price"] = 81000;
sonata["drive"] = function(){
  console.log(`"The ${this.color} car goes VROOOOoooom"`);
};

const sentra = new Object();
sentra["color"] = "white";
sentra["brand"] = "Nissan";
sentra["price"] = 11000;
sentra["drive"] = function(){
  console.log(`"The ${this.color} car goes VROOOOoooom"`);
};


function changeColor(newColor, car){
    car['color'] = newColor;
};

changeColor("green", corolla);
changeColor("black", accord);
changeColor("violet", sonata);
changeColor("orange", sentra);

const cars=[corolla, accord, sonata, sentra];

for(let car of cars) {
  car.drive();
}
```
