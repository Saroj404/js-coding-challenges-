
const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7];

const chunked = _.chunk(numbers, 3);

console.log(chunked);