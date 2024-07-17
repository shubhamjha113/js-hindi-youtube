// promises creation 
const promiseOne = new Promise(function(resolve,reject){
    // do an async task 
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()        // ye jb execute hoga tb ye connect hua h .then se 
    }, 1000)
})

promiseOne.then(function(){               // .then ka direct connection hota h resolve ke sath 
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){             // resolve ke ander jo bhi parameter pass krenge wo yaha mil jayega 
    console.log(user);          // o/p = {username: "Chai", email: "chai@example.com"}
})


promiseFour
.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {                 // resolve wala part .then me aayega  
   console.log(username);
}).catch(function(error){           // reject wala part .catch me aayega 
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))    // finally ko default man skte h ye hmesha execute hoga 


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){        // async await thora wait krta h kam ke hone ka warna wahi error de deta h 
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))       // ye sbse pehle aa jayega o/p me  kyuki fetch se microtask queue ya priority queue conect rhta  h to wo sbse pehle execute hoga 

// promise.all
// yes this is also available, kuch reading aap b kro.