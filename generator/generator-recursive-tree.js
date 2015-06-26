//run it in firefox nightly v41.0a1 (2015-06-25)

class BinaryTree {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    //Prefix iteration\\
    *[Symbol.iterator]() {
        yield this.value;

        if (this.left) {
            yield* this.left;
        }

        if (this.right) {
            yield* this.right;
        }
    }
}

let tree = new BinaryTree('a',
    new BinaryTree('b',
        new BinaryTree('c'),
        new BinaryTree('d')),
    new BinaryTree('e'));

//Iterating over the binary tree
for (let x of tree) {
    console.log(x);
}
