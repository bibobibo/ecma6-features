#! /usr/local/bin/node  --harmony --harmony_proxies --harmony_generators
 // node_modules/node-dev/bin/node-dev --harmony koajs-app.js

var koa = require('koa');
var app = koa();

app.use(function* logger(next) {
    console.log('logger middleware started.')
    var start = new Date;
    yield next;
    console.log('logger middleware ended.')
    // console.log(this.method, this.url, new Date - start, ' ms')
});

app.use(function* foo(next) {
    console.log('\tfoo middleware started.')
    yield next;
    console.log('\tfoo middleware ended.')
});

app.use(function* bar(next) {
    console.log('\t\tbar middleware started.')
    yield next;
    console.log('\t\tbar middleware ended.')
});

// response
app.use(function*() {
    this.body = 'hello, hell';
    console.log('\t\t\t<<<Response ended!>>>');
});

app.listen(3000);
