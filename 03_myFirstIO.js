   // » To print these instructions again, run: learnyounode print
   // » To execute your program in a test environment, run: 

   // learnyounode run program.js

   // » To verify your program, run: 
   // learnyounode verify program.js


//my first I/O 


  //    Write a program that uses a single synchronous (blocking) filesystem operation to
  // read a file and print the number of newlines (\n) it contains to the
  // console (stdout), similar to running cat file | wc -l.

  // The full path to the file to read will be provided as the first
  // command-line argument (i.e., process.argv[2]). You do not need to make
  // your own test file.

var fs = require('fs'); 

//fs.readFileSync returns a Buffer object containing the complete contents of the file 
//Buffer objects represent arbitrary arrays of data in Node
//Buffer objects can be converted to strings by calling toString() on them-- var str = buf.toString(); 

var contents = fs.readFileSync(process.argv[2]); 

var strToArrSubStrings = contents.toString().split('\n'); 

var numNewLines = strToArrSubStrings.length-1;

console.log(numNewLines); 



