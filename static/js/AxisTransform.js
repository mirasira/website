document.querySelector('canvas').height = screen.availHeight;
document.querySelector('canvas').width = screen.availWidth;

const canvas = document.getElementById('plotCanvas');
const ctx = canvas.getContext('2d');

var r2Slider = document.getElementById("r2");
var r3Slider = document.getElementById("r3");

var r2Text = document.getElementById("r2Text");
var r3Text = document.getElementById("r3Text");

var ZoomIn = document.getElementById("ZoomIn");
var ZoomOut = document.getElementById("ZoomOut");

var MoveLeft = document.getElementById("MoveLeft");
var MoveRight = document.getElementById("MoveRight");
var MoveUp = document.getElementById("MoveUp");
var MoveDown = document.getElementById("MoveDown");

var Reset = document.getElementById("Reset");


var x = screen.availWidth/2;
var y = screen.availHeight/2;
var OneSize = 100;

Reset.onclick = function(){
    x = screen.availWidth/2;
    y = screen.availHeight/2;
    OneSize = 100;
    r2Text.value = x;
    r3Text.value = y;
    SetSliders(r3Slider, x);
    SetSliders(r2Slider, y);
    PlotAxis(x, y);
}
MoveLeft.onclick = function(){
    x=x-10;
    plotGraph(r2, r3, x, y);
}
MoveRight.onclick = function(){
    x=x+10;
    PlotAxis(x, y);
}
MoveUp.onclick = function(){
    y=y-10;
    plotGraph(r2, r3, x, y);
}
MoveDown.onclick = function(){
    y=y+10;
    plotGraph(r2, r3, x, y);
}
r2Slider.oninput = function(){
    r2 = Math.round(this.value);
    r2Text.value = r2;
    plotGraph(r2, r3, x, y);
}
r3Slider.oninput = function(){
    r3 = Math.round(this.value);
    r3Text.value = r3;
    plotGraph(r2, r3, x, y);
}
r2Text.oninput = function(){
    r2 = Math.round(this.value);
    SetSliders(r2Slider, r2);
    if(r2 < 1){
        r2 = 1;
    }
    plotGraph(r2, r3, x, y);
}
r3Text.oninput = function(){
    r3 = Math.round(this.value);
    SetSliders(r3Slider, r3);
    if(r3 < 1){
        r3 = 1;
    }
    plotGraph(r2, r3, x, y);
}

ZoomIn.onclick = function(){
    OneSize *= 2;
    x = x*2-screen.availWidth/2;
    y = y*2-screen.availHeight/2;
    r2Text.value = OneSize;
    r3Text.value = OneSize;
    SetSliders(r3Slider, OneSize);
    SetSliders(r2Slider, OneSize);
    PlotAxis(x, y);
}

ZoomOut.onclick = function(){
    r2 = Math.round(r2/2);
    r3 = Math.round(r3/2);
    x = x/2+screen.availWidth/4;
    y = y/2+screen.availHeight/4;
    if(r2 < 1){
        r2 = 1;
    }
    if(r3 < 1){
        r3 = 1;
    }
    r2Text.value = r2;
    r3Text.value = r3;
    SetSliders(r3Slider, r3);
    SetSliders(r2Slider, r2);
    PlotAxis(x, y);
}


function SetSliders(slider, value){
    slider.setAttribute("max", value+50);
    slider.setAttribute("value", value);
    if(value-50 < 1){
        slider.setAttribute("min", 1);
    }else{
        slider.setAttribute("min", value-50);
    }

}

function plotGraph(r2, r3, x, y) {
    
   
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}





plotGraph(r2, r3, x, y);
  
  
  
PlotAxis(x, y);

O1 = [0, 0];
O2 = [1, 1];
PlotVector(O1, [1, 2], "p1", "red");
PlotVector(O1, [-1, 0], "p2", "red");
PlotVector(O2, [0, -5], "p1'", "green");
PlotVector(O2, [-5, 0], "p2'", "green");


