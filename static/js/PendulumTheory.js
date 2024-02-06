// Canavas initialisation
let canvas = document.querySelector("canvas");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// HTML elements initialisation
var GSlider = document.getElementById("GSlider");
var LSlider = document.getElementById("LSlider");

var Gnumber = document.getElementById("Gnumber");
var Lnumber = document.getElementById("Lnumber");

window.addEventListener('resize', resizeCanvas, false);
height = window.innerHeight;
width = window.innerWidth;

// Variables
var angle = Math.PI/1.5;
var angularspeed = 0;
var radius = 5;
var color = "red";
var length = 200;
var xbase = width/4;
var ybase = height/4;
var g = 9.81;

// Functions
this.draw = function(){
    ctx.moveTo(xbase, ybase);
    ctx.lineTo(-Math.sin(this.angle)*length+xbase, Math.cos(this.angle)*length+ybase);
    ctx.strokeStyle ="black";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(-Math.sin(this.angle)*length+this.xbase, Math.cos(this.angle)*length+this.ybase, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();   
    
}

this.update = function(){
    k1 = [this.angularspeed, -g/(length/100)*Math.sin(this.angle)];
    k2 = [this.angularspeed+h*k1[1]/2, -g/(length/100)*Math.sin(this.angle+h*k1[0]/2)];

    k3 = [this.angularspeed+h*k2[1]/2, -g/(length/100)*Math.sin(this.angle+h*k2[0]/2)];
    k4 = [this.angularspeed+h*k3[1], -g/(length/100)*Math.sin(this.angle+h*k3[0])];

    this.angle = this.angle + h/6*(k1[0]+2*k2[0]+2*k3[0]+k4[0]);
    this.angularspeed = this.angularspeed + h/6*(k1[1]+2*k2[1]+2*k3[1]+k4[1]);
}

function resizeCanvas() {
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/1.5;
}

let mouseDown = false;

let mouse = {
    x: undefined,
    y: undefined,
}
let LastMouse = {
    x: undefined,
    y: undefined,
}

let ClickPos = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener("mousemove", function(event){
    if (mouseDown){
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        angle = angle + (-mouse.x+LastMouse.x)/100;
        angle = angle + (-mouse.y+LastMouse.y)/100;
        angle = Math.atan2((mouse.y-ClickPos.y),(mouse.x-ClickPos.x));

        angularspeed = 0;
        ctx.clearRect(0, 0, width, height);
        draw();
        LastMouse.x = mouse.x;
        LastMouse.y = mouse.y;
    }
});

canvas.addEventListener("mousedown", function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    LastMouse.x = event.clientX;
    LastMouse.y = event.clientY;
    ClickPos.x = event.clientX;
    ClickPos.y = event.clientY;
    mouseDown = true;
});

canvas.addEventListener("click", function(event){
    mouseDown = false;
});

resizeCanvas();

g = GSlider.value;
length = LSlider.value;
h = 1/600;

GSlider.oninput = function(){
    g = this.value;
    Gnumber.value = g;
}

LSlider.oninput = function(){
    length = this.value;
    Lnumber.value = length;
    // PeriodCalculated.innerHTML = CalculatePeriod(length, g, Math.asin(-(length*angularspeed)/(g))).toFixed(2) + " seconds";
}

function ResetVelocity(){
    angularspeed = 0;
    // PeriodCalculated.innerHTML = CalculatePeriod(length, g, Math.asin(-(length*angularspeed)/(g))).toFixed(2) + " seconds";
    console.log(Math.asin(-(length*angularspeed)/(g)));
}

function ResetAngle(){
    angle = 0;
}

function ResetVelocityAngle(){
    ResetVelocity();
    ResetAngle();
}

Gnumber.oninput = function(){
    g = Math.round(this.value, 2);
    if (g < 0){
        g = 0;
    }
    if (g > 100){
        g = 100;
    }
    PeriodCalculated.innerHTML = CalculatePeriod(l, g, Math.asin(-(l*angularspeed)/(g))).toFixed(2) + " seconds";
    GSlider.value = g;
}
var elapsed = 10;

const PeriodCalculated = document.getElementById("PeriodCalculated");


function Fact(num){
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}
function PeriodSum(Angle){
    var Sum = 0;
    for (var n = 0; n < 10; n++){
    Sum = Sum + (Math.pow(Fact(2*n)/(Math.pow(2, 2*n)*Math.pow(Fact(n), 2)),2)*Math.pow(Math.sin(Angle/2), 2*n))   
    }
    return Sum;
}

function CalculatePeriod(Length, Gravity, Angle){
    return 2*Math.PI*Math.sqrt((Length/100)/Gravity)*PeriodSum(Angle);

}

// PeriodCalculated.innerHTML = CalculatePeriod(length, g, Math.asin(-(length*angularspeed)/(g))).toFixed(2) + " seconds";





function animate(){
    requestAnimationFrame(animate);

    

    if(!mouseDown){
        ctx.clearRect(0, 0, width, height);
        for (var i = 0; i < 10; i++){
            update();
        }
        draw();
        
        
    }
    
}

animate();
