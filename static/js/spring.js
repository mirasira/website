let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let mouse = {
    x: 500,
    y: 500,
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
function spring(x, y, dx, dy, radius, color, damping, k){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.xsource = 1000;
    this.ysource = 500;
    this.springLength = 150;
    this.radius = radius;
    this.color = color;
    this.originalSize = radius;
    this.damping = damping;
    this.k = k;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

    this.update = function(){
        if(this.x+this.radius > width || this.x-this.radius < 0){
            this.dx =-this.dx;
        }
        if(this.y+this.radius > height || this.y-this.radius < 0){
            this.dy =-this.dy;
        }

        this.dx += this.k*(this.xsource-this.x-this.springLength*(-this.x+this.xsource)/(Math.abs(-this.x+this.xsource)+Math.abs(-this.y+this.ysource)));
        this.dy += this.k*(this.ysource-this.y-this.springLength*(-this.y+this.ysource)/(Math.abs(-this.x+this.xsource)+Math.abs(-this.y+this.ysource)))+3;
        console.log(Math.abs(-this.y+this.ysource)/(Math.abs(-this.x+this.xsource)+Math.abs(-this.y+this.ysource))+Math.abs((-this.x+this.xsource)/(Math.abs(-this.x+this.xsource)+Math.abs(-this.y+this.ysource))));
        this.dx *= this.damping;
        this.dy *= this.damping;
        /*
        if(this.y < this.damping){
            this.dy+=this.k;
        }else{
            this.dy-=this.k;
        }
        ctx.moveTo(this.x, 0);
        for(let i = 1; i < 10; i++){
            if(i%2 == 0){
                ctx.lineTo(this.x+20, this.y/10*i);
            }else{
                ctx.lineTo(this.x-20, this.y/10*i);
            }
            
        }*/
        ctx.moveTo(this.xsource, this.ysource);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle ="white";
        ctx.lineWidth = 5;
        ctx.stroke();
        this.y+=this.dy;
        this.x+=this.dx;
        this.draw();

    }
}


Balls = 1;
let circleArray = [];
function init(){
    circleArray = [];
    let colors = ["#EAC8CA", "#F2D5F8", "#E6C0E9", "#BFABCB", "#8D89A6"]//["red", "orange", "yellow", "green", "blue", "green", "violet", "indigo"];
    for(let i = 0; i < Balls; i++){
        let color = colors[Math.floor(Math.random()*colors.length)];
        circleArray.push(new spring(Math.floor(Math.random()*1000), Math.floor(Math.random()*750), 0, 0, 10, color, 0.98, 0.015));

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
        circleArray[i].xsource = mouse.x;
        circleArray[i].ysource = mouse.y;
    
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

