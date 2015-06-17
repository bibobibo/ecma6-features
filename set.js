#! /usr/local/bin/node  --harmony

'use strict';

var engines = new Set(); // create new Set
 
engines.add("Gecko"); // add to Set
engines.add("Trident");
engines.add("Webkit");
engines.add("Hippo");
engines.add("Hippo"); // note that Hippo is added twice
 
console.log("Browser engines include Gecko? " + engines.has("Gecko"));    // true
console.log("Browser engines include Hippo? " + engines.has("Hippo"));    // true
console.log("Browser engines include Indigo? " + engines.has("Indigo"));   // false
 
engines.delete("Hippo"); // delete item
console.log("Hippo is deleted. Browser engines include Hippo? " + engines.has("Hippo"));    // false
