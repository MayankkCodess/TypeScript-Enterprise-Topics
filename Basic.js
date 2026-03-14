// javascript function mai haam ek 1. function declare karte hain then uske baad 2. input lete hain /(parameter) define krte hain
//but typescript mai haam type declare karte hain in function definition and then kis type ka return krega wo bhi 
// function greet(name: string):string{// this is what you have to in typescript
    function greet(name){
    //ynha mai function se return kr de rha hu below but ts mai ek pbm hai aapko backtick use krna hoga 
    // return "Hello, ",name;
    return `Hello ${name}`; 
}

//uske baad 1. function ko call karke 2. usme value(argument) pass krdena hai
console.log(greet("hitesh")); 

