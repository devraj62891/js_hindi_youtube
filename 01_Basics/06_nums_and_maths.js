const score=400;
// console.log(score);
const balance=new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2))//precision value

const otherNumber=23.8966
// console.log(otherNumber.toFixed(1))
// console.log(otherNumber.toPrecision(2))

const hundreds=1000000
// console.log(hundreds.toLocaleString());//returns us standard comma
// console.log(hundreds.toLocaleString('en-IN'));//returns Indian standard comma

//**************************Maths*********************** */

console.log(Math);
console.log(Math.abs(-4));//changes all values to positive
console.log(Math.round(4.6));

console.log(Math.floor(4.2));//takes lower value
console.log(Math.min(4,3,5,6));
console.log(Math.max(4,3,5,6));

console.log(Math.random());//it will always gives vlaue between 1 and 0
console.log((Math.random()*10)+1);

const min=10;
const max=20;
Math.random() *(max-min+1)+min;





