function logged(username="aks"){
    if (!username){
        console.log("enter")
        return
    }
    return `my name is ${username}`
}
//console.log(logged("ays"))
function calc(val1,...num1){ //adds 23 in val1 and rest in num1
    return num1

}
console.log(calc(23,400,500))
var a =90// this input is not used for scope variable
//if locally(scoope) value is changed then globally it gests changed too
