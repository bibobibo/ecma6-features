#! /usr/local/bin/node  --harmony
'use strict';


function BinaryTree(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
};

BinaryTree.prototype[Symbol.iterator] = function* () {
    yield this.value;

    if (this.left) {
        yield* this.left;
    }

    if (this.right) {
        yield* this.right;
    }
};

let tree = new BinaryTree('a',
    new BinaryTree('b',
        new BinaryTree('c'),
        new BinaryTree('d')),
    new BinaryTree('e'));

for (let node of tree) {
    console.log('node', node);
}