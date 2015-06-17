#! /usr/local/bin/node  --harmony --harmony_generators

'use strict';

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

let it = gen();

for (let i of it){
    console.log(i); // outputs 1 2 3   
}

let it2 = gen();
console.log(it2.next()) // { value:0, done:false }
console.log(it2.next()) // { value:1, done:false }
console.log(it2.next()) // { value:2, done:false }
console.log(it2.next()) // { value:undefined, done:true }