function PlotVector(p1, p2, name, color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.setLineDash([]);
    let Base = [p1[0]*OneSize+screen.availWidth/2, -p1[1]*OneSize+screen.availHeight/2];
    ctx.moveTo(Base[0], Base[1]);
    let End = [p2[0]*OneSize+Base[0], -p2[1]*OneSize+Base[1]];
    ctx.lineTo(End[0], End[1]);

    let RotVec = ZRotation(Math.PI/4, [p2[0]-p1[0], p2[1]-p1[1]]);
    let VecSize = Math.sqrt(Math.pow(p1[0]-p2[0], 2) + Math.pow(p1[1]-p2[1], 2));
    RotVec[0] = RotVec[0]/VecSize/2;
    RotVec[1] = RotVec[1]/VecSize/2;
    ctx.lineTo(End[0]-RotVec[0]*OneSize, End[1]-RotVec[1]*OneSize);

    ctx.moveTo(End[0], End[1]);
    RotVec = ZRotation(-Math.PI/4, [p2[0]-p1[0], p2[1]-p1[1]]);
    RotVec[0] = RotVec[0]/VecSize/2;
    RotVec[1] = RotVec[1]/VecSize/2;
    ctx.lineTo(End[0]-RotVec[0]*OneSize, End[1]-RotVec[1]*OneSize);

    if(name != null){
        ctx.font = `30px Verdana`;
        ctx.fillStyle = color;
        ctx.fillText(name, (End[0]-Base[0])*1.2/VecSize+End[0], (End[1]-Base[1])*1.2/VecSize+End[1]);
    }
    
    ctx.stroke();


    

}

function ZRotation(angle, vector){
    OutVector = [0, 0];
    OutVector[0] = Math.cos(angle)*vector[0] - Math.sin(angle)*vector[1];
    OutVector[1] = -Math.sin(angle)*vector[0] - Math.cos(angle)*vector[1];
    return OutVector
}

function PlotAxis(x, y){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.moveTo(0, y);
    ctx.lineTo(screen.availWidth, screen.availHeight/2);
    ctx.moveTo(screen.availWidth/2, 0);
    ctx.lineTo(screen.availWidth/2, screen.availHeight);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.setLineDash([]);
    for (let i = 1; i < screen.availWidth/2/OneSize; i++) {  
        ctx.moveTo(screen.availWidth/2+i*OneSize, screen.availHeight/2+5);
        ctx.lineTo(screen.availWidth/2+i*OneSize, screen.availHeight/2-5);
        ctx.font = "20px serif";
        ctx.fillText(i.toString(), screen.availWidth/2+i*OneSize, screen.availHeight/2+20);
        ctx.moveTo(screen.availWidth/2-i*OneSize, screen.availHeight/2+5);
        ctx.lineTo(screen.availWidth/2-i*OneSize, screen.availHeight/2-5);
        ctx.fillText((-i).toString(), screen.availWidth/2-i*OneSize, screen.availHeight/2+20);
    }
    ctx.stroke();


    ctx.beginPath();    
    for (let i = 1; i < screen.availWidth/2/OneSize; i++) {
        ctx.setLineDash([5, 15]);
        ctx.moveTo(screen.availWidth/2+i*OneSize, 0);
        ctx.lineTo(screen.availWidth/2+i*OneSize, screen.availHeight);
        ctx.moveTo(screen.availWidth/2-i*OneSize, 0);
        ctx.lineTo(screen.availWidth/2-i*OneSize, screen.availHeight);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = 0.5;
    for (let i = 1; i < screen.availHeight/2/OneSize; i++) {
        ctx.moveTo(screen.availWidth/2+5, screen.availHeight/2+i*OneSize);
        ctx.lineTo(screen.availWidth/2-5, screen.availHeight/2+i*OneSize);
        ctx.fillText((-i).toString(), screen.availWidth/2+5, screen.availHeight/2+i*OneSize+17);
        ctx.moveTo(screen.availWidth/2+5, screen.availHeight/2-i*OneSize);
        ctx.lineTo(screen.availWidth/2-5, screen.availHeight/2-i*OneSize);
        ctx.fillText(i.toString(), screen.availWidth/2+5, screen.availHeight/2-i*OneSize+17);
    }
    ctx.stroke();

    ctx.beginPath();    
    for (let i = 1; i < screen.availWidth/2/OneSize; i++) {
        ctx.setLineDash([5, 15]);
        ctx.moveTo(0, screen.availHeight/2+i*OneSize);
        ctx.lineTo(screen.availWidth, screen.availHeight/2+i*OneSize);
        ctx.moveTo(0, screen.availHeight/2-i*OneSize);
        ctx.lineTo(screen.availWidth, screen.availHeight/2-i*OneSize);
    }
    ctx.stroke();



    ctx.fillText((0).toString(), screen.availWidth/2+5, screen.availHeight/2+17);

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

