#! /usr/local/bin/node

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));

fs.readFileAsync("package.json").then(JSON.parse).then(function (json) {
    console.log("Successful", json);
}).catch(SyntaxError, function (e) {
    console.error("file contains invalid json");
}).catch(Promise.OperationalError, function (e) {
    console.error("unable to read file, because: ", e.message);
});