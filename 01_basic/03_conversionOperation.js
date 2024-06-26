let score = "33abc"  // yaha 33 ke bdle 33abc likhe to bhi ye convert hoke iska datatype number bta dega
                    //
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) // ab iska type number ho jayega 

console.log(typeof valueInNumber);
console.log(valueInNumber); // ye output me NaN aayega mtlb not a number

// agar let score = null kr denge or phir datatype convert krenge number me to uska value zero btayeaga 
// agar let score = undefined kr denge or phir datatype convert krenge number me to uska value NaN btayeaga 
// agar let score = true kr denge or phir datatype convert krenge number me to uska value 1 btayeaga or false ke case me zero aayega 
 // agar let score = "hitesh" kr denge or phir datatype convert krenge number me to uska value NaN btayeaga 

 let isLoggedIn= 5; // zero likhenge to false aayega baki sb number me ye conversion true dega 
 
 //let isLoggedIn=""   empty string me false aayega lekin "shubham" me true aayega 

// NUMBER KO BHI ISI TRAH STRING ME CONVERT KAR SKTE H


 let conversion = Boolean(isLoggedIn)
 console.log(conversion);