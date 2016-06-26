   // » To print these instructions again, run: learnyounode print
   // » To execute your program in a test environment, run: 
   // learnyounode run program.js

   // » To verify your program, run: learnyounode verify program.js



  //my first async I/O

  //   Write a program that uses a single asynchronous filesystem operation to
  // read a file and print the number of newlines it contains to the console
  // (stdout), similar to running cat file | wc -l.

  // The full path to the file to read will be provided as the first
  // command-line argument.

//load the module/library 
var fs = require('fs');

//callback func always takes in err and data parameters 
	//error is in case there's an error
	//data is what's returned (it's a string from utf8) from readFile
//split the data string into arrays by the new lines 
//count array elements, -1 so it's just the new lines (excluding last one)
//log number of new lines 
var callback = function(err, data){
	var strtoArrSubString = data.split('\n'); 
	var numNewLines = strtoArrSubString.length-1; 
	console.log(numNewLines); 
}


//read process.argv[2] file, change returned buffter to a string with 'utf8' argument, when complete execute callback func. 
fs.readFile(process.argv[2], 'utf8', callback); 




   