#! /usr/local/bin/node  --harmony --harmony_proxies --harmony_generators
 // node_modules/node-dev/bin/node-dev --harmony koajs-app.js

var koa = require('koa');
var app = koa();

// logger
app.use(function*(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %sms', this.method, this.url, ms);
});

// response
app.use(function*() {
    this.body = 'hello, hell';
});

app.listen(3000);
