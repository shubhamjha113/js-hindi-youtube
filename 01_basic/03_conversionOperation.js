let score = "33abc"  // yaha 33 ke bdle 33abc likhe to bhi ye convert hoke iska datatype number bta dega
                    //
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score) // ab iska type number ho jayega 

// console.log(typeof valueInNumber);
// console.log(valueInNumber); // ye output me NaN aayega mtlb not a number

// agar let score = null kr denge or phir datatype convert krenge number me to uska value zero btayeaga 
// agar let score = undefined kr denge or phir datatype convert krenge number me to uska value NaN btayeaga 
// agar let score = true kr denge or phir datatype convert krenge number me to uska value 1 btayeaga or false ke case me zero aayega 
 // agar let score = "hitesh" kr denge or phir datatype convert krenge number me to uska value NaN btayeaga 

 let isLoggedIn= 5; // zero likhenge to false aayega baki sb number me ye conversion true dega 
 
 //let isLoggedIn=""   empty string me false aayega lekin "shubham" me true aayega 

// NUMBER KO BHI ISI TRAH STRING ME CONVERT KAR SKTE H


 let conversion = Boolean(isLoggedIn)
 //console.log(conversion);

 // *******************OPERATIONS***************

let value = 3
let negValue = -value
//console.log(negValue);  // -3
//console.log(2**3);  8
//console.log(2 +2 );  2**3 ye isse power aa jayega 

let str1="hello"
let str2=" shubham"
let str3= str1 + str2  // yaha + ho skta h lekin - nhi hoga 
//console.log(str3);   hello shubham 

// console.log("1" + 2);
// console.log(1+ "2");
// console.log("1" + 2 +2 ); // pehle string rha to string ke trah treat hoga
// console.log(1 + 2 + "2");   // pehle plus wala operation ho jayega phir string ki trah add ho jayega 
// console.log(+true);   1 aayega 
// console.log(+"");   0 aayega 
 let x=100;
 let y=++x;
 let z= x++;
 console.log(x,y,z); // 102 101 101 