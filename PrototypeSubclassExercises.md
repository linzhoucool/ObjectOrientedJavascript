# Prototype Subclasses Exercises

## 1

1. Create the constructor function for a `Video` object. The function should take in arguments of `title` (a string), `uploader` (a string, the person who uploaded it), and `seconds` (a number, the duration), and it should save them as properties of the object.
2. Create a method on the Video prototype object called play(). When that method is called, it should use console.log to output a string like "You played the video!"
3. Create a method on the Video prototype object called watch(). When that method is called, it should use console.log to output a string like "You watched every cat video on the internet!"
4. Create a new constructor called `MusicVideo` that inherits from the `Video` constructor. This constructor should also take in an `artist` argument.
5. Your `MusicVideo` prototype should inherit from the `Video` prototype.
6. Add a method to the `MusicVideo` prototype called watch() that uses console.log to output a string like "You were Rick Rolled, again!".
7. Create an instance of `Video` and call the `play` and `watch` methods
8. Create an instance of `MusicVideo` and call the `play` and `watch` methods

## 2

1. Create a new `Triangle` constructor and prototype. The prototype should have the `area` and `perimeter` method. The constructor should accept 3 parameters: each of the sides
2. Create another new `RightTriangle` constructor and protype that both inherit from `Triangle`. This `RightTriangle` object should have a method on it to calculate the hypoteuse.
3. Create a new `RightTriangle` object and provide it 2 sides. Calculate the hypotenuse and use it to set the 3rd side. Calculate the perimeter.
