// Produce a new array
function reverseArray(array) {
	var reversedArray = []
	array.forEach(function(element) {
		reversedArray.unshift(element)
	});
	return reversedArray;
}

// Modify existing array
function reverseArrayInPlace(array) {
	var i = 0
	var j = array.length - 1
	while (i !== j) {
		var temp = array[i]
		array[i] = array[j]
		array[j] = temp
		i += 1, j -= 1
	};
	return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]