const events = require("events");
const event = new events.EventEmitter();
event.on('first',()=>{console.log("First event occur")})
event.emit('first');

event.on("second",(n1,n2)=>{console.log(n1*n2);})
event.emit("second",4,5);