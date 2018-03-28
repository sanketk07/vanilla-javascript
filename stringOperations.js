
var string = 'The revolution will not be televised.';
string;
"The revolution will not be televised."

//Single vs Double Quotes
var sgl = 'Single quotes.';
var dbl = "Double quotes";
sgl
"Single quotes."
dbl;
"Double quotes"

var sglDbl = 'Would you eat a "fish supper"?';
var dblSgl = "I'm feeling blue.";
sglDbl;
"Would you eat a "fish supper"?"
dblSgl;
"I'm feeling blue."

//Escaping characters
var bigmouth = 'I\'ve got no right to take my place...';
bigmouth;
"I've got no right to take my place..."

//Concatenating strings
var one = 'Hello, ';
var two = 'how are you?';
var joined = one + two;
joined;
"Hello, how are you?"

'Front ' + 242;
"Front 242"

var myDate = '19' + '67';
typeof myDate;
"string"

//The Number object will convert anything passed to it into a number, if it can
var myString = '123';
var myNum = Number(myString);
typeof myNum;
"number"

//every number has a method called toString() that will convert it to the equivalent string
var myNum = 123;
var myString = myNum.toString();
typeof myString;
"string"
