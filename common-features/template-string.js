#! /usr/local/bin/iojs  --harmony

'use strict';


//下面的代码在firefox中运行正常，在nodejs v0.12.4 中还有bug, iojs v2.0.0 也正常。

var name = 'Paul',  age = 99;

var str = `${name}, is apparently ${age} years old`
console.log(str)

var longString = `here we have
         a multiline string
         using backtick quotes`;

console.log(longString)
