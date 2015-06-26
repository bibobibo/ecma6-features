#! /usr/local/bin/node  --harmony

'use strict';

var a = ['one', 'two', 'three']
for (let e of a.entries()) console.log(e) // [0,'one']  [1,'two']  [2,'three']

for (let v of a.values()) console.log(v) // one  two  three

for (let k of a.keys()) console.log(k) // 0  1  2
