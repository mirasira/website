let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


console.log(canvas);

let mouse = {
    x: undefined,
    y: undefined,
    radius: 50
}
let maxRadius = 20;
window.addEventListener("mousemove",
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

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
function Circle(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.originalSize = radius;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
    }

    this.update = function(){
        if(this.x+this.radius > width || this.x-this.radius < 0){
            this.dx =-this.dx;
        }
        if(this.y+this.radius > height || this.y-this.radius < 0){
            this.dy =-this.dy;
        }
        this.y+=this.dy;
        this.x+=this.dx;
        this.draw();
        if((mouse.x - this.x < mouse.radius) && (mouse.y - this.y < mouse.radius) && (mouse.x - this.x > -mouse.radius) && (mouse.y - this.y > -mouse.radius) && this.radius < maxRadius){
            //this.radius += 1;
            this.radius += 3;
        }else if(this.radius > this.originalSize){
            this.radius -= 1;
        }
    }
    
}
function gravityBalls(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
    }

    this.update = function(){
        if(this.x+this.radius > width || this.x-this.radius <= 0){
            this.dx =-this.dx*0.9;
        }
        if(this.y+this.radius > height || this.y-this.radius < 0){
            this.dy =-this.dy*0.9;
            this.dx *= 0.99;
        }else{
            this.dy += 0.2;
        }
        this.y+=this.dy;
        if(this.y+this.radius>height){
            this.y += height-this.y-this.radius+0.2;
            this.dy =this.dy*0.9;
        }
        this.x+=this.dx;
        if(this.x+this.radius>width){
            this.x += width-this.x-this.radius+0.2;
        }
        if(this.x-this.radius<0){
            this.x += -this.x+this.radius-0.2;
        }
        this.draw();

    }
}


Balls = 10;
let circleArray = [];
let ballMouse = new gravityBalls(undefined, undefined, 0, 0, 20, "#8D89A6");
function init(){
    circleArray = [];
    let colors = ["#EAC8CA", "#F2D5F8", "#E6C0E9", "#BFABCB", "#8D89A6"]//["red", "orange", "yellow", "green", "blue", "green", "violet", "indigo"];
    for(let i = 0; i < Balls; i++){
        let color = colors[Math.floor(Math.random()*colors.length)];
        let radius = Math.random()*5+20;
        let x = Math.random()*(width-radius*2.1)+radius+0.1;
        let y = Math.random()*(height-radius*2.1)+radius+0.1;
        let dx = (Math.random()-0.5)*20;
        let dy = (Math.random()-0.5)*3;
        circleArray.push(new gravityBalls(x, y, dx, dy, radius, color));

    }
}

init();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function animate(){
    ctx.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);
    for(let i = 0; i < Balls; i++){
        circleArray[i].update();
        for(let j = 0; j < Balls; j++){
            if(i != j){
                if(Math.sqrt(Math.pow(circleArray[i].x-circleArray[j].x,2) + Math.pow(circleArray[i].y-circleArray[j].y,2)) < circleArray[i].radius+circleArray[j].radius){    
                    console.log(circleArray[i].radius+circleArray[j].radius);  
                    circleArray[i].dx += circleArray[i].dy;
                    circleArray[i].dy = circleArray[i].dx - circleArray[i].dy;
                    circleArray[i].dx -= circleArray[i].dy;

                    circleArray[j].dx += circleArray[j].dy;
                    circleArray[j].dy = circleArray[j].dx - circleArray[j].dy;
                    circleArray[j].dx -= circleArray[j].dy;
                }
            }
        }
    }
}
animate();


ctx.fillRect(100, 100, 100, 100);
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300,300);
ctx.strokeStyle = "blue";

ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
ctx.fillRect(500, 300, 100, 100);
ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
ctx.fillRect(525, 350, 100, 100);
ctx.fillStyle = "rgba(0, 0, 255, 0.5)"
ctx.fillRect(475, 350, 100, 100);
ctx.stroke();

