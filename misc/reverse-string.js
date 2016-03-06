// Write a method that will take a string as input, and return a new
// string with the same letters in reverse order.
//
// Don't use String's reverse method; that would be too simple.

function reverseString(string) {
	var reversedStr = "";
	for (var i = string.length - 1; i > -1 ; i--) {
		reversedStr += string[i]
	};
	return reversedStr
};

console.log(reverseString("apple"))