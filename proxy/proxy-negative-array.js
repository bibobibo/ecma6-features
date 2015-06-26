#! /usr/local/bin/node  --harmony --harmony_proxies

function negativeArray(arr) {

  return Proxy.create({
    set: function (receiver, index, value) {
      arr[index] = value;
    },
    get: function (receiver, index) {
        index = parseInt(index, 10);
        return index < 0 ? arr[arr.length + index] : arr[index];
    }
  });
}

var list = negativeArray(['alpha', 'beta', 'gamma']);
console.log(list[0], list[-1]);