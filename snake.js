const canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext("2d");
const scale = 10;
const rows = gamecanvas.height / scale;
const coloumn = gamecanvas.width / scale;

food();
setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  update();
  drawFood();
  
  snakeDirection();
  foodEat();
  gameOverSide();
 
}, 100);

this.x = 0;
this.y = 0;
this.speedx = 1 * scale;
this.speedy = 0;
this.total = [];
  
function update() {
  
  this.x += this.speedx;
  this.y += this.speedy;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(this.x, this.y, scale, scale);
}

document.addEventListener("keydown", function (event) {
  snakeDirection(event.code);
});
let currentDirStore = "getstarted";
function snakeDirection(direction) {
  
  if (direction === "ArrowRight" && currentDirStore !== "ArrowLeft") {
    this.speedx = 1 * scale;
    this.speedy = 0;
    currentDirStore=direction;
  } else if (direction === "ArrowLeft" && currentDirStore !== "ArrowRight") {
    this.speedx = -1 * scale;
    this.speedy = 0;
    currentDirStore=direction;
  } else if (direction === "ArrowUp" && currentDirStore !== "ArrowDown") {
    this.speedx = 0;
    this.speedy = -1 * scale;
    currentDirStore=direction;
  } else if (direction === "ArrowDown" && currentDirStore !== "ArrowUp") {
    this.speedx = 0;
    this.speedy = 1 * scale;
    currentDirStore=direction;
  }
}
function food(){
  this.foodx=Math.floor(Math.random()*coloumn-1)*scale;
  this.foody=Math.floor(Math.random()*rows-1)*scale;
  
}
function drawFood(){
  ctx.fillStyle="#c40c1e";
  ctx.fillRect(this.foodx,this.foody,scale,scale);
}
function foodEat(){
  if(this.x==this.foodx&&this.y==this.foody){
    food();
  }
}
function gameOverSide(){
  if(this.x>canvas.width||this.x<0||this.y>canvas.height||this.y<0){
    this.x=0;
    this.y=0
    
    window.alert("hey gameover!");
    
    return;
  }
}
