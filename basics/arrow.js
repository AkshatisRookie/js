const arr={
    id:"ajs",
    username:function(){
        console.log(`${this.id}, welcome chi chi`);
        console.log(this); //gives all yhe global values details
    }
}
arr.id="a69"
arr.username()
console.log(this); //gives undefined
//also it works only when "this.(some object)" 
const add = (num1,num2) =>( //() this doesnot requrire return fucntions
    {username:"nak"}
)
console.log(add(1,2));
const sub = (num1,num2) =>{
     return {username:"nak"} //() we need to give return
}
console.log(sub(1,2));
