// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__

// -------------------Object.prototype.__defineGetter__() -----------------------
// Non-standard and deprecated way
var o = {};
o.__defineGetter__('gimmeFive', function() {
    return 5;
});
console.log(o.gimmeFive); // 5


// Standard-compliant ways
// Using the get operator
var o = {get gimmeFive() {
        return 5;
    }
};
console.log(o.gimmeFive); // 5

// Using Object.defineProperty
var o = {};
Object.defineProperty(o, 'gimmeFive', {
    get: function() {
        return 5;
    }
});
console.log(o.gimmeFive); // 5

//-----------------------Object.prototype.__defineSetter__()--------------------
// Non-standard and deprecated way
var o = {};
o.__defineSetter__('value', function(val) {
    this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5


// Standard-compliant ways
// Using the set operator
var o = {set value(val) {
        this.anotherValue = val;
    }
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5

// Using Object.defineProperty
var o = {};
Object.defineProperty(o, 'value', {
    set: function(val) {
        this.anotherValue = val;
    }
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
