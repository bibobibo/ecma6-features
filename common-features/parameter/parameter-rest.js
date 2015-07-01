#! /usr/local/bin/node  --harmony

'use strict';

//下面的代码在firefox中运行正常，在nodejs v0.12.4 中还有bug
// Rest Parameters
function sum(first, second, ...others){
    console.log(others);
}

sum(1, 2, 3, 4, 5)