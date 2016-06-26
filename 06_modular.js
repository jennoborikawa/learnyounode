   // » To print these instructions again, run: learnyounode print
   // » To execute your program in a test environment, run: learnyounode run
   //   program.js
   // » To verify your program, run: learnyounode verify program.js



//create two files 

//print a list of files in a given directory 
//filtered by the extension 
//first argument: directory name 
//second argument: extension filter 
//print the list of files (one file per line) to the console
//asynchoronous I/O 

//must write a module file to do most of the work. 
//module must export a single function that takes 3 arguments: 
	//directory name, filename extension string, callback function (this order)
	//filename extension argument: must be the same as what was passed to your program.  
		//no regex or prefix with . ; only pass it to your module where you can do what you need to make your filter work. 

//the callback function must be called using the (err, data) 
//data will be your filtered lists of files, as an array. 

//fs.readdir(); 

//no printing directly to the console from the module file; only from original program; 



var myModule = require('./myModule.js'); 

myModule(process.argv[2], process.argv[3], callback); 


myModule.readdir(process.argv[2], callback)





var callback = function(err, list){
		//provided file extension to filter with is process.argv[3]; 

		if(err) return callback(err,data); 

		var extension = extension; 

		//filter checks if each value in the array passes the function 
		for(var i=0; i<filteredArr.length; i++){
			console.log(filteredArr[i])
		}
		var filteredArr = list.filter(endsWithMd); 


		var endsWithMd = function(element){
			return (element.match("." + extension)); 
		}
	}








