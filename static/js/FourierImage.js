var origin;

window.onload = function() {
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    width = canvas.width = window.innerWidth-20;
    height = canvas.height = window.innerHeight-20;


	


    var alpha = 0;
    var length = 100;
    var lenghts = [175];
    var multipliers = [2];
    var colors = ["red", "green", "blue", "black", "yellow"];
    var origin = {x: width/2, y: height/2};
    console.log(origin);
    DrawnPath = [];


    update();
    // DrawItInstantly();

    function DrawItInstantly(){
        while(alpha < 2*Math.PI){
            DrawIt(alpha, false);
            alpha += 0.01;
        }

    }

    function DrawIt(alpha, WithAnimation){
        context.clearRect(0, 0, width, height);
        
        for (var i = 0; i < DrawnPath.length-1; i++){
            context.beginPath();
            context.moveTo(DrawnPath[i].x, DrawnPath[i].y);
            context.lineTo(DrawnPath[(i+1)%DrawnPath.length].x, DrawnPath[(i+1)%DrawnPath.length].y);
            context.strokeStyle = "black";
            context.lineWidth = 1;
            context.stroke();
        }


        P1 = {x: origin.x + length * Math.cos(alpha), y: origin.y + length * Math.sin(alpha)};
        if (WithAnimation){
            context.beginPath();
            context.moveTo(origin.x, origin.y);
        
            context.lineTo(P1.x, P1.y);
            context.strokeStyle = "black";
            context.lineWidth = 5;
            context.stroke();
        }

        for (var i = 0; i < lenghts.length; i++){
            P2 = {x: P1.x + lenghts[i] * Math.cos(alpha * multipliers[i]), y: P1.y + lenghts[i] * Math.sin(alpha * multipliers[i])};
            if (WithAnimation){
                context.beginPath();
                context.moveTo(P1.x, P1.y);
                
                context.lineTo(P2.x, P2.y);
                context.strokeStyle = colors[i];
                context.stroke();
            }
            P1 = P2;
            
        }
        if(alpha < 2*Math.PI){
            DrawnPath.push(P1);
        }
    }

	function update() {
        alpha += 0.01;
        DrawIt(alpha, true);

        
            

		requestAnimationFrame(update);
	}

};