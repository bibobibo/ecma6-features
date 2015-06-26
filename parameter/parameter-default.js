#! /usr/local/bin/node  --harmony

'use strict';

//下面的代码在firefox中运行正常，在nodejs v0.12.4 中还有bug
//Default Parameters
function request(url, timeout=3000, callback=function(){} ){
    console.log(arguments)
    console.log(timeout, callback)
}

request('http:127.0.0.1:7777');