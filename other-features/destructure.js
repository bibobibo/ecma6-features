// https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

var list = ['a','b',123];

var [first, second, third] = list;
let [first, second, third] = list;
const [first, second, third] = list;


var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]


var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"


var complicatedObj = {
  arrayProp: [
    "Zapp",
    { second: "Brannigan" }
  ]
};

var { arrayProp: [first, { second }] } = complicatedObj;

console.log(first);
// "Zapp"
console.log(second);
// "Brannigan"



var [missing = true] = [];
console.log(missing);
// true

var { message: msg = "Something went wrong" } = {};
console.log(msg);
// "Something went wrong"

var { x = 3 } = {};
console.log(x);
// 3


var a = 1;
var b = 3;

[a, b] = [b, a];