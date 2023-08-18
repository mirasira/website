let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



window.addEventListener("resize",
  function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    height = window.innerHeight;
    width = window.innerWidth;
    //init();
  }

);

height = window.innerHeight;
width = window.innerWidth;

let horizontSize = 1000;
let NumberOfElemnts = 2;
let speed = 20;
let recsize = 20;
let dissapearDepth = 0;
let furthest = 1000;

function rectangl(x, y, z, xsize, ysize, color){
  this.x = x;
  this.y = y;
  this.z = z;
  this.xsize = xsize;
  this.ysize = ysize;
  this.focalLength = 300;
  this.acc = 0;
  this.color = color;

  this.draw = function(){
    ctx.fillStyle = this.color;
    let perspective = this.focalLength/(this.z+this.focalLength);
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(perspective, perspective);
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.xsize*perspective, this.ysize*perspective);
    ctx.restore();
    //this.acc -= 0.1;
    //this.z += -speed;
    if(this.z < dissapearDepth){
      this.z = furthest;
      this.x = Math.random()*horizontSize-horizontSize/2;
      this.y = Math.random()*horizontSize-horizontSize/2;
    }
  }
};





let l = new rectangl(width/2, height/2, 500, 200, 200, "green");




var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


window.addEventListener("keydown", function(event){
  switch(event.keyCode){
    case 87: //W
      l.z += 5;
      ctx.clearRect(0, 0, width, height);
      l.draw();
      break;
    case 83: //S
      l.z -= 5;
      ctx.clearRect(0, 0, width, height);
      l.draw();
      break;
    case 65: //A
      l.x -= 5;
      ctx.clearRect(0, 0, width, height);
      l.draw();
      break;
    case 68: //D
      l.x += 5;
      ctx.clearRect(0, 0, width, height);
      l.draw();
      break;
  }


  }
);
	

//ctx.translate(width/2, height/2);

l.draw();


function animate(){
  ctx.clearRect(-width/2, -height/2, width, height);
  requestAnimationFrame(animate);
  for(let i = 0; i < NumberOfElemnts; i++){
    array[i].draw();
  }
  array.sort(function(a, b){return b.z-a.z});
}
//animate();

