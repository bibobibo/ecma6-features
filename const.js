#! /usr/local/bin/node  --harmony

'use strict';
 
function foo() {
   const con1 = 3.141;
   if (con1 > 3) {
      const con2 = 1.414;
      console.log(con1); // prints 3.141
      console.log(con2); // prints 1.414
   }
   console.log(con1); // prints 3.141
   try {
      console.log(con2);
   } catch(ex) {
      console.log('Cannot access con2 outside its block');
   }
}

foo();