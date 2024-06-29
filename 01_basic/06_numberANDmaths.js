const score = 400
console.log(score);

const balance = new Number(100)  // ab iska data type number he hoga 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));    // decimal ke baad kitne point tk answer dega 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(6));  // total utne digit tk precise krke dega 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // indian value me change kr dega ye comma lgake 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));         // upper wala value lega
console.log(Math.floor(4.9));        // lower value lega 

console.log(Math.sqrt(4.69));        

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // ye  0 or 1 ke beech me value dega  
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // 1 se bada number chahiye to +1 hua last me 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)   // yaha hmko min 10 se upper he number chahiye to + min kiye 