let canvas = document.querySelector("canvas");
canvas.width = 3000;
canvas.height = 3000;


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

height = canvas.width;
width = canvas.height;
window.addEventListener("resize",
    function(){
        canvas.width = window.innerWidth+1000;
        canvas.height = window.innerHeight+1000;
        height = window.innerHeight;
        width = window.innerWidth;
        init();
    }

);


Middle = [width/2, height/2];
function Circle(x, y, dx, dy, radius, color, distance){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.originalSize = radius;
    this.distance = distance;

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
        this.dy += this.dy;
        this.dx += this.dy
        this.y=Math.sin(dy)*this.distance+Middle[1];
        this.x=Math.cos(dx)*this.distance+Middle[0];
        this.draw();
        if((mouse.x - this.x < mouse.radius) && (mouse.y - this.y < mouse.radius) && (mouse.x - this.x > -mouse.radius) && (mouse.y - this.y > -mouse.radius) && this.radius < maxRadius){
            //this.radius += 1;
            this.radius += 3;
        }else if(this.radius > this.originalSize){
            this.radius -= 1;
        }
    }
    
}


Balls = 1;
let circleArray = [];
function init(){
    circleArray = [];
    let colors = ["white"]//["red", "orange", "yellow", "green", "blue", "green", "violet", "indigo"];

    let color = colors[Math.floor(Math.random()*colors.length)];
    circleArray.push(new Circle(500, 500, 0, 0, 10, color, 0));
    circleArray.push(new Circle(500, 500, 0.1, 0.1, 1, "white", 18));
    circleArray.push(new Circle(500, 500, 0.074, 0.074, 1, color, 34));
    circleArray.push(new Circle(500, 500, 0.063, 0.063, 1, color, 47));
    circleArray.push(new Circle(500, 500, 0.051, 0.051, 1, color, 71));
    circleArray.push(new Circle(500, 500, 0.028, 0.028, 5, color, 242));
    circleArray.push(new Circle(500, 500, 0.020, 0.020, 4, color, 444));
    circleArray.push(new Circle(500, 500, 0.014, 0.014, 2, color, 894));
    circleArray.push(new Circle(500, 500, 0.011, 0.011, 2, color, 1400));



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

