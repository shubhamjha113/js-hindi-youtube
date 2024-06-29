const name ="hitesh"
const repocount = 50
// console.log(name + repocount);

// console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('shubham') // new keyword use krne se ye string bn jayega and array ki trah iska position bhi acees kr skte h hm  
// console.log(gameName); 
// console.log(gameName[0]);  //s
// console.log(gameName[3]);   

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newstring = gameName.substring(0,5) // isko negative start nhi de skte h 
console.log(newstring);

const anotherString = gameName.slice(-7,3)   // isko negative start de skte h 
console.log(anotherString);

const newstringOne = "     shubham       "
console.log(newstringOne);          //        shubham
console.log(newstringOne.trim());   // shubham     start end dono trime kr dega 
console.log(newstringOne.trimStart());//shubham     start trim krega 
console.log(newstringOne.trimEnd());  //       shubham   end trim krega 

const url = "http/.shubham.kumar"
console.log(url.replace('.','-'));// http/shubham-kumar               // isse koi cheez replace kr skte h 

console.log(url.includes('shubham'));  // true
console.log(url.includes('dhoni'));  // false

console.log(url.split('.'));  // isse hum split kr skte h 
console.log(url.blink());    //<blink>http/.shubham.kumar</blink>   ye o/p dega ye 

console.log(url.bold());    //<b>http/.shubham.kumar</b>
console.log(gameName.concat()); //shubham
