'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    let today = new Date();

    let numPercent = percent / 100;

    let s = amount - contribution; //тело кредита
	let p = numPercent / 12; //1/12 процентной ставки
	let n = date.getMonth() - today.getMonth() + (12 * (date.getFullYear() - today.getFullYear()));//количество месяцев
    
    let result = (s * (p + p / (((1 + p)**n) - 1))) * n;

    let totalAmount = result.toFixed(2);

    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    date = Number(date);
    today = Number(today);
    totalAmount = Number(totalAmount);

    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    let greeting = `Привет, мир! Меня зовут ${name}.`;

    if(name === ''){
        greeting = 'Привет, мир! Меня зовут Аноним.';
    }

    return greeting;
}