#! /usr/local/bin/node  --harmony --harmony_generators

'use strict';

function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'result'; //没有明确的 return 就返回 undefined
}

var gen = genFuncWithReturn();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());