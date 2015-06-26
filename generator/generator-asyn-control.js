#! /usr/local/bin/node  --harmony --harmony_generators

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));

function runTask(generatorFunc){
    var generator = generatorFunc();
    generator.next().value.then(function(data){
        generator.next(data);
    }, function(err){
        generator.throw(err);
    });
}

function processTheBigData(data){
    console.log("small data: \n",data.toString()); 
}

function* asyncFunc(){
    var data = yield fs.readFileAsync("package.json");//the fs.readFileAsync is a Promise function.
    processTheBigData(data);
}

runTask(asyncFunc);