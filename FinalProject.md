# SD-120 Final Project: Classic Arcade Game Clone

1. When your character wins, you must alert "You Win!".
2. You should create levels, where each level your enemies move faster. The current level should be displayed at the top of the screen.
3. When you reach the water, you pass the level. If you collide with an enemy you start back at level one.
4. You should track, maintain and display the highest level obtained.

## TIPS:

### HTML5 Canvas Position
The position of the elements (both Enemies and Players) are determined by X and Y coordinates. Play around with these coordinates to determine where your Enemies should start.

### Determining the Enemy and Player positions
Looking at the `Enemy.prototype.render` function, what can we determine about positioning our each of our Enemy Objects? You can see it will use our defined x and y coordinates, and the image to properly position our player and enemies.

### Moving the Characters
Games are built with frames. Many small movements of a over the course of many frames makes it seem like objects
are moving. We need to determine the how big this movement is, from the left to right of the canvas. Think of this as the speed of your enemy and player. 

Every few hundred millisecods the Udacity `engine.js` file will update call the `update` method that we write. 
