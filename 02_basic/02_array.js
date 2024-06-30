const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);   //  O/P =  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]    ye sbko array element ki trah add kr lega 
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)    ye bhi upper wala jaisa he same kam krega  
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]   // spread operator h ye sbko combina krke add kr lega agar 2 ke bdle 3 array rha to usko  v add krega 

// console.log(all_new_heros);    // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]    ye iss trah add krega 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 
/*
o/p   [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
 */   // sbko flat kr dega 



console.log(Array.isArray("Hitesh"))  // false 
console.log(Array.from("Hitesh"))    // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting          ye convert nhi kr payega to empty array de dega 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   //[ 100, 200, 300 ]    jitna likhenge sbko combine krke array de dega 