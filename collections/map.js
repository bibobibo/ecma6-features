#! /usr/local/bin/node  --harmony

'use strict';

console.log('Map.prototype: ', Object.getOwnPropertyNames(Map.prototype) );

var m = new Map();
var o = {
    x: 'blah'
};

m.set(o, 'something to store');
console.log(m.has(o)); // true
console.log(m.get(o));

//下面的代码在firefox中运行正常，在nodejs v0.12.4 中还有bug
// for (let [k, v] of m){
//     console.log(k, v);   
// }