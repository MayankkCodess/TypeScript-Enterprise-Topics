function getChai(kind:string|number){
    //so type narrowing khti kya hai - ki aap pata lagao aapka data hai kis type ka aur uske basis pr app hamko return karo

    //so like aap javascript ka typeof use kar sakte ho.. 
    // so isse hoga kya aapko pata chal jayega custom applications mai ki kis type ke suggestions dene hain

    // return `Hello, this is you ${kind.} of chai..`; 
    //above you see , ts is confused to show which properties as string or number , now below you get clarity 

    if(typeof kind === "string"){
        return `Making ${kind} chai`;/// here check . properties , you will see string related
    }
    return 'Chai order ${kind.}';
}

// type narrowing mai aap truthiness bhi check karte ho
 // ki agar msg aaya hai 
function serveChai(msg?: string){
   if(msg){
    return `your ${msg} chai`; 
   }
   return 'Serving our default masala chai'; 
}

// like ek aur example dekhte hain exhausted checks ka 
function orderChai(size : 'small'|'medium'|'large'| number){
     if(size ==='small'){
        return `give cutting chai...`; 
     }
     if(size === 'medium' || size === 'large'){
        return `provide extra chai... `;
     }
     return `give cutting chai with amount ${size}`;//hover - to see what happens to variable
}

// One more intersting instanceof example 
class KulhadChai{
    serve(){
        return `Serving kulhadChai..`
    }
}
class Cutting{
    serve(){
        return `Serving cutting chai..`
    }
}
// know its working like how class can declare inside function as paramter and how it all working 
function serve(chai:KulhadChai|Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
    //it will catch below as chai.serve() is from Cutting class
    return chai.serve();
}


// Now Interstingly typeScript aapko ek super power deta aa khud ke type banane ki aur wnha pr ye type guard or type checking kafi intersting ho jata hai 

// isi type se haam api ke response handle karne ke bhi types banate hain
type ChaiOrder = {
    type:String;
    sugar:number;
}

// like tum dekh sakte ho data zo aarha hai woh toh any type ka hai but jab iss function se return hoke niklega toh woh Chaiorder type ka hi hoga 

function isChaiOrder(obj:any):obj is ChaiOrder{
    // ts ko isiliye production friendly bola jata jaise here typeChecking level
 return(
    typeof obj ==='object' && 
    obj !== null && 
    typeof obj.type === 'string' &&
    typeof obj.sugar === 'number'
 )
}
//Above Code Explanation:- below 
//  1. typeof obj === 'object' Ensures: obj must be an object (not string, number, boolean)

//  2. obj !== null - Now we ensure it's a real object

//  3. typeof obj.type === 'string' Checks: object must have a type property and it must be a string

//  4. typeof obj.sugar === 'number' Checks: object must have sugar and it must be a number

//  So What is Happening Overall?
//  You are manually validating structure of object at runtime

//  If ALL conditions pass → return true
//  Else → return false


//Another Example :- 

//below custom types hain not limited to string , number only 
type MasalaChai = {type:"masala" , spiceLevel:number};
type GingerChai = {type:"ginger", amount :number};
type ElaichiChai = {type:"elaichi", aroma :number};

type Chai = MasalaChai | GingerChai | ElaichiChai ; 

function MakeChai(order:Chai){
    switch(order.type){
        case "masala" : 
            return "Masala Chai"; 
            break; 
        case "ginger" : 
            return "Ginger Chai"; 
            break; 
        case "elaichi" : 
            return "Elaichi Chai"; 
            break; 
    }
}

// Below is just why we use unknown instead of any 

// function isStringArray(arr:unknown): arr is string[] {

// }