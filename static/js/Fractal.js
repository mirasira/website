var c = document.getElementById("plotCanvas");
var ctx = c.getContext("2d");



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


const imageData = ctx.createImageData(c.width, c.height);
// const imageData = ctx.getImageData(0, 0, c.width, c.height);
const data = imageData.data;
for (let i = 0; i < data.length; i += 4) {
    data[i] = 128; // red
    data[i + 1] = 128; // green
    data[i + 2] = 128; // blue
    console.log(data[i], data[i+1], data[i+2]);

}
ctx.putImageData(imageData, 0, 0);