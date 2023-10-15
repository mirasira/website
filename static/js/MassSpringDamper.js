let canvas = document.querySelector("canvas");
document.querySelector('canvas').height = screen.availHeight;
document.querySelector('canvas').width = screen.availWidth;

var MassSlider = document.getElementById("mass");
var SpringStifnessSlider = document.getElementById("SpringStifness");
var DamperStifnessSlider = document.getElementById("DamperStifness");

var MassSliderValue = 50;
var SpringStifnessSliderValue = -1;
var DamperStifnessSliderValue = -1;

MassSlider.oninput = function(){
    MassSliderValue = this.value;
}
SpringStifnessSlider.oninput = function(){
    SpringStifnessSliderValue = this.value;
}
DamperStifnessSlider.oninput = function(){
    DamperStifnessSliderValue = this.value;
}
// canvas.width = 600;
// canvas.height = 400;


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

g = -9.81;
h = 0.1;


function MassSpringDamper(mass, b, k, speed, position, radius, xbase, ybase, color){
    this.mass = mass;
    this.b = b;
    this.k = k;
    this.position = position;
    this.speed = speed;
    this.radius = radius;
    this.xbase = xbase;
    this.ybase = ybase;
    this.color = color;


    this.draw = function(){

        ctx.moveTo(xbase, ybase);
        ctx.lineTo(this.xbase, this.position+this.ybase);
        ctx.strokeStyle ="white";
        ctx.lineWidth = 1;
        ctx.stroke();


        ctx.beginPath();
        ctx.arc(this.xbase, this.position+this.ybase, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();   
        
    }



    this.update = function(){

        this.mass = MassSliderValue;
        this.k = SpringStifnessSliderValue;
        this.b = DamperStifnessSliderValue;
        
        k1 = [this.speed, (this.k*this.position-this.mass*g+this.b*this.speed)/this.mass];
        k2 = [this.speed+h*k1[1]/2, (this.k*this.position+h*k1[0]/2-this.mass*g+this.b*this.speed+h*k1[1]/2)/this.mass];

        k3 = [this.speed+h*k2[1]/2, (this.k*this.position+h*k2[0]/2-this.mass*g+this.b*this.speed+h*k2[1]/2)/this.mass];
        k4 = [this.speed+h*k3[1], (this.k*this.position+h*k3[0]-this.mass*g+this.b*this.speed+h*k3[1])/this.mass];

        
        this.position = this.position + h/6*(k1[0]+2*k2[0]+2*k3[0]+k4[0]);
        this.speed = this.speed + h/6*(k1[1]+2*k2[1]+2*k3[1]+k4[1]);

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
    let color = "#FFFFFF";
    let m = 10;
    let b = -1;
    let k = -1;
    let speed = 0;
    let position = -20;
    let xbase = canvas.width/2;
    let ybase = canvas.height/2;
    circleArray.push(new MassSpringDamper(m, b, k, speed, position, radius, xbase, ybase, color));
}

init();
 
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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

