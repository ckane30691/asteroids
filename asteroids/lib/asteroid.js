const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");


const Asteroid = function Asteroid(pos) {
  this.COLOR = '#ff0000';
  this.RADIUS = 10;
  MovingObject.call(this, pos);
};
