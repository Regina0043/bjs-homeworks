//Задача1//
function  getSolutions( a, b, c ){
	let D = b**2 - 4*a*c;
	let dValue = {
		D: D,
		roots: [],
	}

	let x1;
	let x2;

	if(dValue.D === 0){
		x1 = -b / 2*a;
		dValue.roots.push(x1); 
	}

	else if(dValue.D > 0){
		x1 = (-b + Math.sqrt(D)) / 2*a;
		x2 = (-b - Math.sqrt(D)) / 2*a;
		dValue.roots.push(x1, x2);
	}
	return dValue;

}

function showSolutionsMessage( a, b, c ){
	let result = getSolutions(a, b, c);
	console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`)
	if(result.D < 0){
		console.log('Уравнение не имеет вещественных корней');
	}

	else if (result.D === 0){
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	}

	else if (result.D > 0){
		console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);

	}

}

showSolutionsMessage(1, 2, 3);

//Задача2//

let obj = {
	
}

function getAverageScore(data){
	let objects = {};
	if (Object.values(data).length === 0){
		objects.average = 0;
		console.log(objects);
	}
	else if (Object.values(data).length < 10) {
		let sum = 0;
		for (let name in data){
			objects[name] = getAverageMark(data[name]);
			sum =+ data[name];
			objects.average = getAverageMark(Object.values(objects));
			

			function getAverageMark(marks){
				if(marks.length === 0){
					return 0;
				}
				let sumMark = 0;
				for(let mark = 0; mark < marks.length; mark++){
					sumMark += marks[mark];
				}
				return sumMark / marks.length;	
			}

			console.log(objects);
		}	
	}
		
}

getAverageScore(obj);

//Задача 3//

let secretObj = {
	aaa: 1,
	bbb: 1,
};


function getPersonData(secretData){
	let unclassified = {};
	for (let name in secretData){
		if(name = 'aaa'){
			unclassified[name] = 'firstName';
			console.log(name);
		}
		/*getDecodedValue(secret){

		}*/

	}
}

getPersonData(secretObj);
