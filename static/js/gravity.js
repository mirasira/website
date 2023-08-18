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
    let del = 2;
    /*
    let color = colors[Math.floor(Math.random()*colors.length)];
    let radius = 5;
    //let x = Math.random()*(width-radius*2.1)+radius+0.1;
    //let y = Math.random()*(height-radius*2.1)+radius+0.1;
    let dx = 23.93544574/del;//(Math.random()-0.5)*20;
    let dy = 0/del;//(Math.random()-0.5)*3;
    let weight = 100;
    let accelerationx = 0;
    let accelerationy = 0;
    let tailLenght = 100;
    color = "green"
    circleArray.push(new gravityBalls(500, 573.20508075689, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));

    dx = -11.967728/del;
    dy = -20.728714333961/del;
    radius = 5;
    weight = 100;
    tailLenght = 100;
    color = "red";
    circleArray.push(new gravityBalls(600, 400, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));

    dx = -11.9677284/del;
    dy = 20.728714/del;
    radius = 5;
    weight = 100;
    tailLenght = 100;
    color = "blue";
    circleArray.push(new gravityBalls(400, 400, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));
    */
    let radius = 5;
    let dx = 0;
    let dy = 2;
    let weight = 10;
    let accelerationx = 0;
    let accelerationy = 0;
    let tailLenght = 100;
    color = "green"
    circleArray.push(new gravityBalls(400, 400, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));
    

    dx = 3;
    dy = 0;
    color = "blue"
    weight = 10;
    circleArray.push(new gravityBalls(600, 450, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));

    dx = -3;
    dy = 0;
    color = "red"
    weight = 10;
    circleArray.push(new gravityBalls(600, 350, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));


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



