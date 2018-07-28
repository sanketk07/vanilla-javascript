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


//String.fromCodePoint() - returns a string created by using the specified sequence of code points
console.log(String.fromCodePoint(42));       // "*"
console.log(String.fromCodePoint(65, 90));   // "AZ"
console.log(String.fromCodePoint(0x404));    // "\u0404"
console.log(String.fromCodePoint(0x2F804));  // "\uD87E\uDC04"
console.log(String.fromCodePoint(194564));   // "\uD87E\uDC04"
console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307)) // "\uD834\uDF06a\uD834\uDF07"
console.log(String.fromCodePoint('_'));      // RangeError
console.log(String.fromCodePoint(Infinity)); // RangeError
console.log(String.fromCodePoint(-1));       // RangeError
console.log(String.fromCodePoint(3.14));     // RangeError
console.log(String.fromCodePoint(3e-2));     // RangeError
console.log(String.fromCodePoint(NaN));      // RangeError

//String.prototype.charAt() - returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string
var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'"); // B - No index was provided, used 0 as default
console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); // The character at index 0   is 'B'
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'"); // The character at index 1   is 'r'
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'"); // The character at index 2   is 'a'
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'"); // The character at index 3   is 'v'
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'"); // The character at index 4   is 'e'
console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); // The character at index 999   is ''




