document.querySelector('canvas').height = screen.availHeight;
document.querySelector('canvas').width = screen.availWidth;

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


var r2 = 50;
var r3 = 50;
var x = screen.availWidth/2;
var y = screen.availHeight/2;

Reset.onclick = function(){
    r2 = 50;
    r3 = 50;
    x = screen.availWidth/2;
    y = screen.availHeight/2;
    r2Text.value = r2;
    r3Text.value = r3;
    SetSliders(r3Slider, r3);
    SetSliders(r2Slider, r2);
    plotGraph(r2, r3, x, y);
}
MoveLeft.onclick = function(){
    x=x-10;
    plotGraph(r2, r3, x, y);
}
MoveRight.onclick = function(){
    x=x+10;
    plotGraph(r2, r3, x, y);
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
    r2 = r2*2;
    r3 = r3*2;
    r2Text.value = r2;
    r3Text.value = r3;
    SetSliders(r3Slider, r3);
    SetSliders(r2Slider, r2);
    plotGraph(r2, r3, x, y);
}

ZoomOut.onclick = function(){
    r2 = Math.round(r2/2);
    r3 = Math.round(r3/2);
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
    plotGraph(r2, r3, x, y);
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
    const canvas = document.getElementById('plotCanvas');
    const ctx = canvas.getContext('2d');
    const r1 = r2 + r3;
    const multipl = lcm(r2,r3)/r2;

    const t = [];
    for (let i = 0; i <= 360 * multipl; i++) {
        t.push(i);
    }
    
    const r2mid = [[], []];
    for (let i = 0; i < t.length; i++) {
        r2mid[0].push(r2 * Math.sin(t[i] / 180 * Math.PI));
        r2mid[1].push(r2 * Math.cos(t[i] / 180 * Math.PI));
    }
    
    const elapsed = t.map(val => (val / 180) * Math.PI * r1);
    const angle = elapsed.map(val => val / r3);
    
    const list = [[], []];
    for (let i = 0; i < angle.length; i++) {
        list[0].push(r2mid[0][i] + r3 * Math.cos(angle[i]));
        list[1].push(r2mid[1][i] + r3 * Math.sin(angle[i]));
    }
    
    // Plotting the graph
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(list[0][0]+x, list[1][0]+y);
    for (let i = 1; i < list[0].length; i++) {
        ctx.lineTo(list[0][i]+x, list[1][i]+y);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}


function lcm(num1, num2) {
    let min = (num1 > num2) ? num1 : num2;
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            return min;
        }
        min++;
    }
};


plotGraph(r2, r3, x, y);
  
  
  
  
  