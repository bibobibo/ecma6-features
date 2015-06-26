//ecma7 Object.observe


var model = {};

// Which we then observe
Object.observe(model, function(changes){
    changes.forEach(function(change) {
        console.log(change, change.type, change.name, change.oldValue);
    });
});

model.foo = 'bar';


/* SpiderMonkey extension ----------------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch
// Object.watch.toSource()

var obj = {foo: 'bar'};

obj.watch('foo', function(prop, oldval, newval){
    console.log(prop, oldval, newval)
});

obj.foo = 123;
obj.unwatch('foo');
obj.foo = 5;

-----------------------------------------------------------------------------------------------*/