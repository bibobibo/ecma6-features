#! /usr/local/bin/node  --harmony
'use strict';

//Prefix iteration the tree\\
function* BinaryTree(value, left, right){
    yield value;

    if (left) {
        yield* left;
    }

    if (right) {
        yield* right;
    }
}

//call it by BinaryTree() or new BinaryTree();
let tree = new BinaryTree('a',
    new BinaryTree('b',
        new BinaryTree('c'),
        new BinaryTree('d')),
    new BinaryTree('e'));

//Iterating over the binary tree
for (let node of tree) {
    console.log('node', node);
}

// console.log( tree.next() );
// console.log( tree.next() );