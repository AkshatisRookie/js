//slice splice
const arr=[0,1,2,3,4]
const arr1=arr.slice(1,3)
console.log(arr1)
const arr2=arr.splice(1,3)// wrong=> includes till 3
console.log(arr2)
console.log(arr)// correct=> splice returns the array till given start and end position
//but removes that part from the orginal array
//console type const arr=[1,2,3,4,4] then arr to find the functions
const myarr=[1,2,3,4]
const myarr2=[4,5,6]
//myarr.push(myarr2)
console.log(myarr);//this gives 2d array not asingle array as output 
//to avoid this use concatenate
const myarr3=myarr.concat(myarr2)
console.log(myarr3);
//sohrtcut for getting single array
const myarr3=[...myarr,...myarr2]
// to get all elements in single array by giving depth=infinity
const myarr4=[1,2,3,[4,4,3,[32424,2342,],3]]
const individualArray=myarr4.flat(3);
console.log(individualArray);
console.log(Array.isArray("akshat"));//return true or false
console.log(Array.from("aKSAHT"));//RETURN ARRAY WITH EACH LETTER
console.log(Array.from({name:"akshat"}));//return an empty array because key pair is not defined
let sc1=1
let sc2=2
let sc3=4
console.log(Array.of(sc1,sc2,sc3));//returns list