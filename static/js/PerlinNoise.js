var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");

let grid = [];
const nodes = 4;

function GenerateUnitVector(){
    let Phi = Math.random()*Math.PI*2;
    return{x: Math.cos(Phi), y: Math.sin(Phi)}
}

for (let i = 0; i < nodes; i++) {
    let row = [];
    for (let j = 0; j < nodes; j++) {
        row.push(GenerateUnitVector());
    }
    grid.push(row);
}


function setup(a) {
    return noise(a);
}



time = 0;
timeStep = 0.1;
w = c.width;
h = c.height;
resolution = 1;
amplitude = 20;
frequency = 2;

function MySinus(x, time, Amplitudes, frequencies, Phaseshifts){
    y = 0;
    for (let i = 0; i < Amplitudes.length; i++) {
        y += Amplitudes[i]*Math.sin(time + Phaseshifts[i] + (x*resolution*frequencies[i])*2*Math.PI/180);
    }
    return y;
}



IntervalLen = 1;
NumOfUnitVectors = 1000;

function GenerateUnitVectors1D(){
    let Array = [];
    for (let i = 0; i < NumOfUnitVectors; i++) {
        let a = Math.random()*2-1;
        Array.push(a);
    }
    return Array
}

Vecs = GenerateUnitVectors1D();

function NeigbourEdges(Point){
    let a = Math.floor(Point/IntervalLen)*IntervalLen;
    let b = a + IntervalLen;
    return [a, b]
}

function PointDistancesFromEdge1D(Point){
    Ne = NeigbourEdges(Point);
    return [Math.abs(Ne[0]-Point), Math.abs(Ne[1]-Point)]
}

function DotProducts1D(Point, Vectors, Distances){
    Ne = NeigbourEdges(Point);
    DotProducts = [Distances[0]*Vectors[Ne[0]%Vectors.length], Distances[1]*Vectors[Ne[1]%Vectors.length]];
    return DotProducts;
}

function Interpolate(Point, Vectors){
    Distances = PointDistancesFromEdge1D(Point);
    DotProducts = DotProducts1D(Point, Vectors, Distances);
    console.log(DotProducts);
    Final = DotProducts[0]+Distances[0]*(DotProducts[1] - DotProducts[0]);
   
    // console.log(Final);
    
    // return 6*Math.pow(Final, 5)-15*Math.pow(Final, 4)+ 10*Math.pow(Final, 3);
    return 50*Final
}




function Paint(){
    time += timeStep;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.moveTo(0, h/2 + Math.sin(time));

    for (let i = 0; i <= w/resolution; i++) {
        ctx.lineTo(i*resolution, h/2 + Interpolate(i*resolution+time, Vecs));
        // ctx.lineTo(i*resolution, h/2 + 20*Math.random());
        // ctx.lineTo(i*resolution, h/2 + MySinus(i, time, [20, 15, 5, 5], [2, 5, 5, 20], [0, 1, 2, 0]))
        // ctx.lineTo(i*resolution, h/2 + amplitude*Math.sin(time + (i*resolution*frequency)*2*Math.PI/180));
    }

    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
}
// Paint();
// setInterval(Paint, 100)


// ctx.fillStyle = '#eeeeee'; 
// ctx.fillRect(0, 0, c.width, c.height);
for (let i = 0; i < c.width; i++) {
    for (let j = 0; j < c.height; j++) {
        let rnd = Math.floor(Math.random()*256);
        let color = { r: rnd, g: rnd, b: rnd, a: 255 }; 
        var p = ctx.createImageData(1, 1);
        p.data[0] = color.r;
        p.data[1] = color.g;
        p.data[2] = color.b;
        p.data[3] = color.a;
        ctx.putImageData(p, i, j);
    }
}


console.log("ASLDMALSKDM");

