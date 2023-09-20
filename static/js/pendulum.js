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

g = 9.81
h = 0.1

function pendulum2(l, angle, angularspeed, radius, xbase, ybase, color){
    this.l = l;
    this.angle = angle;
    this.angularspeed = angularspeed;
    this.radius = radius;
    this.xbase = xbase;
    this.ybase = ybase;
    this.color = color;


    this.draw = function(){
        ctx.moveTo(xbase, ybase);
        ctx.lineTo(-Math.sin(this.angle)*l+xbase, Math.cos(this.angle)*l+ybase);
        ctx.strokeStyle ="white";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(-Math.sin(this.angle)*l+this.xbase, Math.cos(this.angle)*l+this.ybase, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();   
    }

    this.update = function(){
        
        k1 = [this.angularspeed, -g/this.l*Math.sin(this.angle)];
        k2 = [this.angularspeed+h*k1[1]/2, -g/l*Math.sin(this.angle+h*k1[0]/2)];

        k3 = [this.angularspeed+h*k2[1]/2, -g/l*Math.sin(this.angle+h*k2[0]/2)];
        k4 = [this.angularspeed+h*k3[1], -g/l*Math.sin(this.angle+h*k3[0])];

        

        this.angle = this.angle + h/6*(k1[0]+2*k2[0]+2*k3[0]+k4[0]);
        this.angularspeed = this.angularspeed + h/6*(k1[1]+2*k2[1]+2*k3[1]+k4[1]);

        this.draw();
    }
}

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
    let theta = Math.PI/1.5;
    let xbase = 750;
    let ybase = 500;
    circleArray.push(new pendulum2(length, theta, 0, radius, xbase, ybase, color));
    // for(let i = 0; i < 250; i+=25){
    //     circleArray.push(new pendulum2(length+i, theta, 0, radius, xbase, ybase, color));
    // }
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

