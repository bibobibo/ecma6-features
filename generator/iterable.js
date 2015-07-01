#! /usr/local/bin/node  --harmony

'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

// Built-in iterables
// String, Array, TypedArray, Map and Set are all built-in iterables,
// because the prototype objects of them all have a `Symbol.iterator` method.

var iterableData = {};
iterableData[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

// console.log([...iterableData]) // [1, 2, 3]

for(let item of iterableData){
    console.log(item);
}