#! /usr/local/bin/node  --harmony --harmony_generators

'use strict';

function* genFunc() {
    try {
        console.log('Started');
        yield; // (A)
    } catch (error) {
        console.log('Caught: ' + error);
    }finally{
        yield 'last value';
    }

    return 'end';
}

var gen = genFunc();
console.log(gen.next())
console.log(gen.throw('fatal probelm!'))
console.log(gen.next())