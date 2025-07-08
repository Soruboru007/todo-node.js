const arithmatic = require('./arithmatic');
const stringConcat = require('./string-concat');

const concat = stringConcat.concat('Hello','World');
const sum = arithmatic.add(5,5);
const deff = arithmatic.subtract(10,5);
console.log('計算結果:',sum);
console.log('計算結果:',deff);
console.log('kok',concat);