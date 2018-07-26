//Properties:
//*****************************

//String.prototype - represents the String prototype object
//All String instances inherit from String.prototype. 
//Changes to the String prototype object are propagated to all String instances.

//String.length
var someString = "test";
console.log(someString.length); //4


//Methods:
//*****************************
//String.fromCharCode() - returns a string created from the specified sequence of UTF-16 code units
console.log(String.fromCharCode(65, 66, 67));  // "ABC"
console.log(String.fromCharCode(0x2014))      // "—"
console.log(String.fromCharCode(0x12014))      // also "—" (the digit 1 is truncated and ignored)