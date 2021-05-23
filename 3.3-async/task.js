const date = new Date()
const dateNow = date.getHours()+ ':'+('0' + (date.getMinutes())).slice(-2);
console.log(typeof(dateNow));
class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        const exeistId = this.alarmCollection.find(item => (item.id === id));

        if(!id){
            throw new Error('Неовозможно определить идентификатор будильник');
        }

        else if(exeistId) {
            return console.error('Такой будильник уже есть');
        }

        this.alarmCollection.push({time, callback, id});
    }

    removeClock(id){
        this.alarmCollection.find(item =>{
            if (item.id === id){
                this.alarmCollection.splice(this.alarmCollection.indexOf(item));
                return true + 'Удаление успешно совершено';
            }

            else{
                return false + 'Удаление не удалось совершить';
            }
        })
    }

    getCurrentFormattedTime(){
        return dateNow;
    }

    start(){ 
        function checkClock(alarm){
            if(alarm.time === dateNow){
                return alarm.callback();
            }
        }

        if (this.timerId === null){
         setInterval(() =>{
               const id = this.alarmCollection.reduce(item => {
                this.timerId = checkClock(item)});
        }, 5000);
        
        }
    }

    stop(){
        if(this.timerId){
            clearInterval();
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(item => {
            console.log(`Будильник ${item.id} заведен на ${item.time}`);
        })
    }

    clearAlarms(){
        clearInterval();
        this.alarmCollection.length = 0;
    }
}


const call = new AlarmClock();

call.addClock('22:30', () => console.log('Пора вставать'), 1);
call.addClock('09:01', () => console.log('Хватит спать!'), 2);
call.addClock('09:01', () => console.log('Хватит спать!'), 3);
call.removeClock(3);
//call.addClock('09:01', () => console.log('Иди умываться'));
//call.addClock('09:05', () => console.log('Вставай, а то проспишь'), 1);
call.getCurrentFormattedTime();
call.printAlarms();
call.start();
