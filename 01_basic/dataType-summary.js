
const score = 100
const scorevalue = 100.3

const isLoggedIn= false
const outsideTemp = null

const Id=Symbol('123')
const anotherId = Symbol('123')

console.log(Id == anotherId ); // false    dono same nhi hoga 

const BigInt= 8558552266622n   // n  lgane se wo automatic big int ho jayega

// reference(non premitive)
// array, object, functions

const hero= ["shaktiman" , "nagarjuna"]

let myObj = {
        name: "shubham",
        age: 22,

}

let myFunction = function(){            // declaration  of function
            console.log("hello shubham");
}

// console.log(typeof null);  // datatype object aayega null ka 

// console.log(typeof hero);    // datatype object aayega 

// console.log(typeof myFunction);  // function aayega 

//*******************TYPES OF MEMORY*******************************
/* 
   TWO TYPES OF MEMORY 
   1. stack memory  --> used for primitive data types     isme ek copy milti h 
   2. heap memory --> used for non-primitive data types     isme original value ka reference milta h mtlb jo bhi change krenge wo original value me change hoga 
*/

let myYoutubeName = "hiteshchowdhary"
let anotherName = myYoutubeName
anotherName="chaiaurcode"

// console.log(myYoutubeName);   hiteshchowdhary
// console.log(anotherName);      chaiaurcode

let userOne = {
        email: "sjha3@gmail.com",
        upi:"user.sjha"
}
let userTwo = userOne
userTwo.email="1123@google.com"

console.log(userOne.email)
console.log(userTwo.email)
