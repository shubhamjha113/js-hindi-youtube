//var c = 300  // yaha agar if ke ander kuch or rhega c ka value to wahi print hoga    
let a = 300
if (true) {   
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// if ke ander wala hua block scope and uske bahar hua global scope . global scope me jo likhenge wo block scope ke liye available hoga 

// console.log(a);    ye 300 he print krega kyuki global scope me a 300 h 
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){    // two one se access kr skta h kyuki uske liye global scope one he h 
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  ye to fn two me tha bahar kaise access hoga 

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  scope se bhaar h ye 
}

// console.log(username);    scope se bhaar h ye 



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   // ye error nhi dega or o/p 6 dega 

function addone(num){
    return num + 1
}



addTwo(5)        // ye error de dega kyuki ye fn ko variable me store kiye h isiliye 
const addTwo = function(num){
    return num + 2
}