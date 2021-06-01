
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
       const newAlarms = this.alarmCollection.filter(item => item.id !== id);
       if(newAlarms){
        this.alarmCollection = newAlarms;
        return true + '' + 'Удаление успешно совершено';
       }

       else if (!newAlarms){
        return false + '' + 'Удаление не удалось совершить';
       }
    }

    getCurrentFormattedTime(){
        const date = new Date()
        const dateNow = date.getHours()+ ':'+('0' + (date.getMinutes())).slice(-2);
        return dateNow;
    }

    start(){ 
        const checkClock = (alarm) =>{
            if(alarm.time === this.getCurrentFormattedTime()){
                return alarm.callback();
            }
        }

        if (this.timerId === null){
         this.timerId = setInterval((() => {
            this.alarmCollection.forEach(item => {
                checkClock(item);
               })
        }), 5000);
        
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

call.addClock('16:19', () => console.log('Пора вставать'), 1);
call.addClock('09:01', () => console.log('Хватит спать!'), 2);
call.addClock('09:01', () => console.log('Хватит спать!'), 3);
call.removeClock(3);
//call.addClock('09:01', () => console.log('Иди умываться'));
//call.addClock('09:05', () => console.log('Вставай, а то проспишь'), 1);
call.getCurrentFormattedTime();
call.printAlarms();
call.start();
console.log(call);
