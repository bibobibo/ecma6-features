#! /usr/local/bin/node  --harmony --harmony_generators

'use strict';

function* fibonacci() {
    var pre = 0,
        cur = 1,
        temp;

    while (true) {
        yield pre;

        temp = pre;
        pre = cur;
        cur += temp;
    }
}

// works on firefox
// function* fibonacci() {
//     let [prev, curr] = [0, 1];
//     for (;;) {
//         [prev, curr] = [curr, prev + curr];
//         yield curr;
//     }
// }
 
for (let value of fibonacci()) {
    if (value > 1024){
        break;
    }
    console.log(value);
}
