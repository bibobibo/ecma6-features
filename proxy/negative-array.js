#! /usr/local/bin/node  --harmony --harmony_proxies

function negativeArray(arr) {
  return Proxy.create({
    get: function (receiver, index) {
        index = parseInt(index, 10);
        return index < 0 ? arr[arr.length + index] : arr[index];
    }
  });
}

var list = negativeArray(['alpha', 'beta', 'last']);
console.log('list[-1]: ',list[-1]);// 'last'