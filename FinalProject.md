### SD-120 

# Final Project: Classic Arcade Game Clone

Download the [Final Project Zip] (https://github.com/udacity/frontend-nanodegree-arcade-game/archive/master.zip) file from Udacity.

The starter project has a single HTML file, coupled with CSS, JS and Images directory. The files we most interested in updating are the   `style.css`, `index.html`, and `app.js`, depending on what changes we are would like to make. You may also consider update `engine.js` if you are interested in changing your assets. Be careful though, making a mistake in `engine.js` can cause your entire to stop working.


## Project Requirements

### Player Movements

Player can not move off screen
Vehicles cross the screen
Vehicle-player collisions happen logically (not too early or too late)
Vehicle-player collision resets the game
Something happens when player wins

### Enemy Movements

### Levels
1. You should create levels. Players start at level 1, and each time your player successfully crosses to the water, the level increases. With each level increase, the speed at which the enemies move should increase. The current level should always be displayed at the top of the page.
2. If a player collides with an enemy, they revert back to level 1.
3. You should track, maintain and display the highest level obtained in a single session.



## TIPS:

### HTML5 Canvas Position
The position of the elements (both Enemies and Players) are determined by X and Y coordinates. Play around with these coordinates to determine where your Enemies should start.

### Determining the Enemy and Player positions
Looking at the `Enemy.prototype.render` function, what can we determine about positioning our each of our Enemy Objects? You can see it will use our defined x and y coordinates, and the image to properly position our player and enemies.

### Moving the Characters
Games are built with frames. Many small movements of a over the course of many frames makes it seem like objects
are moving. We need to determine the how big this movement is, from the left to right of the canvas. Think of this as the speed of your enemy and player. 

Every few hundred millisecods the Udacity `engine.js` file will update call the `update` method that we write. 
