let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize",
  function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    height = window.innerHeight;
    width = window.innerWidth;
    init();
  }

);

height = window.innerHeight;
width = window.innerWidth;

function cube(middle, lenght){
  this.middle = middle;
  this.lenght = lenght;
  this.points = [[middle[0]-lenght/2, middle[1]+lenght/2, middle[2]-lenght/2], //A
            [middle[0]+lenght/2, middle[1]+lenght/2, middle[2]-lenght/2], //B
            [middle[0]+lenght/2, middle[1]-lenght/2, middle[2]+lenght/2], //C
            [middle[0]-lenght/2, middle[1]-lenght/2, middle[2]-lenght/2], //D
            [middle[0]-lenght/2, middle[1]+lenght/2, middle[2]+lenght/2], //E
            [middle[0]+lenght/2, middle[1]+lenght/2, middle[2]+lenght/2], //F
            [middle[0]+lenght/2, middle[1]-lenght/2, middle[2]-lenght/2], //G
            [middle[0]-lenght/2, middle[1]-lenght/2, middle[2]+lenght/2]] //H

  this.draw = function(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(this.points[0][0], this.points[0][1]);
    ctx.lineTo(this.points[1][0], this.points[1][1]);
    ctx.lineTo(this.points[5][0], this.points[5][1]);
    ctx.moveTo(this.points[1][0], this.points[1][1]);
    ctx.lineTo(this.points[2][0], this.points[2][1]);
    ctx.lineTo(this.points[6][0], this.points[6][1]);
    ctx.moveTo(this.points[2][0], this.points[2][1]);
    ctx.lineTo(this.points[3][0], this.points[3][1]);
    ctx.lineTo(this.points[7][0], this.points[7][1]);
    ctx.moveTo(this.points[3][0], this.points[3][1]);
    ctx.lineTo(this.points[0][0], this.points[0][1]);
    ctx.lineTo(this.points[4][0], this.points[4][1]);
    ctx.lineTo(this.points[5][0], this.points[5][1]);
    ctx.lineTo(this.points[6][0], this.points[6][1]);
    ctx.lineTo(this.points[7][0], this.points[7][1]);
    ctx.lineTo(this.points[4][0], this.points[4][1]);
    ctx.stroke();
    
  }
  this.update = function(){
    let newx = (this.A[0]-this.middle[0])*Math.cos(this.theta)-(this.A[1]-this.middle[1])*Math.sin(this.theta);
    let newy = (this.A[0]-this.middle[0])*Math.sin(this.theta)+(this.A[1]-this.middle[1])*Math.cos(this.theta);
    this.A[0] = newx+this.middle[0];
    this.A[1] = newy+this.middle[1];
    newx = (this.B[0]-this.middle[0])*Math.cos(this.theta)-(this.B[1]-this.middle[1])*Math.sin(this.theta);
    newy = (this.B[0]-this.middle[0])*Math.sin(this.theta)+(this.B[1]-this.middle[1])*Math.cos(this.theta);
    this.B[0] = newx+this.middle[0];
    this.B[1] = newy+this.middle[1];
    newx = (this.C[0]-this.middle[0])*Math.cos(this.theta)-(this.C[1]-this.middle[1])*Math.sin(this.theta);
    newy = (this.C[0]-this.middle[0])*Math.sin(this.theta)+(this.C[1]-this.middle[1])*Math.cos(this.theta);
    this.C[0] = newx+this.middle[0];
    this.C[1] = newy+this.middle[1];
    newx = (this.D[0]-this.middle[0])*Math.cos(this.theta)-(this.D[1]-this.middle[1])*Math.sin(this.theta);
    newy = (this.D[0]-this.middle[0])*Math.sin(this.theta)+(this.D[1]-this.middle[1])*Math.cos(this.theta);
    this.D[0] = newx+this.middle[0];
    this.D[1] = newy+this.middle[1];
    this.draw(); 
  }
  
}
let horizontSize = 1000;
let NumberOfElemnts = 200;
let speed = 0.03;
let recsize = 5;
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
    ctx.beginPath();
    ctx.arc(Math.sin(this.x)*100, this.y, Math.abs(Math.cos(this.z)*perspective*10), 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.restore();
    this.acc -= 0.1;
    this.z = this.z;
    this.y += -speed;
    this.x += -speed;
    
    if(this.z < dissapearDepth){
      this.z = furthest;
      this.x = Math.random()*horizontSize-horizontSize/2;
      this.y = Math.random()*horizontSize-horizontSize/2;
    }
  }
}


array = []
function init(){
  let color = ["white", "yellow", "blue", "red", "green"];
  
  for(let i = 0; i < NumberOfElemnts; i++){
    array.push(new rectangl(i, i, i, recsize, recsize, color[Math.floor(Math.random()*color.length)]));//Math.random()*300-150
  }

}

function zsort(cardA, cardB){
  return cardB.z - cardA.z;
}

init();
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.translate(width/2, height/2);



function animate(){
  ctx.clearRect(-width/2, -height/2, width, height);
  requestAnimationFrame(animate);
  for(let i = 0; i < NumberOfElemnts; i++){
    array[i].draw();
  }
  array.sort(function(a, b){return b.z-a.z});
  //ctx.font = "30px Arial";
  //ctx.fillText("some text", 0, 0);

}
animate();

