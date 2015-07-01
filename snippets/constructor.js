var _classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

function Point() {
    console.log("this: ", this);
    _classCallCheck(this, Point);
}

Point.prototype.foo = function() {
    console.log("bar");
};

Point();
// new Point();
