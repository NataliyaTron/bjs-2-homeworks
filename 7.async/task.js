// Задача 1. Будильник-колыбельная

class AlarmClock {
  constructor(){
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback){
    if(!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    } else if (this.alarmCollection.find(clock => clock.time === time)) {
      return console.warn('Уже присутствует звонок на это же время');
    }
    return this.alarmCollection.push({callback, time, canCall() = true});
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0,5);
  }

  start() {
    let checkClock = (clock) => {
      let alarm = this.getCurrentFormattedTime();
      if (clock.time === alarm) {
        return clock.callback();
      }
    }

    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach(clock => checkClock(clock));
      }, 1000);  
        }
        return;
    }

  stop(){
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach(clock => canCall() = true)
  }

  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  }
}
