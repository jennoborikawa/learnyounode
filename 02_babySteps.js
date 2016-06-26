   // » To print these instructions again, run: learnyounode print
   // » To execute your program in a test environment, run: 

   // learnyounode run program.js


   // » To verify your program, run: 
   // learnyounode verify program.js

//Baby Steps

var total = 0; 

for(var i = 2; i<process.argv.length; i++){
	total += Number(process.argv[i])
}


console.log(total); 










