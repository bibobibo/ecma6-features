#! /usr/local/bin/node  --harmony
// iojs --harmony  block-scope.js

"use strict";//Global level VS Function-level

for(let index=0; index<10; index++){
  console.log(index);   // 0 1 2 3 4 5 6 7 8 9
}

//can't access the block-scoped variable
console.log(" typeof index: ", typeof index)