//ecma7 Object.observe


var model = {};

// Which we then observe
Object.observe(model, function(changes){
    changes.forEach(function(change) {
        console.log(change, change.type, change.name, change.oldValue);
    });
});

model.foo = 'bar';