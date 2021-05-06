//Задача 1//
class PrintEditionItem{
	constructor (name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;


	}

	fix(){
		 return this.state * 1.5;
	}

	

	set state (arg){
		if (arg < 0){
			 this._state = 0;
		}

		else if (arg < 100){
			 this._state = 100;
		}

		else{
			 this._state = arg;
		}
	}

		get state (){
		return this._state;
	}


	
}
const printEditionItem = new PrintEditionItem('Николай Гоголь. Полное собрание повестей в одном томе', 2019, 672);

console.log(printEditionItem.name);
console.log(printEditionItem.releaseDate);
console.log(printEditionItem.type);
console.log('----------');

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount){

	super(name, releaseDate, pagesCount);
	this.type = 'magazine';
	}
}

const magazine = new Magazine('Последний выпуск журнала "Time"', 2021, 60);

console.log(magazine.name)
console.log(magazine.releaseDate)
console.log(magazine.state);
console.log('----------');

class Book extends PrintEditionItem{
	constructor (author, name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

const book = new Book('А. Сапковский', 'Меч Предназначения', 1992, 384);

console.log(book.name);
console.log(book.releaseDate);
console.log(book.pagesCount);
console.log(book.author);
console.log('----------');

class NovelBook extends Book{
	constructor (author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

const novel = new NovelBook('А. Сапковский', 'Меч Предназначения', 1992, 384);
console.log(novel.name);
console.log(novel.releaseDate);
console.log(novel.pagesCount);
console.log(novel.author);
console.log('----------');

class FantasticBook extends Book{
	constructor (author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

const fantastic = new FantasticBook('Джон Толкин', 'Властелин колец', 1954, 2093);

console.log(fantastic.name);
console.log(fantastic.releaseDate);
console.log(fantastic.pagesCount);
console.log(fantastic.author);
console.log('----------');

class DetectiveBook extends Book{
	constructor (author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

const detective = new DetectiveBook('Агата Кристи', 'Десять негритят', 2019, 256);

console.log(detective.name);
console.log(detective.releaseDate);
console.log(detective.pagesCount);
console.log(detective.author);

detective.state = -1000;
console.log(detective.state);
console.log('----------');

//Задача2//


class Library{
	constructor(name){
		this.name = name;
		this.books = [];
	}

	addBook(book){
		if(book._state > 30){
			this.books.push(book);

		}
	}
		
	findBookBy(type, value){
		for (let bk of this.books){
			if(bk[type] === value){
				 return bk;
			}

		}

		return null;
			
	}

	giveBookByName(BookName){
		for (let book of this.books){
			if (book.name === BookName){
				let index = this.books.indexOf(book);
				this.books.splice(index, 1);
				return book;
			}
		}

		return null;
	}
}

const library = new Library('Библиотека имени Ленина');

library.addBook(new DetectiveBook('Артур Конан Дойл', 'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе', 2019, 1088));
library.addBook(new FantasticBook('Аркадий и Борис Стругацкие', 'Пикник на обочине', 1972, 168));
library.addBook(new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138));
library.addBook(new Magazine('Мурзилка', 1924, 60));
library.addBook(new DetectiveBook('Морис Леблан', 'Остров тридцати гробов', 1919, 224));


console.log(library.books);
console.log(library.findBookBy('name', 'Властелин колец'));
console.log(library.findBookBy('releaseDate', 1924).name); //"Мурзилка"
console.log(library.findBookBy('releaseDate', 1919).name);

console.log('Количество книг до выдачи: ' + library.books.length);
console.log(library.giveBookByName('Машина времени'));
console.log('Количество книг после выдачи:' + library.books.length);
console.log(library.giveBookByName('Остров тридцати гробов'));


//Задача3//
class StudentLog{
	constructor(name){
		this.name = name;
	}

	getName(){
		return this.name;
	}

	addGrade(grade, subject){
		if (typeof grade === 'string' || grade > 5 || grade < 1) {
			return `Вы пытались поставить оценку '${grade}' по предмету '${subject}'. Допускаются только числа от 1 до 5.`;
		}

		else if (this.hasOwnProperty(subject) === false){
			this[subject] = [];

			this[subject].push(grade);
		}

		else if(this.hasOwnProperty(subject) === true){
			this[subject].push(grade);
		}

		return this[subject].length;

	}

	 getAverageBySubject(subject){

		if (this.hasOwnProperty(subject) === false){
			return 0;
		}

			let sum = 0;
			let result;

			for (let i = 0; i < this[subject].length; i++){
				sum += this[subject][i];
				result = sum / this[subject].length;
			}
			return result;

		}

		getTotalAverage(){
			if (Object.keys(this).length === 0){
				return 0;
			}
			let totalAverage;
			let sumMark = 0;
			let average;

			for (let mark in this){
				if(typeof this[mark] === 'object'){
					for (let i = 0; i < this[mark].length; i++){
						sumMark += this[mark][i];
						average = sumMark / this[mark].length;
						
					}
				
					totalAverage = average/(Object.keys(this).length - 1);
				
				}

			}

			return totalAverage;
		}

	}


	const log = new StudentLog('Роман Беглов');

	console.log(log.getName());

	log.addGrade(3, 'algebra');
	log.addGrade(5, 'algebra');

	log.addGrade(5,'history');
	log.addGrade(5, 'history');

	console.log(log.getAverageBySubject('algebra'));
	console.log(log.getAverageBySubject('history'));

	console.log(log.getTotalAverage());