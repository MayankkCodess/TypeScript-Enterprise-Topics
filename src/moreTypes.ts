let response:any = 42;

//Now Forceful type assertion  , where you explicitly say believe me it is string data 
let numericLength : number = (response as string).length; 

type Book = {
    name:string; 
}; 

// suppose kijiye ye data tha local storage ke aandar (then local mein toh string mein hi save hota hai)
let bookString = '{"name":"who moved my cheese"}';
//lekin jab local se uthake laoge toh usse parse krna hoga json mein aur usse belive krna hoga ki haan yeh Book type ka data hai tab jakr tumhe properties dikengi book ki 
let bookObject = JSON.parse(bookString) as Book
;
console.log(bookObject.name); //above line mai jo kiya usse hi .name ko access kr paye ho

const inputElement = document.getElementById("username") as HTMLInputElement; 


// Chlo Ab 1. any aur 2. unknown pr bhi charcha krte hain 

let value: any; //ye any hai 
value = "chai"; 
value = [1,2,3]; 
value = 3.5; 
value.toUpperCase(); //any type mai koi error is line mai show nahi krega 

let newValue:unknown; // ye unknown hai 
newValue = "chai"; 
newValue = [1,2,3]; 
newValue = 3.5; 
// newValue.toUpperCase();// but ynha error aati hai

// so iss error se chuthkara pane ke liye - 
if(typeof newValue === 'string'){
    newValue.toUpperCase();
}

//Now typeScript mein humm tryCatch mein error ke liye kya karte hain 

try {
    
} catch (error) {// abb ynha pr ts khta hai main nahin janta error kis type ka aayega
    //toh humm iske liye kya karte hain ki 
    if(error instanceof Error){
        console.log(error.message); 
    }
    console.log("Error: " , error); 
}