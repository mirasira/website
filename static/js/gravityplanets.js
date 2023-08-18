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


function gravityBalls(x, y, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.weight = weight;
    this.accelerationx = accelerationx;
    this.accelerationy = accelerationy;
    this.tail = Array(tailLenght);
    this.tailLenght = tailLenght;
    this.round = 0;
    for(let i = 0; i < tailLenght; i++){
        this.tail[i] = [this.x, this.y];
    }
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = function(){
        let multy = 5935335.26+10000000;
        this.dx += this.accelerationx;
        this.dy += this.accelerationy;
        this.y+=this.dy;
        this.x+=this.dx;
        this.draw();

        if(this.tailLenght>1){
            ctx.moveTo(this.tail[this.round][0], this.tail[this.round][1]);
            
            for(let i = this.round; i < this.round+this.tailLenght-1; i++){;
                ctx.lineTo(this.tail[i%this.tailLenght][0], this.tail[i%this.tailLenght][1]);
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            
            this.tail[this.round][0] = this.x;
            this.tail[this.round][1] = this.y;

            this.round += 1;
            if(this.round >= this.tailLenght){
                this.round = 0;
            }
        }


        this.draw();

    }
}


let circleArray = [];
function init(){
    
    circleArray = [];
    let colors = ["#EAC8CA", "#F2D5F8", "#E6C0E9", "#BFABCB", "#8D89A6"]//["red", "orange", "yellow", "green", "blue", "green", "violet", "indigo"];
    // Slunce
    let timespeeder = 10000;
    let radius = 10;
    let dx = 0;
    let dy = 0;
    //let weight = 6023924.89/del;
    let weight = 0.0000038865412581180300*timespeeder;
    let accelerationx = 0;
    let accelerationy = 0;
    let tailLenght = 0;
    color = "yellow"
    circleArray.push(new gravityBalls(700, 400, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));
    

    
    // Země
    radius = 1;
    dy = 0;
    weight = 0.0000000000207501039416*timespeeder;
    dx =0.0000002027337963*timespeeder;
    tailLenght = 300;
    color = "blue"
    circleArray.push(new gravityBalls(700, 531, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));

    // Mars
    radius = 1;
    dy = 0;
    weight = 0.0000000000022295523997*timespeeder;
    dx = 0.0001858683228*timespeeder;
    tailLenght = 10;
    color = "red"
    circleArray.push(new gravityBalls(700, 600, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));
}
init();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function animate(){
    ctx.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);
    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
        accxsum = 0;
        accysum = 0;
        for(let j = 0; j < circleArray.length; j++){
            if(i != j){
                distance = Math.sqrt(Math.pow(circleArray[i].x-circleArray[j].x,2)+Math.pow(circleArray[i].y-circleArray[j].y,2));
                accxsum -= circleArray[j].weight/distance*(circleArray[i].x-circleArray[j].x)/(distance);
                accysum -= circleArray[j].weight/distance*(circleArray[i].y-circleArray[j].y)/(distance);
            }
        }
        circleArray[i].accelerationx = accxsum;
        circleArray[i].accelerationy = accysum;
    }
}
animate();



