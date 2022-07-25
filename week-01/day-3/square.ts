'use strict';

{

let lineCount: number = 6;
let string = "";

for (let i = 0; i < lineCount; i++) {
  for (let j = 0; j < lineCount; j++) {
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




