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

//Array.isArray() - checks if the passed value is an array
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({foo: 123})); // false
console.log(Array.isArray('foobar'));   // false
console.log(Array.isArray(undefined));  // false


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


//Array.prototype.copyWithin() - shallow copies part of an array to another location in the same array and returns it (does NOT modify its size)
var arr = [1, 2, 3, 4, 5];
//place at position 0 the element between position 3 and 4
console.log(arr.copyWithin(0, 3, 4)); // Array [4, 2, 3, 4, 5]
//place at position 1 the elements after position 3
console.log(arr.copyWithin(1, 3)); // Array [4, 4, 5, 4, 5]


//Array.prototype.entries() - returns a new Array Iterator object containing the key/value pairs for each index in the array
var arr = ['a', 'b', 'c'];
var itr = arr.entries();
console.log(itr.next().value); // Array [0, "a"]
console.log(itr.next().value); // Array [1, "b"]

//loop through all objects in the iterator
for (let e of itr) {
  console.log(e);
}
// Array [0, "a"]
// Array [1, "b"]
// Array [2, "c"]


// Array.prototype.every() - checks if all the array elements pass the test implemented by the provided function
function isBelowThreshold(value) {
  return value < 40;
}
var arr = [1, 10, 23, 36, 19, 13];
console.log(arr.every(isBelowThreshold)); // true
var arr = [1, 10, 23, 36, 19, 50];
console.log(arr.every(isBelowThreshold)); // false

console.log([12, 5, 8, 130, 44].every(x => x >= 10)); // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)); // true


// Array.prototype.fill() - fills all the array elements with a static value from a start index to an end index. End index is NOT included
var arr = [1, 2, 3, 4];
console.log(arr.fill(0, 2, 4)); // Array [1, 2, 0, 0] - fill with 0 from position 2 until position 4
console.log(arr.fill(5, 1)); // Array [1, 5, 5, 5] - fill with 5 from position 1
console.log(arr.fill(6)); // Array [6, 6, 6, 6] - fill all positions with 6
//If start is negative, it is treated as length+start. If end is negative, it is treated as length+end
console.log([1, 2, 3].fill(4, -3, -2));       // Array [4, 2, 3] - Start: 3-3 = 0, End: 3-2 = 1
console.log([1, 2, 3].fill(4, NaN, NaN));     // Array [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5));         // Array [1, 2, 3]

//copies the reference and fills the array with references to that object
var arr = Array(3).fill({}) 
arr[0].hi = "hi";
console.log(arr)

//strings cannot be referenced, and hence inserts empty objects at 1st and 2nd indexes
var arr = Array(3).fill({}) 
arr[0] = "hi";
console.log(arr)


