// union simply means - like when you want both , like if you want no of subscribers of any 
// then 10 just means 10 Subscriber but , we want to write // '10M' then what 
// so we use union in this case 


let subs: number | string;//Union

//real life usecase - just like enums (making our own data types)
let apiRequestStatus : 'pending'|'success'|'error' = 'pending'; 

// above we have declared Union types 
// when we try to override with diff value from three
apiRequestStatus = 'success'


const orders = ['12','13','14','16']; 
//above it is showing {const orders: string[]; }

// let currentOrder; //here it is showing (any) as a type

let currentOrder: string | undefined;
//Intersting Case below - 

for(let order of orders){
    if(order === '28'){
        currentOrder = order;
        console.log(order); 
        break;
    }
}

//because of - any :- you can do below
// currentOrder = 42;
// so to avoid above ,  mention - string as type explicitly in currentOrder

//one more - it will still show error after doing all above so you have to do union with undefined explicitly othere wise below it will give error 
//kyunki jaroori nahi hai ki loop chale aur usme value assign ho 


console.log(currentOrder); //and here it is showing union with this - string|undefined