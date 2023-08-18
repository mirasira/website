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
        if (point1Move == true){
            point1[0] = mouse.x;
            point1[1] = mouse.y;
            draw();
        }
        if (point2Move == true){
            point2[0] = mouse.x;
            point2[1] = mouse.y;
            draw();
        }
        if (point3Move == true){
            point3[0] = mouse.x;
            point3[1] = mouse.y;
            draw();
        }
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
let point1Move = false;
let point2Move = false;
let point3Move = false;
let point1 = [Math.random()*canvas.width, Math.random()*canvas.height];
let point2 = [Math.random()*canvas.width, Math.random()*canvas.height];
let point3 = [Math.random()*canvas.width, Math.random()*canvas.height];

window.addEventListener("mousedown",
    function(){
        console.log(Math.pow(Math.pow(point1[0]-mouse.x,2)+Math.pow(point1[1]-mouse.y,2),0.5));
        if(Math.pow(Math.pow(point1[0]-mouse.x,2)+Math.pow(point1[1]-mouse.y,2),0.5)<30){
            console.log(Math.pow(Math.pow(point1[0]-mouse.x,2)+Math.pow(point1[1]-mouse.y,2),0.5));
            point1[0] = mouse.x;
            point1[1] = mouse.y;
            point1Move = true;
        }
        if(Math.pow(Math.pow(point2[0]-mouse.x,2)+Math.pow(point2[1]-mouse.y,2),0.5)<30){
            console.log(Math.pow(Math.pow(point1[0]-mouse.x,2)+Math.pow(point1[1]-mouse.y,2),0.5));
            point2[0] = mouse.x;
            point2[1] = mouse.y;
            point2Move = true;
        }
        if(Math.pow(Math.pow(point3[0]-mouse.x,2)+Math.pow(point3[1]-mouse.y,2),0.5)<30){
            console.log(Math.pow(Math.pow(point1[0]-mouse.x,2)+Math.pow(point1[1]-mouse.y,2),0.5));
            point3[0] = mouse.x;
            point3[1] = mouse.y;
            point3Move = true;
        }
        draw();
    }

);
window.addEventListener("mouseup",
    function(){
        console.log(Math.pow(Math.pow(point1[0]-mouse.x,2)+Math.pow(point1[1]-mouse.y,2),0.5));
        point1Move = false;
        point2Move = false;
        point3Move = false;
        draw();
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

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function animate(){
    ctx.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);
    
}
//animate();


function init(){
    point1 = [Math.random()*canvas.width, Math.random()*canvas.height];
    point2 = [Math.random()*canvas.width, Math.random()*canvas.height];
    point3 = [Math.random()*canvas.width, Math.random()*canvas.height];
    draw();
}



function draw(){
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(point1[0], point1[1]);
    for (let i = 0; i < 1; i+=0.001){
        ctx.lineTo(Math.pow((1-i),2)*point1[0]+2*(1-i)*i*point2[0]+Math.pow(i,2)*point3[0], Math.pow((1-i),2)*point1[1]+2*(1-i)*i*point2[1]+Math.pow(i,2)*point3[1]);
    }
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(point1[0], point1[1], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc(point2[0], point2[1], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(point3[0], point3[1], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
}

draw();
