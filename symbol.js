#! /usr/local/bin/node  --harmony

'use strict';
var MyClass;
(function() {

    // module scoped symbol
    var key = Symbol("key");

    MyClass = function(privateData) {
        this[key] = privateData;
    }

    MyClass.prototype = {
        doStuff: function() {
            //this[key]
            console.log(key, this[key]);
        }
    };

})();

var c = new MyClass("hello")
console.log(c["key"] === undefined);

console.log(c.doStuff())
