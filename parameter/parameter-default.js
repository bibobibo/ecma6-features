'use strict';

//下面的代码在firefox中运行正常，在nodejs v0.12.4 中还有bug
//Default Parameters 要保持参数顺序
function request(url, timeout=3000, callback=function(){} ){
  console.log("timeout: ", timeout);
  console.log("callback: ", callback);
}

request('http:127.0.0.1:7777');
request('http:127.0.0.1:7777', timeout=1000, callback=function foo(){});
request('http:127.0.0.1:7777', callback=function bar(){}, timeout=1000);