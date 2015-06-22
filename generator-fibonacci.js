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

for (let value of fibonacci()) {
    if (value > 1024){
        break;
    }
    console.log(value);
}
