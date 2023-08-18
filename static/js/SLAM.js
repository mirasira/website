

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
/*
step = 0.1;
time = 0;
StartPoint = [100, 200];
vector = [1, 1];
vector = [vector[0] + StartPoint[0], vector[1] + StartPoint[1]]
pointer = [StartPoint[0]+time*vector[0], StartPoint[1]+time*vector[1]];

ctx.moveTo(pointer[0], pointer[1]);
ctx.beginPath();
console.log(pointer);
while(pointer[0]>=0 && pointer[0]<=1000 && pointer[1]>=0 && pointer[1]<=500){
    ctx.lineTo(pointer[0],pointer[1]);
    time += step;
    pointer = [StartPoint[0]+time*vector[0], StartPoint[1]+time*vector[1]];
    console.log(pointer);
}

*/
RobotPosition = [500, 250];
walls = [[0, 1, 200],[1, 0, -100],[1, 0, -400],[0, 1, 800]];
AngleChange = 1;
Angle = 0;
console.log("Asasd", Math.sin(90/180*Math.PI));
while(Angle < 180){


    Angle += AngleChange;
}



ctx.strokeStyle = "blue";

ctx.stroke();



