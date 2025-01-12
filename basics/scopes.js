add(1) //no error
function add(value){
    console.log(value+1)
}

add2(1)
const add2=function(val){ //gives error coz declare kardiya inside constant
    console.log(val+1)
}