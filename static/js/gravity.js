let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/1.5;


var MaXx = canvas.width;
var MaXy = canvas.height;
var MiNxx = 0;
var MiNxy = 0;
var MiddlePointx = 0;
var MiddlePointy = 0;
var MiddleXPlus = 200;
var MiddleXMinus = 200;
var MiddleYPlus = 200;
var MiddleYMinus = 200;

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
        ctx.strokeStyle = this.color;
        ctx.arc((this.x+canvas.width*1)/3, (this.y+canvas.height*1)/3, this.radius/5, 0, 2 * Math.PI);
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
        
        if(this.x > MaXx){
            MaXx = this.x;
        }
        if(this.x < MiNxx){
            MiNxx = this.x;
        }
        if(this.y > MaXy){
            MaXy = this.y;
        }
        if(this.y < MiNxy){
            MiNxy = this.y;
        }
        console.log(MaXx, MaXy, MiNxx, MiNxy);

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
    let dx = 25/10;
    let dy = -43.3/10;
    let weight = 10;
    let accelerationx = 0;
    let accelerationy = 0;
    let tailLenght = 1;
    color = "red"
    circleArray.push(new gravityBalls(250, 300, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));

    dx = 25/10;
    dy = 43.3/10;
    color = " green"
    weight = 10;
    circleArray.push(new gravityBalls(350, 300, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));

    dx = -50/10;
    dy = 0/10;
    color = "blue"
    weight = 10;
    circleArray.push(new gravityBalls(300, 386.6, dx, dy, radius, color, weight, accelerationx, accelerationy, tailLenght));


}

init();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function animate(){
    ctx.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);
    MiddlePointx = 0;
    MiddlePointy = 0;
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

        MiddlePointx += circleArray[i].x;
        MiddlePointy += circleArray[i].y;
        
    }
    MiddlePointx /= circleArray.length;
    MiddlePointy /= circleArray.length;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.fillText("x: "+mouse.x, 300, 10);
    ctx.fillText("y: "+mouse.y, 300, 20);

    let AxPoints = 10
    for (let i = 0; i < AxPoints; i++) {
        ctx.fillText(AxPoints*i, 10, i*canvas.height/AxPoints);
    }

}
animate();



