"use strict";

// https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

var list = ['foo','bar',123];

let [first, second, third] = list;
console.log(first, second, third);

var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]


var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo, bar);

var complicatedObj = {
  arrayProp: [
    "Zapp",
    { second: "Brannigan" }
  ]
};

var { arrayProp: [first, { second }] } = complicatedObj;

console.log(first, second);


let a = 1, b = 3;
[a, b] = [b, a];
console.log(a, b);