// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se problem hota h usko htane ke liye iife ka use krenge (afi padhenge isko )

// generally ek or small bracket ke ander likhte h isko 

(function chai(){
    // named IIFE bolenge isko kyuki name h isme 
    console.log(`DB CONNECTED`);
})();    // yha first code end krne ke liye semi coln lgayenge 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);             // unnamed iife hua ye 
} )('hitesh')
