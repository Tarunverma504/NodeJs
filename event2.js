const events = require('events');
const { emit } = require('process');
const event = new events.EventEmitter();
const first_event= function(n1,n2){
    console.log(n1*n2);
    event.emit("second");
}
const second_event = function(){
    console.log("Second Event is Triggered");
}
event.on('first',first_event);
event.on('second',second_event);
event.emit('first',4,5);


