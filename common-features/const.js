#! /usr/local/bin/node  --harmony

'use strict';

function foo() {
   const bar = "foo bar";

   bar = 'new value'; //will throw a Error!
}

foo();