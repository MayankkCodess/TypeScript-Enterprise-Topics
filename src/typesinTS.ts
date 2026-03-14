//------------Type Inferencing---------------
// so here ts infer automatically that it is string
let drink = "chai";//hover to see clearly

let cups = Math.random() > 0.5 ? 10 : '5'
//above ts automatically infer that it might be number and string as well

// now you will see mainly two types of errors in ts
//1. type error and 2. Syntax Error 

//---------------Type Annotation------------
// you needed to write explicitly here about type

let chaiFlavour : string = "masalaChai"; 
chaiFlavour = "gingetTea"; // overridding value here
//but you cannot do this :- chaiFlavour = 2;

// there are many other kind of type annotations also 
// and you will see them when you work in react