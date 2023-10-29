const name="devraj"
const repoCount= 50
console.group(name+repoCount+"Value")//outdated way
//`` backtics are used in modern langae it creates placeholder
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)//modern way 


const gameName=new String('devraj')
console.log(gameName[0]);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('e'))

const anotherString=gameName.slice(-8,4)
console.log(anotherString);


const newStringOne="     devraj    "
console.log(newStringOne);
console.log(newStringOne.trim());//trim removes extra white spaces

const url="httpss://devraj.com/devraj"
console.log(url.replace('%20','-'));

console.log(url.includes("devraj"))

console.log(gameName.split(' '))

