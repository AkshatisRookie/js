// data is divide on the way how they are stored in memoery are PRIMITIVE AND NONPRIMITIVE
/*PRIMITIVE-7
:STRING,NUMBER,BOOLEAN,null,undefined,symbol,BigInt*/
// refernce(nonprimitve)
//Js is dynamically typed coz we dont need to define the tyoe while conversion\
//array,objects,functions
const bigNumber=2765237n //n means big number
const hey=['age','akshat']
let my={
    name:'hitesh'
    //age:'22'
}
const myfucntion=function(){
    console.log("hi")
}
//stack(primitve) heap(non primitive)
let name1="akshat"
let anothername=name1 //copy hota file
anothername='nullo'
console.log(anothername)
let userone={
    email:"afgbajhfghak"
}
let user2=userone //refernce milta joki heap memory ko point krta
user2.email="abcd@"
console.log(userone.email)