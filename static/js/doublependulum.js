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
function pendulum(x, y, dx, dy, radius, color, length, theta, xbase, ybase){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.originalSize = radius;
    this.length = length;
    this.theta = theta;
    this.growth = 0;
    this.growthchange = 0;
    this.gravity = 2;
    this.damping = 1;
    this.xbase = xbase;
    this.ybase = ybase;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();   
    }

    this.update = function(){
        this.theta += this.growth/this.length;
        this.theta = this.theta*this.damping;
        if(this.theta > 0){
            this.growthchange = this.gravity*Math.sin(this.theta);
            this.growth-=this.growthchange;
        }else{
            this.growthchange = -this.gravity*Math.sin(this.theta);
            this.growth+=this.growthchange;
        }
        this.x = this.length*Math.sin(this.theta)+xbase;
        this.y = this.length*Math.cos(this.theta)+ybase;
        this.draw();
        ctx.moveTo(xbase, ybase);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle ="white";
        ctx.lineWidth = 1;
        ctx.stroke();
        
        this.draw();

    }
}


let circleArray = [];
function init(){
    circleArray = [];
    let colors = ["#EAC8CA", "#F2D5F8", "#E6C0E9", "#BFABCB", "#8D89A6"]//["red", "orange", "yellow", "green", "blue", "green", "violet", "indigo"];

    let x = 500;
    let y = 20;
    let dx = 0;
    let dy = 0;
    let radius = 10;
    let color = colors[Math.floor(Math.random()*colors.length)];
    let length = 200;
    let theta = Math.PI/4;
    let xbase = 750;
    let ybase = 100;

    circleArray.push(new pendulum(x, y, dx, dy, radius, color, length, theta, xbase, ybase));
}

init();
 
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function animate(){
    ctx.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);
    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    
    }
}
animate();



