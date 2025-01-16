const name="akshat"
const age=20
const game=new String("akshat")
console.log(`hello myself ${name} band age is ${age}`); //use of backticks{button on escape{`}
console.log(game.__proto__);//shows empty object
console.log(game.toUpperCase());//not change the given string
//to know more about strings fucntion go to console
// type this=>const game=new String("akshat")
//then game you will get alist then below of all fucntions
const newstring= game.substring(0,5)
console.log(newstring); //aksha
const anotherstring=game.slice(-5,4) //ksh
console.log(anotherstring);
const strname=" hitt  "
console.log(strname.trim());
const url="afhajksfhakjfnkjanfkjl"
console.log(url.replace('a','1'))//a=>1
//important fun
const array1=' a-v-v-'
console.log(array1.split('-'))//returns array by removing - as abreak

