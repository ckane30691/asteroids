document.addEventListener("DOMContentLoaded", function(){

const Game = require('./game.js');

const canvasEl = document.getElementById("myCanvas");
canvasEl.height = 800;
canvasEl.width = 800;
new Game(
  canvasEl.width,
  canvasEl.height
).start(canvasEl);
});
