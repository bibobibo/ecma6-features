//run it in firefox nightly v41.0a1 (2015-06-25)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

// The yield* expression is used to delegate to another generatorerator
// or iterable object.

// Built-in iterables
// String, Array, TypedArray, Map and Set are all built-in iterables,

function* foo() {
    yield 'bar';
}

function* gen() {
    yield  [1, 2];
    yield* [1, 2];

    yield* "34";

    yield* Array.from(arguments);

    yield* foo();//
}

var iterator = gen(5, 6);
console.log(iterator.next()); // { value: Array[2], done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: 'bar', done: true }
console.log(iterator.next()); // { value: undefined, done: true }
