const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
    // 이렇게 method도 선언할 수 있나보다. function이 아니다?!
    log(msg){
        this.emit('message',{id:uuid.v4(), msg});
    }
}

module.exports = Logger;
