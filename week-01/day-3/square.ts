'use strict';

{

let lineCount: number = 6; //row or column count
let string = ""; 

for (let i = 0; i < lineCount; i++) { //external loop
  for (let j = 0; j < lineCount; j++) { // internal loop
   if (i === 0 || i === lineCount -1) {
      string += "%";
   }
   else{
      if(j === 0 || j === lineCount - 1) {
         string += "%";
      }
      else {
         string += " ";
      }
   }
  }
  
  string += "\n";
    
}

console.log(string);


}




