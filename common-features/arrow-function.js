#! /usr/local/bin/node  --harmony

function Car() {
    var self = this;
    self.speed = 0;

    setInterval(function() {
        self.speed += 5;
        console.log('now going: ' + self.speed);
    }, 1000);
}

var car = new Car();


//下面的代码在firefox中运行正常，在nodejs v0.12.4 中还有bug
function Car2() { //Note, we could use the new Class feature in ES6 instead
    this.speed = 0;

    setInterval(() => {
        this.speed += 5; //this is from Car
        console.log('now going: ' + this.speed, this);
    }, 1000);
}

var car2 = new Car2();



// these are equivalent
var sq = x => x * x
var sq2 = function(x){ return x * x }

console.log(sq(2), ' === ', sq(2))
