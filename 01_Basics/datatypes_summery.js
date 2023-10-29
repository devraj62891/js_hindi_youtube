//#premitive datatypes-
/*
7 types= String Number Boolean null undefined Symbol BigInt 
*/
//#Reference types or Non premitive data types
/*
Array, Objects ,Functions
*/

let userEmail; //this will remain undefined
//symbol
const id=Symbol('123')
const anotheId=Symbol('123')
console.log(id==anotheId);

const heros=["shaktiman", "naagraj", "doga"]
let myObj={
    name: "devraj",
    age: 22,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myObj);



//***************************** */
//memory-- two types= Stack(premitive), Heap(non premitive)
let myYoutubename="hitesh.com"
let anothername=myYoutubename

console.log(anothername);
