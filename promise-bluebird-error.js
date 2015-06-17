#! /usr/local/bin/node

var Promise = require("bluebird");

Error.stackTraceLimit = 25;
Promise.longStackTraces();

Promise.resolve().then(function outer() {
    return Promise.resolve().then(function inner() {
        return Promise.resolve().then(function evenMoreInner() {
            a.b.c.d()
        }).catch(function catcher(e){
            console.error(e.stack);
        });
    });
});