
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

console.log(typeof null);  // datatype object aayega null ka 

console.log(typeof hero);    // datatype object aayega 

console.log(typeof myFunction);  // function aayega 