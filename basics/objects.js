const my=Symbol("key1") //syntax imp ques is declare sybol use it in ibject then call it?/
const user={       //object 
    name:"akshat", 
    [my]:123,
    age:30,
    email:"akjsdasdk@"
}

console.log(user.name);
console.log(user["name"]);
console.log(user[my]);
console.log(typeof my)// my is symbol when used under user it is object
user.name='aksh'//change the data
//Object.freeze(user) //freeeze the data
//++++++++++++++++funtions imp+++++++++++++++++++++++++
user.greeting=function(){
    console.log(`function operation, ${this.name},by akshat`);//imp syntax for writing value from another line to here
}
console.log(user.greeting);