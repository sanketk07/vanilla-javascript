//Properties:
//*****************************

//Array.prototype

if (!Array.prototype.peek) {
  Array.prototype.peek = function() {
    return this[0];
  }
}

//Array.length

var alphabets = ['a', 'b', 'c'];
console.log(alphabets.length); //3


Methods:
//*****************************

//Array.from()

console.log(Array.from('test')); //Array ["f", "o", "o"]
console.log(Array.from([1, 2], z => z*z)); //Array [1, 4]

var arrayFromSet = new Set(['someKey', 'someValue']); 
console.log(Array.from(arrayFromSet)); // Array ["someKey", "someValue"]

var arrayFromMap = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(arrayFromMap)); // Array [[1, 2], [2, 4], [4, 8]]

var mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values())); // Array ['a', 'b'];
console.log(Array.from(mapper.keys())); // Array ['1', '2'];

function f() {
  return Array.from(arguments);
}
console.log(f(1, 2, 3)); // [1, 2, 3]

// Generating a number sequence
// Since the array is initialized with `undefined` on each position, the value of `v` below will be `undefined`
console.log(Array.from({length: 5}, (v, i) => i)); // Array [0, 1, 2, 3, 4]


//Array.isArray()
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({foo: 123})); // false
console.log(Array.isArray('foobar'));   // false
console.log(Array.isArray(undefined));  // false



