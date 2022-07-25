'use strict';

let lineCount: number = 4;
let pyramid: string = ""

for (let i = 0; i <= lineCount; i++) {
  
    for (let x = 0; x <= lineCount; i++)  {pyramid +=""}
    
    for (let j: number = lineCount - i; j >=0; j--) {
    
        
    pyramid +=" * "
        
    }
  pyramid += "\n"  
    
}
console.log(pyramid);
