const chalk = require('chalk');
const validate = require('validator');
const res = validate.isEmail('Vermatarun4305@gmail.com');
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));
