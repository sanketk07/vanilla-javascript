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

//Array.from() - creates a new, shallow-copied Array instance from an array-like or iterable object

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


//Array.isArray() - checks if the passed value is an array
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({foo: 123})); // false
console.log(Array.isArray('foobar'));   // false
console.log(Array.isArray(undefined));  // false


//Array.of() - creates a new Array instance with a variable number of arguments
console.log(Array.of(5)); // Array [5] 
console.log(Array.of(1, 2)); // Array [1, 2]

console.log(Array(5)); // Array [ , , , , ]
console.log(Array(1, 2)); // Array [1, 2]


// Array.prototype.concat() - merges two arrays and returns a NEW array (does NOT change the existing arrays)
var arr1 = ['a', 'b'];
var arr2 = ['y', 'z'];
console.log(arr1.concat(arr2)); // Array ["a", "b", "y", "z"]
console.log(arr2.concat(arr1)); //Array ["y", "z", "a", "b"]




