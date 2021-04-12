'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    console.log(percent);
    console.log(contribution);
    console.log(amount);
    console.log(date);

    let today = new Date();

    let numPercent = percent / 100;

    let s = amount - contribution; //тело кредита
    let p = numPercent / 12; //1/12 процентной ставки
    let n = date.getMonth() - today.getMonth() + (12 * (date.getFullYear() - today.getFullYear()));//количество месяцев
    
    let result = (s * (p + p / (((1 + p)**n) - 1))) * n;

    let totalAmount = result.toFixed(2);

    let thisYear = today.getFullYear();
    let lastYear = date.getFullYear();

    totalAmount = Number(totalAmount);

    if(typeof percent === 'undefind' || percent <= 0){
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }

    else if (typeof contribution === 'undefind' || contribution < 0){
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
    }

    else if (typeof amount === 'undefind' || amount <= 0){
        return `Параметр "Сумма кредита" содержит непраильное значение ${amount}`;
    }

    else if (lastYear < thisYear){
         return `Параметр "Дата завершения оплаты кредита" содержит неправильное значение ${date}`;
    }



    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    let greeting = `Привет, мир! Меня зовут ${name}.`;

    if( name === '' || typeof name === 'undefind' || typeof name === null){
        greeting = 'Привет, мир! Меня зовут Аноним.';
    }

    return greeting;
}
