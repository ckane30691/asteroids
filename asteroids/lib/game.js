const MovingObject = require("./moving_object.js");

const Game = function(xDim, yDim){
  this.xDim = xDim;
  this.yDim = yDim;
};

const mo = new MovingObject(
  { pos: [10, 10], vel: [10, 20], radius: 25, color: "#00FF00"}
);

Game.prototype.render = function (ctx) {
  ctx.clearRect(0, 0, this.xDim, this.yDim);
  mo.draw(ctx);
};

Game.prototype.moveObject = function moveObject() {
  mo.move();
};

Game.prototype.start = function(canvasEl) {
  const ctx = canvasEl.getContext("2d");
  const animateCallback = () => {
    this.moveObject();
    this.render(ctx);
    requestAnimationFrame(animateCallback);
  };
  animateCallback();
};

module.exports = Game;
