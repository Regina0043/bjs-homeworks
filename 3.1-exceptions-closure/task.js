// Задача1//
function parseCount(count){
	const output = Number.parseInt(count, 10);

	if (isNaN(output)){
		const fault = new Error('Невалидное значение');
		throw fault;

	}

	
	else{
		return output;
	}
}

function validateCount(count){
	try {
	 parseCount(count);
	}catch(error) {
		return error;
	}
	
	return parseCount(count);
}

//Задача2//
class Triangle{
	constructor(a, b, c){
		if(a + b <= c || b + c <= a || a + c <= b){
			const error = new Error('Треугольник с такими сторонами не существует');
			throw error;	
		}



		this.a = a;
		this.b = b;
		this.c = c;

		
		
	
}

	getPerimeter(){
		const P = this.a + this.b + this.c;
		return JSON.parse(P);

		
	}

	getArea(){
		const p = (this.a + this.b + this.c)/2;
		const s = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
		const result = s.toFixed(3);
		return JSON.parse(result);
	}
}

const obj = {
		getArea(){
			return 'Ошибка! Треугольник не существует';
		},

		getPerimeter(){
			return 'Ошибка! Треугольник не существует';
		},
}


function getTriangle(a, b, c){
	try{
		const newTriangle = new Triangle(a, b, c);
		return newTriangle;
	}catch(e){
		return obj;
		}

}