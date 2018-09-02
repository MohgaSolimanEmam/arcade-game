// Enemies our player must avoid
'use strict';
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed+100;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed * dt);
    if (this.x > 505) {
        this.x = - 5;
        this.speed = Math.floor(Math.random() * 512);
    }
    if (player.x < this.x + 25 &&
        player.x > this.x - 25 &&
        player.y > this.y - 25 &&
        player.y < this.y + 25) {
        player.x = 200;
        player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var player = function (x, y, speed) {
    this.x = 200;
    this.y = 400;
    this.speed = speed;
    this.sprite = 'images/char-horn-girl.png';
};
player.prototype.update = function () {
    if (this.x > 400) this.x = 400;
    if (this.x < 0) this.x = 0;
    if (this.y > 400) this.y = 400;
    if (this.y < 0) { this.x = 200; this.y = 400; }
};
player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
player.prototype.handleInput = function (keyboard) {
    if (keyboard === 'left') this.x = this.x - 100;
    if (keyboard === 'right') this.x = this.x + 100;
    if (keyboard === 'up') this.y = this.y - 90;
    if (keyboard === 'down') this.y = this.y + 90;
    this.keyboard=null;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
(function show() {
    allEnemies.push(new Enemy(0, 50, 1000));
    allEnemies.push(new Enemy(0, 150,1000));
    allEnemies.push(new Enemy(0, 230,1000));
    
})();

var player = new player(200,400,500);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
