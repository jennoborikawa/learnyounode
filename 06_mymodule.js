   // » Export a single function that takes exactly the arguments described.

   // » Call the callback exactly once with an error or some data as described.

   // » Don't change anything else, like global variables or stdout.

   // » Handle all the errors that may occur and pass them to the callback.



//assign your func to the module.exports objec, overwriting what is already there. 

//data is an array of files


var exportFunc = function(dirName, extension, callback) {

	var fs = require('fs'); 

	//returns a buffer obj 
	fs.readdir(dirName, callback); 

	//lists is an array of filename strings returned from reading the file
	// var callback = function(err, list){
	// 	//provided file extension to filter with is process.argv[3]; 

	// 	if(err) return callback(err,data); 

	// 	var extension = extension; 

	// 	//filter checks if each value in the array passes the function 
	// 	for(var i=0; i<filteredArr.length; i++){
	// 		console.log(filteredArr[i])
	// 	}
	// 	var filteredArr = list.filter(endsWithMd); 


	// 	var endsWithMd = function(element){
	// 		return (element.match("." + extension)); 
	// 	}
	// }
}



// var callback = function (err, list){
// 	var extension = process.argv[3]; 

// 	console.log(list); 

}


module.exports = exportFunc; 