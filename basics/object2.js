//const tinder=new Object() non singelton object
const tinder={}
tinder.id='abcd'
tinder.name='aksh'
tinder.isLoggedin=false

console.log(Object.keys(tinder)) //list for data manipulation
console.log(Object.values(tinder))
//destructuring of objects
const {name:fullname}=tinder
console.log(fullname); //name changed 
const func=({name})=>{ //arrow loops FUNCTION

}
