'use strict';
function getResult(a,b,c){
    // код для задачи №1 писать здесь 
    // return x;
 	let d = b**2 - 4 * a * c;

 	let x = [];

 	if (d === 0){
 		x.push((-b + Math.sqrt(d)) / (2 * a));
 		console.log(x);
 
 	}

 	else if (d > 0){
 		x.push((-b - Math.sqrt(d)) / (2 * a));
 		x.push((-b + Math.sqrt(d)) / (2 * a));
 		console.log(x);
 	}

 	return x; 

}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
	let sum = 0;
	let averageMark;

	let newArr = marks.slice(0, 5);

	for (let i = 0; i < newArr.length; i++){
		sum += newArr[i];
		averageMark = sum / newArr.length;
	}

	if (marks.length === 0){
		return 0;
	}

	else if(marks.length > 5){
		console.log('Количество оценок больше 5-ти');
	}
		
	return averageMark;
	
    
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
	let result;

    if(new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18){
    	result = `Не желаете ли олд-фэшн, ${name} ?`;
    	return result;
    }

    else if (new Date().getFullYear() - dateOfBirthday.getFullYear() < 18){
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    	return result;
    }
}