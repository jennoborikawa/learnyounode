   // » To print these instructions again, run: learnyounode print
   // » To execute your program in a test environment, run: 
   // learnyounode run program.js

   // » To verify your program, run: learnyounode verify program.js



  // prints a list of files in a given directory,
  // filtered by the extension of the files. 
  // directory name as the first argument to your program (e.g. '/path/to/dir/') and a
  // file extension to filter by as the second argument.

  // For example, if you get 'txt' as the second argument then you will need to
  // filter the list to only files that end with .txt. Note that the second
  // argument will not come prefixed with a '.'.

//
  // Keep in mind that the first arguments of your program are not the first
  // values of the process.argv array, as the first two values are reserved for
  // system info by Node.

  // The list of files should be printed to the console, one file per line. You
  // must use asynchronous I/O.




var fs = require('fs'); 

//lists is an array of filename strings returned from reading the file
var callback = function(err, list){
	//provided file extension to filter with is process.argv[3]; 
	var extension = process.argv[3]; 

	var endsWithMd = function(element){
		return (element.match("." + extension)); 
	}

	//filter checks if each value in the array passes the function 
	var filteredArr = list.filter(endsWithMd); 

	for(var i=0; i<filteredArr.length; i++){
		console.log(filteredArr[i])
	}


}

//returns a buffer obj 
fs.readdir(process.argv[2], callback); 






