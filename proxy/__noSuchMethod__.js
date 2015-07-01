//works on firefox/Spidermonkey
var obj = {
    __noSuchMethod__: function(id, args) {
        console.log(id, '(' + args.join(', ') + ')');
    }
};

obj.foo(1, 2, 3);
obj.bar('aaa', 'bbb');
