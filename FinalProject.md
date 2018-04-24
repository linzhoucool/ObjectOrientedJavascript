### SD-120 

# Final Project: Classic Arcade Game Clone

Download the [Final Project Zip](https://github.com/udacity/frontend-nanodegree-arcade-game/archive/master.zip) file from Udacity.

The starter project has a single HTML file, coupled with CSS, JS and Images directory. The files we most interested in updating are the   `style.css`, `index.html`, and `app.js`, depending on what changes we are would like to make. You may also consider update `engine.js` if you are interested in changing your assets. Be careful though, making a mistake in `engine.js` can cause your entire to stop working.


## Project Requirements

### Player Movements
1. The Player can not move off screen
2. The Player should only be able to move 1 'block' at a time.

### Enemy Movements
1. The enemy should reset to their starting point upon disappearing off the canvas.
2. Enemies should move at an appropriate speed, not too fast and not too slow.

### Collision
1. Enemy-player collisions happen logically (not too early or too late).
2. Enemy-player collision resets the game.
3. Collisions occur when an enemy sprite and player sprite share the same x and y coordinates.

### Levels
1. You should create levels. Players start at level 1, and each time your player successfully crosses to the water, the level increases. With each level increase, the speed at which the enemies move should increase. The current level should always be displayed at the top of the page.
2. If a player collides with an enemy, they revert back to level 1.
3. You should track, maintain and display the highest level obtained in a single session.

## Submission

* The solution should be submitted as `.zip` file that includes the `HTML`, `JS` and `CSS` files. 
* The `.zip` file should contain your first and last name.
* Your `.zip` file should be uploaded to the Final Project Dropbox link, which will be provided via the course website, no later than 8:45 AM, Tuesday, May 1st, 2018
* You can NOT submit more than 1 file. 
* See [Final Project rubric](https://github.com/jniziol/JavascriptBasics/raw/master/Final%20Project%20Rubric.pdf) for more evaluation criteria.* 
**NO LATE ASSIGNMENTS WILL BE ACCEPTED**

## TIPS:

### HTML5 Canvas Position
The position of the elements (both Enemies and Players) are determined by X and Y coordinates. Play around with these coordinates to determine where your Enemies should start.

### Determining the Enemy and Player positions
Looking at the `Enemy.prototype.render` function, what can we determine about positioning our each of our Enemy Objects? You can see it will use our defined x and y coordinates, and the image to properly position our player and enemies.

### Moving the Characters
Games are built with frames. Many small movements of a over the course of many frames makes it seem like objects
are moving. We need to determine the how big (or small) this movement must be, from the left to right of the canvas. Think of this as the speed of your enemy and player. Every few hundred millisecods the Udacity `engine.js` file will call the `update` method that we write, so determining movement and collisions should happen inside this method.
