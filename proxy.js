//run in firefox 

var target = function(){}; //{}; //only Function is callable(apply/call);
var handler = {
    get: function(receiver, name) {
        return `Hello, ${name}!`;
    },
    set: function(receiver, property, value) {
        console.log("property ", property, " changed from", receiver[property], " to a new value: ", value)
        receiver[property] = value;
    },
    apply: function(receiver, ...args) {
        console.log('called with:', args);
        return "I am the proxy!";
    }
};

var model = new Proxy(target, handler);
console.log(model.world);
model.foo = "bad boy";
model.foo = "good girl";
model(123, 'abc');

// var handler =
// {
//   get:...,
//   set:...,
//   has:...,
//   deleteProperty:...,
//   apply:...,
//   construct:...,
//   getOwnPropertyDescriptor:...,
//   defineProperty:...,
//   getPrototypeOf:...,
//   setPrototypeOf:...,
//   enumerate:...,
//   ownKeys:...,
//   preventExtensions:...,
//   isExtensible:...
// }
