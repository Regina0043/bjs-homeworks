'use strict';
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    // return x;
 let d = b**2 - 4 * a * c;

 let x;

 if(d < 0){
 	x = [];
 	return x;
 }

 else if(d === 0){
 	x = [(-b - c) / a];
 	return x;
 }

 else if (d > 0){
 	x = [(-b - c) / a, (b + c) / a];
 	return x;
 }

}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
	

		let sum = 0;
		let averageMark;

		if (marks.length === 0){
			return 0;
		}

		else if(marks.length > 5){
			let newArr = marks.slice(0, 5);
			for (let i = 0; i < newArr.length; i++){
			
				sum += newArr[i];
				averageMark = sum / newArr.length;
				console.log("Количество оценок больше 5-ти");
				console.log(newArr.length);
				console.log(averageMark);
				console.log(sum);
		
			}
			return averageMark;
		}

		else {
			for(let i = 0; i < marks.length; i++){
				sum += marks[i];
				averageMark = sum / marks.length;
			}
			return averageMark;

		}

		

	
    
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
	let result;

	let today = new Date;

	

    if(today.getFullYear() - dateOfBirthday.getFullYear() >= 18){
    	result = `Не желаете ли олд-фэшн, ${name} ?`;
    	return result;
    }

    else if (today.getFullYear() - dateOfBirthday.getFullYear() < 18){
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    	return result;
    }
}