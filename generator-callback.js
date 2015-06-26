#! /usr/local/bin/node  --harmony --harmony_generators

var fs = require('fs');

function readFile(path, encoding) {
    return function(callback) {
        fs.readFile(path, encoding, callback);
    };
}

function sleep(ms) {
    return function(callback) {
        setTimeout(callback, ms);
    };
}

function run(generatorFunc) {
    return function() {
        var generator = generatorFunc.apply(this, arguments);
        var continuable, sync, value;

        next();

        function next() {
            while (!(continuable = generator.next(value)).done) {
                continuable = continuable.value;
                sync = undefined;
                continuable(callback);
                if (sync === undefined) {
                    sync = false;
                    break;
                }
            }
        }

        function callback(err, val) {
            if (err) return generator.throw(err);
            value = val;
            if (sync === undefined) {
                sync = true;
            } else {
                next();
            }
        }
    }
}


run(function*() {
    console.log( (yield readFile(__filename)).toString() );
    console.log("Sleeping for 2000ms...");
    yield sleep(2000);
    console.log("Done");
})();
