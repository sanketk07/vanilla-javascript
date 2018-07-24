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


// Array.prototype.filter() - creates a new array with all elements that pass the test implemented by the provided function 
//does NOT mutate the array on which it is called
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length < 6);
console.log(result); // Array ["spray", "limit", "elite"]


// Array.prototype.find() - returns the value of the first element that satisfies the provided testing function. UNDEFINED otherwise
var arr = [7, 15, 18, 76, 23];
var found = arr.find(element => element > 18);
console.log(found); // 76
var found2 = arr.find(element => element > 180);
console.log(found2); // undefined

const fruits = [{name: 'apples', quantity: 2},{name: 'bananas', quantity: 0},{name: 'cherries', quantity: 5}];
const result = fruits.find( fruit => fruit.name === 'cherries' );
console.log(result) // { name: 'cherries', quantity: 5 }

function isPrimeNumber(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
console.log([4, 6, 8, 12].find(isPrimeNumber)); // undefined, as none found
console.log([4, 5, 8, 12].find(isPrimeNumber)); // 5


// Array.prototype.findIndex() - returns the index of the first element that satisfies the provided testing function. -1 otherwise
var array1 = [5, 12, 8, 130, 44];
function findFirstLargeNumber(element) {
  return element > 13;
}
console.log(array1.findIndex(findFirstLargeNumber)); // 3

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index); // 3
console.log(fruits[index]); // blueberries


// Array.prototype.flat() - creates a new array with all sub-array elements concatted into it recursively up to the specified depth
var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // Array [1, 2, 3, 4]
var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat()); // Array [1, 2, 3, 4, [5, 6]]
var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2)); // Array [1, 2, 3, 4, 5, 6]
var arr4 = [1, 2, , 4, 5];
console.log(arr4.flat()); // Array [1, 2, 4, 5]


// Array.prototype.flatMap() - first maps each element using a mapping function, then flattens the result into a new array. 
//Identical to a map followed by a flat of depth 1
var arr1 = [1, 2, 3, 4];
console.log(arr1.map(x => [x * 2])); // Array [[2], [4], [6], [8]]
console.log(arr1.flatMap(x => [x * 2])); // Array [2, 4, 6, 8]


// Array.prototype.forEach()
var arr = ['a', 'b', 'c'];
arr.forEach(function(element) {
  console.log(element);
});
// "a"
// "b"
// "c"


// Array.prototype.includes() - determines whether an array includes a certain element, returning true or false as appropriate
var arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false - The second parameter is fromIndex
[1, 2, 3].includes(3, -1); // true - Negative fromIndex value starts the search from the index of (array.length - fromIndex)
[1, 2, NaN].includes(NaN); // true


// Array.prototype.indexOf() - returns the first index at which an element is found, -1 otherwise
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('bison', 2)); // 4 - start from index 2
console.log(beasts.indexOf('giraffe')); // -1


// Array.prototype.join() - joins all elements of an array (or an array-like object) into a string and returns this string
var elements = ['Fire', 'Wind', 'Rain'];
console.log(elements.join()); // Fire,Wind,Rain
console.log(elements.join(''));// FireWindRain
console.log(elements.join('-'));// Fire-Wind-Rain


// Array.prototype.keys() - returns a new Array Iterator object that contains the keys for each index in the array
var arr = ['a', 'b', 'c'];
var itr = arr.keys(); 
for (let key of itr) {
  console.log(key); // 0 1 2
}


// Array.prototype.lastIndexOf() - returns the last index at which a given element is found, -1 otherwise
//The array is searched backwards, starting at fromIndex
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo')); // 3
console.log(animals.lastIndexOf('Tiger')); // 1


// Array.prototype.map() - creates a new array with the results of calling a provided function on every element in the calling array
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots) // Array [1, 2, 3]
console.log(numbers) // Array [1, 4, 9]


// Array.prototype.pop() - removes the last element from an array and returns that element. This method changes the length of the array
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // "tomato"
console.log(plants); // Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants); // Array ["broccoli", "cauliflower", "cabbage"]


// Array.prototype.push() - adds one or more elements to the end of an array and returns the new length of the array
var animals = ['pigs', 'goats', 'sheep'];
console.log(animals.push('cows')); // 4
console.log(animals); // Array ["pigs", "goats", "sheep", "cows"]


// Array.prototype.reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
const arr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue; 

// 1 + 2 + 3 + 4
console.log(arr.reduce(reducer)); // 10

// 5 + 1 + 2 + 3 + 4
console.log(arr.reduce(reducer, 5)); // 15


// Array.prototype.reduceRight() - applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value
const arr = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (previousValue, currentValue) => previousValue.concat(currentValue)
);
console.log(arr); // Array [4, 5, 2, 3, 0, 1]


// Array.prototype.reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first
var arr = ['one', 'two', 'three'];
console.log('arr: ', arr); // Array ['one', 'two', 'three']

var reversed = arr.reverse(); 
console.log('reversed: ', reversed); // Array ['three', 'two', 'one']

// It also changes the original array
console.log('arr: ', arr); // Array ['three', 'two', 'one']


// Array.prototype.shift() - removes the first element from an array and returns that removed element. This method changes the length of the array
var arr = [1, 2, 3];
var firstElement = arr.shift();
console.log(arr); // Array [2, 3]
console.log(firstElement); // 1


// Array.prototype.unshift() - 












