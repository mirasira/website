//number entering
function calculate(number){
    if(number == 0){
        document.getElementById("identificator").innerHTML = document.getElementById("identificator").innerHTML*3;
    }else{
        document.getElementById("identificator").innerHTML = document.getElementById("identificator").innerHTML-5;
    }
}

function reset(){
    document.getElementById("identificator").innerHTML = 1;
}


// Generator
function generate(){
    let image = document.createElement("img");
    let div = document.getElementById("generator-container");
    image.setAttribute("id", "newimage")
    image.src = "https://thispersondoesnotexist.com/image";
    image.width = 100;
    image.height = 100;
    div.appendChild(image);
}

function remove(){
    document.getElementById("newimage").remove();
}

// Rock, Paper, Scissors
function rpsGame(choice){
    let yourchoice, botchoice;
    const rps = ["rock", "paper", "scissors"]
    yourchoice = rps.indexOf(choice.id);
    botchoice = randToRpsInt();
    let message;
    if (botchoice == yourchoice){
        message = {"message": "tie", "color":"yellow"}
    }else if ((botchoice == 0 && yourchoice == 2) || (botchoice == 1 && yourchoice == 0) || (botchoice == 2 && yourchoice == 1)){
        message = {"message": "you lost", "color":"red"}
        document.getElementById("botScore").innerHTML = parseInt(document.getElementById("botScore").innerHTML)+1;
    }else{
        message = {"message": "you won", "color":"green"}
        document.getElementById("humanScore").innerHTML = parseInt(document.getElementById("humanScore").innerHTML)+1;
    }
    rpsFinal(yourchoice, botchoice, message)
}
function randToRpsInt(){
    return Math.floor(Math.random()*3)
}
function rpsReset(){
    for(i = 0; i < 2; i++){
        if (document.getElementById("rock") != null){
            document.getElementById("rock").remove();
        }
        if (document.getElementById("paper") != null){
            document.getElementById("paper").remove();
        }
        if (document.getElementById("scissors") != null){
            document.getElementById("scissors").remove();
        }
        if (document.getElementById("text") != null){
            document.getElementById("text").remove();
        }
    }
    for(i = 0; i < 2; i++){
        if (document.getElementById("rockdiv") != null){
            document.getElementById("rockdiv").remove();
        }
        if (document.getElementById("paperdiv") != null){
            document.getElementById("paperdiv").remove();
        }
        if (document.getElementById("scissorsdiv") != null){
            document.getElementById("scissorsdiv").remove();
        }
        if (document.getElementById("textdiv") != null){
            document.getElementById("textdiv").remove();
        }
    }

    let rock = document.createElement("div");
    let paper = document.createElement("div");
    let scissors = document.createElement("div");
    rock.id = "rockdiv";
    paper.id = "paperdiv";
    scissors.id = "scissorsdiv";
    rock.innerHTML = "<img id='rock' src='https://i.pinimg.com/originals/4d/40/db/4d40dbef4879e329e9e9309ca3320470.png' alt='' height=150 width=150 onclick='rpsGame(this)'></img>";
    paper.innerHTML = "<img id='paper' src='https://i.pinimg.com/474x/58/2e/13/582e133b21ac09c3957f7e46bcbd015b.jpg' alt='' height=150 width=150 onclick='rpsGame(this)'></img>";
    scissors.innerHTML = "<img id='scissors' src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Small_pair_of_blue_scissors.png' alt='' height=150 width=150 onclick='rpsGame(this)'></img>";
    document.getElementById("rps").appendChild(rock);
    document.getElementById("rps").appendChild(paper);
    document.getElementById("rps").appendChild(scissors);
}
function rpsFinal(HumanChoice, botchoice, message){
    const rps = ["rock", "paper", "scissors"]

    let images = {
        0: document.getElementById("rock").src,
        1: document.getElementById("paper").src,
        2: document.getElementById("scissors").src
    }
    document.getElementById("rockdiv").remove();
    document.getElementById("paperdiv").remove();
    document.getElementById("scissorsdiv").remove();

    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");
    humanDiv.id = rps[HumanChoice];
    messageDiv.id = "text";
    botDiv.id = rps[botchoice];
    humanDiv.innerHTML = "<img id='"+rps[HumanChoice]+"' src='"+images[HumanChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 id='text' style='color:"+message["color"] + "; font-size: 60px; padding: 30px; '>" + message["message"] + "</h1>"
    botDiv.innerHTML = "<img id='"+rps[botchoice]+"' src='"+images[botchoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    document.getElementById("rps").appendChild(humanDiv);
    document.getElementById("rps").appendChild(messageDiv);
    document.getElementById("rps").appendChild(botDiv);
}
// rpsFinal(0, 1, {"message": "you lost", "color":"red"})

// 15 puzzle
function Move(stone){
    let grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    let clickedPosition = Number(stone.id.replace(/\D/g,''));
    let clickedImg = document.getElementById("position" + clickedPosition).getAttribute("Name").replace(/\D/g,'');
    let blankPosition = Number(document.getElementsByName("imgBlank")[0].id.replace(/\D/g,''));
    let blankPositionXY = [Math.floor((blankPosition-1)/4), Math.floor((blankPosition-1)%4)]
    let clickedPositionXY = [Math.floor((clickedPosition-1)/4), Math.floor((clickedPosition-1)%4)]

    if ((blankPositionXY[0]-clickedPositionXY[0])==0 && (blankPositionXY[1]-clickedPositionXY[1])==1 || 
    (blankPositionXY[0]-clickedPositionXY[0])==0 && (blankPositionXY[1]-clickedPositionXY[1])==-1 || 
    (blankPositionXY[0]-clickedPositionXY[0])==1 && (blankPositionXY[1]-clickedPositionXY[1])==0 || 
    (blankPositionXY[0]-clickedPositionXY[0])==-1 && (blankPositionXY[1]-clickedPositionXY[1])==0){
        document.getElementById("position"+grid[blankPositionXY[0]][blankPositionXY[1]]).innerHTML = "<img src='./static/images/15puzzle/"+ clickedImg +".png' alt=''></img>";
        document.getElementById("position"+grid[blankPositionXY[0]][blankPositionXY[1]]).setAttribute("name", "img"+ clickedImg);

        document.getElementById("position"+grid[clickedPositionXY[0]][clickedPositionXY[1]]).innerHTML = "<img src='./static/images/15puzzle/blank.png' alt=''></img>";
        document.getElementById("position"+grid[clickedPositionXY[0]][clickedPositionXY[1]]).setAttribute("name", "imgBlank");
        document.getElementById("Moves15").innerHTML = (Number(document.getElementById("Moves15").innerHTML)+1);


    }
}
function SolvabilityCheck(){
    let array = [];
    for(i = 1; i < 17; i++){
        array.push(Number(document.getElementById("position"+i).getAttribute("Name").replace(/\D/g,'')));
    }
    let inversions = 0;
    let Blank = 0;
    for(i=0; i<array.length; i++){
        for(j=0; j<i; j++){
            if(array[i]==0){
                Blank = i;
            }else if(array[i]!=0 && array[j] != 0){
                if(array[i] < array[j]){
                    inversions += 1;
                }
            }
        }
    }
    let BlankRow = 4-Math.floor((Blank)/4);
    if((BlankRow%2 == 0 && inversions%2 != 0) || (BlankRow%2 != 0 && inversions%2 == 0)){
        return true
    }else{
        return false
    }
}
function Shuffle(){
    document.getElementById("Moves15").innerHTML = 0;
    let grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    for(i = list.length; 0 < i; i--){
        let random = Math.floor(Math.random()*16)+1;

        let firstXY = [Math.floor((random-1)/4), Math.floor((random-1)%4)]
        let secondXY = [Math.floor((i-1)/4), Math.floor((i-1)%4)]

        let temp = document.getElementById("position"+grid[firstXY[0]][firstXY[1]]).innerHTML;
        document.getElementById("position"+grid[firstXY[0]][firstXY[1]]).innerHTML = document.getElementById("position"+grid[secondXY[0]][secondXY[1]]).innerHTML;
        document.getElementById("position"+grid[secondXY[0]][secondXY[1]]).innerHTML = temp;

        temp = document.getElementById("position"+grid[firstXY[0]][firstXY[1]]).getAttribute("name");
        document.getElementById("position"+grid[firstXY[0]][firstXY[1]]).setAttribute("name", document.getElementById("position"+grid[secondXY[0]][secondXY[1]]).getAttribute("name"));
        document.getElementById("position"+grid[secondXY[0]][secondXY[1]]).setAttribute("name", temp);
    }
    while(SolvabilityCheck() != true){
        Shuffle();
    }
}

//plotting
let trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
};
  
let trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
};

