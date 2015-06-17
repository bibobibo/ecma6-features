#! /usr/local/bin/node  --harmony
// iojs --harmony  block-scope.js

"use strict";//Global level VS Function-level

var i = 0;
for(let i=0; i<10; i++){
  console.log(i);   // 0 1 2 3 4 5 6 7 8 9
}
console.log(i)