// Haam mistakes krenge aur phir dekhenge ki interface ki need kaise padi

type ChaiOrder = { type: string; sugar: number; strong: boolean };

// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

// function serverChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

// ab dekhiye ynha pr dono function mai cheeze repeat ho rahi hai
// toh iske liye sabse badhiya hai ki chalo ek type create krte hain

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serverChai(order: ChaiOrder) {
  console.log(order);
}


interface CupSize{
    size:"small" | "large"
}

class Chai implements CupSize {
    size : "small" | "large" = "large"; 
}

// Ek aur Imp concept hai Intersection ka --- 

type BaseChai = {teaLeaves : number} 
type Extra = {masala :number }

// ab aap dono above ko merge krke ek new type bhi bana sakte ho 
type MasalaChai = BaseChai & Extra ; // iska means hai ab dono hi use honge niche cup mai

const cup : MasalaChai = {
    teaLeaves : 2,
    masala : 1
}

// haam optional values bhi dal sakte hain 
type User = {
    username : string; 
    bio?:string; // bio use krna optional hai , lekin kro toh string ho jaise ex - below
}

const u1 : User = {username :"Hitesh"}
const u2: User = {username:"Hitesh" , bio:"Hitesh.ai"}; 

// ek readonly implementation bhi dekho 

type Config = {
    readonly appName:string 
    version:number
}

const cfg : Config = {
    appName:"Masterji",
    version:1
}

// cfg.appName = "ChaiCode"; //ynha pr error dega kyunki readonly mai ek brr value assign krne ke baad dubara assign nahi krsakte

