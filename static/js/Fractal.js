var c = document.getElementById("plotCanvas");
var ctx = c.getContext("2d");
let rect = c.getBoundingClientRect();

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    return {x: x, y: y};
}

class ComplexNumber{
    constructor(Real, Imaginary) {
        this.Real = Real;
        this.Imaginary = Imaginary;
    }
    Pow2() {
        const real = this.Real*this.Real-this.Imaginary*this.Imaginary;
        const imaginary = 2*this.Real*this.Imaginary;
        this.Real = real;
        this.Imaginary = imaginary;
        return this;
    }
    static Sum(a, b){
        a.Real = a.Real+b.Real;
        a.Imaginary = a.Imaginary+b.Imaginary;
        return a;
    }
    static Size(a){
        return Math.sqrt(a.Real*a.Real+a.Imaginary*a.Imaginary);
    }

}

function FRACTAL(Real, Imaginary, CReal, CImaginary, Itrs) {
    let z = new ComplexNumber(Real, Imaginary);
    let c = new ComplexNumber(CReal, CImaginary);

    for (let i = 0; i < Itrs; i++) {
        z = ComplexNumber.Sum(z.Pow2(), c);
        if(ComplexNumber.Size(z) > 2){
        return i;
        }
    }
    return Itrs;
}


// https://www.sekinoworld.com/fractal/coloring.htm   inspiration

var canvasWidth = c.width;
var canvasHeight = c.height;
let CReal = -0.77146;
let CImaginary = -0.10119;

function DrawFractal(Xmin, Xmax, Ymin, Ymax, Itrs) {
    for (let x = 0; x < canvasWidth; x++) {
        for (let y = 0; y < canvasHeight; y++) {
            let Real = Xmin + (Xmax - Xmin) * x / canvasWidth;
            let Imaginary = Ymin + (Ymax - Ymin) * y / canvasHeight;
            CReal = Real;
            CImaginary = Imaginary;
            let itrs = FRACTAL(Real, Imaginary, CReal, CImaginary, Itrs);
            let r = Math.floor(255 * itrs / Itrs);
            let g = Math.floor(255 * itrs / Itrs);
            let b = Math.floor(255 * itrs / Itrs);
            if (itrs%2==0){
                r = Math.floor(0);
                g = Math.floor(0);
                b = Math.floor(0);
            }
            else{
                r = Math.floor(255);
                g = Math.floor(255);
                b = Math.floor(255);
            }
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

varHeightvsWidth = c.height / c.width;

var Xmin = -2;
var Xmax = 2;
var Ymin = -2 * varHeightvsWidth;
var Ymax = 2 * varHeightvsWidth;
var Itrs = 1000;


console.log(Xmin, Xmax, Ymin, Ymax);
DrawFractal(Xmin, Xmax, Ymin, Ymax, Itrs);




c.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    var mousePos = getMousePosition(c, event);
    var x = mousePos.x;
    var y = mousePos.y;
    x = Xmin + (Xmax - Xmin) * x / rect.right;
    y = Ymin + (Ymax - Ymin) * y / rect.bottom;
    var NewXmin = x - (Xmax - Xmin);
    var NewXmax = x + (Xmax - Xmin);
    var NewYmin = y - (Ymax - Ymin);
    var NewYmax = y + (Ymax - Ymin);

    Xmin = NewXmin;
    Xmax = NewXmax;
    Ymin = NewYmin;
    Ymax = NewYmax;

    console.log(Xmin, Xmax, Ymin, Ymax);

    DrawFractal(Xmin, Xmax, Ymin, Ymax, Itrs);
});

c.addEventListener('click', function(event) {
    var mousePos = getMousePosition(c, event);
    var x = mousePos.x;
    var y = mousePos.y;
    x = Xmin + (Xmax - Xmin) * x / rect.right;
    y = Ymin + (Ymax - Ymin) * y / rect.bottom;
    var NewXmin = x - (Xmax - Xmin) / 4;
    var NewXmax = x + (Xmax - Xmin) / 4;
    var NewYmin = y - (Ymax - Ymin) / 4;
    var NewYmax = y + (Ymax - Ymin) / 4;


    Xmin = NewXmin;
    Xmax = NewXmax;
    Ymin = NewYmin;
    Ymax = NewYmax;

    console.log(Xmin, Xmax, Ymin, Ymax);

    DrawFractal(Xmin, Xmax, Ymin, Ymax, Itrs);

});



