window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth-20,
		height = canvas.height = window.innerHeight-20,
		fl = 300,
		points = [],
		needsUpdate = true,
		centerZ = 1500;

	context.translate(width / 2, height / 2);

	points[0] = { x: -500, y: -500, z: 500 };
	points[1] = { x:  500, y: -500, z: 500 };
	points[2] = { x:  500, y: -500, z: -500 };
	points[3] = { x: -500, y: -500, z: -500 };
	points[4] = { x: -500, y: 500, z: 500 };
	points[5] = { x:  500, y: 500, z: 500 };
	points[6] = { x:  500, y: 500, z: -500 };
	points[7] = { x: -500, y: 500, z: -500 };


	// House testing --------------------------

	function ArrayToPoints(array) {
		var points = [];
		for (var i = 0; i < array[0].length; i++) {
			points.push({
				x: array[0][i] * 1000,
				y: array[1][i] * 1000,
				z: array[2][i] * 1000
			});
		}
		return points;
	}

	function rX(angle){
		var matrix = [[1, 0, 0], [0, Math.cos(angle), -Math.sin(angle)], [0, Math.sin(angle), Math.cos(angle)]];
		return matrix
	}

	function rY(angle){
		var matrix = [[Math.cos(angle), 0, Math.sin(angle)], [0, 1, 0], [-Math.sin(angle), 0, Math.cos(angle)]];
		return matrix
	}

	function rZ(angle){
		var matrix = [[Math.cos(angle), -Math.sin(angle), 0], [Math.sin(angle), Math.cos(angle), 0], [0, 0, 1]];
		return matrix
	}

	function multiplyMatrix(matrix1, matrix2){
		var result = [];
		for (var i = 0; i < matrix1.length; i++) {
			result.push([]);
			for (var j = 0; j < matrix2[0].length; j++) {
				var sum = 0;
				for (var k = 0; k < matrix2.length; k++) {
					sum += matrix1[i][k] * matrix2[k][j];
				}
				result[i].push(sum);
			}
		}
		return result;
	}

	function multiplyMultiMatrix(matrix){
		var result = matrix[0];
		for (var i = 1; i < matrix.length; i++) {
			result = multiplyMatrix(result, matrix[i]);
		}
		return result;
	}

	function CameraView(points, K, CameraPose){
		matrices = [];
		matrices.push(K);
		matrices.push(rX(CameraPose[1][0]));
		matrices.push(rY(CameraPose[1][1]));
		matrices.push(rZ(CameraPose[1][2]));
		var ThreeFour = [[1, 0, 0, -CameraPose[0][0]], [0, 1, 0, -CameraPose[0][1]], [0, 0, 1, -CameraPose[0][2]]];
		matrices.push(ThreeFour);
		let onesRow = new Array(points[0].length).fill(1);
		let pointsFourDim = JSON.parse(JSON.stringify(points));
		pointsFourDim.push(onesRow);
	
		matrices.push(pointsFourDim);

		let result = multiplyMultiMatrix(matrices);
		result = result.slice(0, 2).map((row, rowIndex) => 
			row.map((value, colIndex) => value / result[2][colIndex])
		);
		return result;

	}

	var x1 = [
		[-0.5, 0.5, 0.5, -0.5, -0.5, -0.3, -0.3, -0.2, -0.2, 0, 0.5],
		[-0.5, -0.5, 0.5, 0.5, -0.5, -0.7, -0.9, -0.9, -0.8, -1, -0.5],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
	];

	var x2 = [
		[-0.5, 0.5, 0.5, -0.5, -0.5, -0.3, -0.3, -0.2, -0.2, 0, 0.5],
    	[-0.5, -0.5, 0.5, 0.5, -0.5, -0.7, -0.9, -0.9, -0.8, -1, -0.5],
    	[ 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5]
	];

	// var x1 = ArrayToPoints(x1);
	// var x2 = ArrayToPoints(x2);

	K = [[500, 0, 100], [0, 500, 10], [0, 0, 1]];

	CameraPose = [[[0], [0], [0]], [[0], [0], [0]]];


	// x1Projected = CameraView(x1, K, CameraPose);
	// x2Projected = CameraView(x2, K, CameraPose);






	// ----------------------------------------






	function project() {
		for(var i = 0; i < points.length; i++) {
			var p = points[i],
				scale = fl / (fl + p.z + centerZ);

			p.sx = p.x * scale;
			p.sy = p.y * scale;
		}
	}

	function drawLine() {
		var p = points[arguments[0]];
		context.moveTo(p.sx, p.sy);

		for(var i = 1; i < arguments.length; i++) {
			p = points[arguments[i]];
			context.lineTo(p.sx, p.sy);
		}
	}

	function translateModel(x, y, z) {
		for(var i = 0; i < points.length; i++) {
			points[i].x += x;
			points[i].y += y;
			points[i].z += z;
		}
		needsUpdate = true;
	}

	function rotateX(angle) {
		var cos = Math.cos(angle),
			sin = Math.sin(angle);

		for(var i = 0; i < points.length; i++) {
			var p = points[i],
				y = p.y * cos - p.z * sin,
				z = p.z * cos + p.y * sin;
			p.y = y;
			p.z = z;
		}
		needsUpdate = true;
	}

	function rotateY(angle) {
		var cos = Math.cos(angle),
			sin = Math.sin(angle);

		for(var i = 0; i < points.length; i++) {
			var p = points[i],
				x = p.x * cos - p.z * sin,
				z = p.z * cos + p.x * sin;
			p.x = x;
			p.z = z;
		}
		needsUpdate = true;
	}

	function rotateZ(angle) {
		var cos = Math.cos(angle),
			sin = Math.sin(angle);

		for(var i = 0; i < points.length; i++) {
			var p = points[i],
				x = p.x * cos - p.y * sin,
				y = p.y * cos + p.x * sin;
			p.x = x;
			p.y = y;
		}
		needsUpdate = true;
	}

	document.body.addEventListener("keydown", function(event) {
		switch(event.keyCode) {
			case 68: // d
				CameraPose[1][1][0] -= 0.05;
				needsUpdate = true;
				break;
			case 65: // a
				CameraPose[1][1][0] += 0.05;
				needsUpdate = true;
				break;
			case 37: // left
				if(event.ctrlKey) {
					rotateY(0.05);
				}
				else {
					translateModel(-20, 0, 0);
					CameraPose[0][0][0] -= 0.2;
				}
				break;
			case 39: // right
				if(event.ctrlKey) {
					rotateY(-0.05);
				}
				else {
					translateModel(20, 0, 0);
					CameraPose[0][0][0] += 0.2;
				}
				break;
			case 38: // up
				if(event.shiftKey) {
					translateModel(0, 0, 20);
					
				}
				else if(event.ctrlKey) {
					rotateX(0.05);
				}
				else {
					translateModel(0, -20, 0);
					CameraPose[0][2][0] += 0.2*Math.cos(CameraPose[1][1][0]);
					CameraPose[0][0][0] -= 0.2*Math.sin(CameraPose[1][1][0]);
				}
				break;
			case 40: // down
				if(event.shiftKey) {
					translateModel(0, 0, -20);
				}
				else if(event.ctrlKey) {
					rotateX(-0.05);
				}
				else {
					translateModel(0, 20, 0);
					CameraPose[0][2][0] -= 0.2;
				}
				break;
		}
	});

	update();

	function update() {
		if(needsUpdate) {
			context.clearRect(-width / 2, -height / 2, width, height);
			project();

			// context.beginPath();
			// drawLine(0, 1, 2, 3, 0);
			// drawLine(4, 5, 6, 7, 4);
			// drawLine(0, 4);
			// drawLine(1, 5);
			// drawLine(2, 6);
			// drawLine(3, 7);
			// context.stroke();
			x1Projected = CameraView(x1, K, CameraPose);
			x2Projected = CameraView(x2, K, CameraPose);
			
			context.beginPath();
			context.moveTo(x1Projected[0][0], x1Projected[1][0]);
			for (var i = 0; i < x1Projected[0].length; i++) {
				context.lineTo(x1Projected[0][i], x1Projected[1][i]);
			}
			context.stroke();
			context.beginPath();
			context.moveTo(x2Projected[0][0], x2Projected[1][0]);
			for (var i = 0; i < x2Projected[0].length; i++) {
				context.lineTo(x2Projected[0][i], x2Projected[1][i]);
			}
			context.stroke();

			context.beginPath();
			for (var i = 0; i < x1Projected[0].length; i++) {
				context.moveTo(x1Projected[0][i], x1Projected[1][i]);
				context.lineTo(x2Projected[0][i], x2Projected[1][i]);
			}
			context.stroke();

			needsUpdate = false;
		}
		requestAnimationFrame(update);
	}

};