#! /usr/local/bin/node  --harmony --harmony_generators

'use strict';

//-----------------next with parameter-------------------\\
function* foo(){
  yield 1;
  var pong = yield 2;
  yield pong || 3;
}

var f = foo();
console.log(f.next())       // { value: 1, done: false }
console.log(f.next())       // { value: 2, done: false }

// next(value) always sends the value to the currently suspended yield,
// but returns the operand of the following yield.
console.log(f.next('ping')) // { value: "bar", done: false }
console.log(f.next())       // { value: undefined, done: true }







