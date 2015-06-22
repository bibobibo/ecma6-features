//run in firefox 

var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};

var p = new Proxy(target, handler);
console.log(p.world);

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