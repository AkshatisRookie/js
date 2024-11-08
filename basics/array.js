//slice splice
const arr=[0,1,2,3,4]
const arr1=arr.slice(1,3)
console.log(arr1)
const arr2=arr.splice(1,3)// wrong=> includes till 3
console.log(arr2)
console.log(arr)// correct=> splice returns the array till given start and end position
//but removes that part from the orginal array