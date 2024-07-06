
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){        // array ka element return krega ye 
//     console.log(val);
// } )

// coding.forEach( (item) => {             // arrow function 
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);              // fn declare krke krenge print 
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);    // isse acces kr skte h sbka property jaise language name dene se teeno object ka language name  print ho jayega 
} )
