"use strict";

// https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let [first, second, third] = ['foo', 'bar', 123];
console.log(first, second, third);

var [head, ...tail] = [1, 2, 3, 4];
console.log(tail); // [2, 3, 4]


var { foo, bar } = { foo: "你哥", bar: "你妹" };
console.log(foo, bar);

var data = {
    items: [
        "spider monkey",
        { inner: "deep in" }
    ]
};

var { items: [engine, { inner }] } = data;

console.log(engine, inner);

//交换值，xor?-------
let a = 1, b = 3;
[a, b] = [b, a];
console.log(a, b);