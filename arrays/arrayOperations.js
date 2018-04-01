var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping;
(5) ["bread", "milk", "cheese", "hummus", "noodles"]
var sequence = [1, 1, 2, 3, 5, 8, 13];
var random = ['tree', 795, [0, 1, 2]];

random
(3) ["tree", 795, Array(3)]
var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

var myArray = myData.split(',');
myArray;
(6) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]

myArray2;
["Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"]
myArray.length;
myArray[0]; // the first item in the array
myArray[1]; // the second item in the array
myArray[myArray.length-1]; // the last item in the array
"Carlisle"

var myNewString = myArray.join(',');
myNewString;
"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"

myNewString.toString()
"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"

myArray.toString()
"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"

//To add or remove an item at the end of an array we can use push() and pop() respectively
myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;
(9) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford", "Brighton"]

var newLength = myArray.push('Bristol');
myArray;
newLength;
10

myArray.pop();
"Bristol"

var removedItem = myArray.pop();
myArray;
removedItem;
"Brighton"

//unshift() and shift() work in exactly the same way as push() and pop(), respectively, except that they work on the beginning of the array, not the end.
myArray.unshift('Edinburgh');
myArray;
(9) ["Edinburgh", "Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford"]
var removedItem = myArray.shift();
removedItem;
"Edinburgh"

myArray
(8) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford"]