let data = [trace1, trace2];

// Plotly.newPlot('myDiv', data);



rpsReset()

function ToDate(today){

    let Hours = String(today.getHours());
    let Minutes = String(today.getMinutes());
    let Seconds = String(today.getSeconds());
    if (Hours.length == 1){
        Hours = "0" + Hours
    }
    if (Minutes.length == 1){
        Minutes = "0" + Minutes
    }
    if (Seconds.length == 1){
        Seconds = "0" + Seconds
    }

    return Hours +":"+Minutes+":"+Seconds+" "+String(today.getDate())+"."+String(today.getMonth()+1)+"."+String(today.getFullYear())
}

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener("mousemove",
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    }
);


height = 500;
width = 1000;
function Circle(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

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
    }
    
}
let colors = ["red", "black", "blue"];
let circleArray = [];
for(let i = 0; i < 100; i++){
    let color = colors[Math.floor(Math.random()*3)];
    let radius = Math.random()*3+2;
    let x = Math.random()*(width-radius*2)+radius;
    let y = Math.random()*(height-radius*2)+radius;
    let dx = (Math.random()-0.5)*3;
    let dy = (Math.random()-0.5)*3;
    circleArray.push(new Circle(x, y, dx, dy, radius, color));

}



// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// function animate(){
//     ctx.clearRect(0, 0, width, height);
//     requestAnimationFrame(animate);
//     for(let i = 0; i < 100; i++){
//         circleArray[i].update();
    
//     }
// }
// animate();


// ctx.fillRect(100, 100, 100, 100);
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(300,300);
// ctx.strokeStyle = "blue";

// ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
// ctx.fillRect(500, 300, 100, 100);
// ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
// ctx.fillRect(525, 350, 100, 100);
// ctx.fillStyle = "rgba(0, 0, 255, 0.5)"
// ctx.fillRect(475, 350, 100, 100);
// ctx.stroke();

// window.setInterval(
//     () => {
//         const today = new Date();
//         document.getElementById("Time").innerHTML = "<h1>" + ToDate(today) + "</h1>";

//     }
// );

rpsReset()


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {
        l=l-5;
    }else if(event.keyCode == 83) {
        l=l+5
    }
    if(event.keyCode == 68) {
        k=k+5
    }else if(event.keyCode == 65) {
        k=k-5
    }
});