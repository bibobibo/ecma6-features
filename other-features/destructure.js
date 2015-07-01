"use strict";

// https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let [first, second, third] = list = ['foo','bar',123];;
console.log(first, second, third);

var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]


var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo, bar);

var complicatedObj = {
  arrayProp: [
    "Zapp",
    { second2: "Brannigan" }
  ]
};

var { arrayProp: [first2, { second2 }] } = complicatedObj;

console.log(first2, second2);


let a = 1, b = 3;
[a, b] = [b, a];
console.log(a, b);