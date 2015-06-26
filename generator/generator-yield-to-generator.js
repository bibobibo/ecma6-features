#! /usr/local/bin/node  --harmony

'use strict';

function* foo() {
    yield 'a';
    yield 'b';
}

function* bar() {
    yield 'x';

    yield* foo(); 
    
    yield* ['c', 'd'];
    
    yield 'y';
}

// let arr = [...bar()]; //ok in firefox 38.0.5

for(let item of bar()){
    console.log(item)
}