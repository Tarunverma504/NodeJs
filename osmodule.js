const os = require('os');
const freemenory = os.freemem();
console.log(`${freemenory/1024/1024/1024}`);
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.arch());