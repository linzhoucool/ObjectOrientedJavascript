
## 1

Create an Bird class with the following properties: `legs`, `wings`, `flying`, `flies` and a method `fly()`. The method `fly()` should set `flying` to `true`. By default, `flying` should be `false`. Set `legs`, and `wings` to default to 2, and `flies` to true. The only problem is, some birds can't fly.

Create a subclass of `Bird` called `Chicken` that inherits from `Bird`, but which has it's own properties: `color`, `name`, `species` and an overrides the property of `flies` and the method `fly()`. The default of `flies` is now `false`, and when you try to ask a chicken to fly, it just flaps it's wings and clucks.

Create a new instance of a `Bird` and a new instance of the chicken. Make them both `fly()`

## 2

Create a `Vehicle` class. It should contain the following properties: `steeringWheel` and `engine`, `cost`, `wheels`. `engine` and `cost` and `wheels` should be accepted as parameters, while `steeringWheel` is set to `true`. Using this class, create two sub-classes - the first is `Motorcycle`, which has an additional property of `brand`. The motorcycle inherits from `Vehicle` and defaults `wheels` to 2. It also accepts as parameters an `engine` size and a `cost`. These should be passed to `Vehicle` from the `Motorcyle` constructor.

Create another sub-class called `Car`. `Car` should have a it's `wheels` set to 4, and a should have a 'large' engine. It should also have the properties `brand` and a `passengers`. These properties should be defined by arguments passed into the constructors upon instantiation.

Using these constructors, create 2 new Motorcycles, 2 new Cars and 1 new Vehicle.
