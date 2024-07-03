const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // current context ko refer kr rhe the to this keyword ka use krenge 
        console.log(this);   
        /*  output of console.log(this) is below 
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
  */   
    }

}

// user.welcomeMessage()
// user.username = "sam"   //ab sam aa jayega username ke jagah update ho jayega 
// user.welcomeMessage()

// console.log(this);   avi hm node environment ke ander h to ye o/p dega {}  empty object 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  ye undefined o/p dikhayega kyuki ye function ke ander this kam nhi krega bs obj ke ander kam krega 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  // undefined 
// }

// const chai =  () => {  // ye arrow fn h kyuki paraenthesis ke baad arrow de denge bs ho gya arrow fn but isme bhi undefined he btayega this keyword ko  
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {           ye hua basic arrow fn 
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2       //isko implicit return bolenge 

// const addTwo = (num1, num2) => ( num1 + num2 )      // 

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()