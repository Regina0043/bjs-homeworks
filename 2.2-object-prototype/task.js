//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function(){
	let palindrome = this.split('').reverse().join('').trim().toLowerCase().replace(/\s/gi, '');
	let str = this.split('').join('').trim().toLowerCase().replace(/\s/gi, '');

	if (palindrome === str){
		return true;
	}

	else if (palindrome === '' || palindrome !== str){
	 return false;
	}

};

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMar
    let average;
    let averageMark;
    if (marks.length === 0){
    	return 0;
    }

    else{
    	let sum = 0;
    	for (let i = 0; i < marks.length; i++){
    		sum += marks[i];
    		average = sum / marks.length;
    		averageMark = Math.round(average);

    	}

    	return averageMark;
    }
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
    let verdict;
    let now = new Date();
    let inputDate = birthday.split('-');
    let dayOfBirth = new Date (inputDate[0], inputDate[1] - 1, inputDate[2]);
    let majority = (31536000000 * 18) + (86400000 * 5);
    // умножаю год в миллисекундах на 18 и прибавляю 5 високосных дней в миллисекндах

   	let result = now.getTime() - dayOfBirth.getTime();

    if (result < majority){
    	verdict = false;
    }

    else if (result >= majority){
    	verdict = true;
    }

    return verdict;
}
