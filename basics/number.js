const balance=new Number(100)//Number:100 as an object
console.log(balance.toString().length);
console.log(balance.toFixed(2));// used in e-comnmerce website to give the user exact vlues after two decimal places
//Math.random() gives [0,1] ke beech ki a number
console.log(Math.floor(Math.random()*10)+1);//insure value in never 0
//if we need to define max .min
const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min+1))+min);
//max- min can give zero so add min value
//then still addd min at last if math.floor gives values lesser than min so add min again