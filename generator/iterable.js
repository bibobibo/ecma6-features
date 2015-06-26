#! /usr/local/bin/node  --harmony

'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// Built-in iterables

// String, Array, TypedArray, Map and Set are all built-in iterables, 
// because the prototype objects of them all have a Symbol.iterator method.



function makeIterator(array){
    var nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true




var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
// [...myIterable] // [1, 2, 3]
for(let item of myIterable){
    console.log(item)
}