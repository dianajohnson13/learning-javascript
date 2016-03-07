var numbers = [1, 3, 5, 1, 5, 8, 6, 2];
var shoppingList = {apples: 4, greenbeans: 20, bananas: 4, lettuce: 1, beets: 2};

// EACH
function myEach(input, callback) {
	if (Array.isArray(input)) {
		for (var i = 0; i < input.length; i++) {
			callback(input[i]);
		}
	} else {
		for (var key in input) {
			callback(input[key]);
		}
	}
};

var print = function(input) {
	console.log(input)
}

// myEach(shoppingList, print);

// console.log("")

// myEach(numbers, function(num) {
// 	console.log(num)
// })



// MAP

var map = function(input, callback) {
	results = [];
	if (Array.isArray(input)) {
		for (var i = 0; i < input.length; i++) {
			results.push(callback(input[i]));
		}
	} else {
		for (var key in input) {
			results.push(callback(input[i]));
		}
	}
	return results;
}

var doubledNums = map(numbers, function(num) {
	return num * 2;
});

// console.log(doubledNums)

function tripler(num) {
	return num * 3;
}

var tripledNums = map(numbers, tripler);

// console.log(tripledNums);



// FILTER

var filter = function(input, callback) {
	selectedInput = [];
	for (var i = 0; i < input.length; i++) {
		if (callback(input[i])) {
			selectedInput.push(input[i])
		}
	}
	return selectedInput;
}

evenNums = filter(numbers, function(num) {
	return num % 2 === 0;
})

// console.log(evenNums);

var isOdd = function(num) {
	return num % 2 !== 0;
}

oddNums = filter(numbers, isOdd);

// console.log(oddNums);


// INCLUDES


Array.prototype.includes = function(el) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] === el) return true;
	}
	return false;
}


// UNIQ --- produces an unique elements, not an array of elements that were unique in the parent array.

var uniq = function(arr) {
	uniqElements = [];
	for (var i = 0; i < arr.length; i++) {
		if (uniqElements.includes(arr[i]) === false) {
			uniqElements.push(arr[i])
		}
	}
	return uniqElements;
}

// console.log(uniq(numbers))


// CONCAT

var concat = function(arr1, arr2) {
	concatArray = arr1.slice(0)
	for (var i = 0; i < arr1.length; i++) {
		arr1.push(arr2[i]);
	}
	return concatArray
}


// REDUCE 


var reduce = function(array, callback) {
	accum = 0;
	for (var i = 0; i < array.length; i++) {
		accum = (callback(accum, array[i]))
	}
	return accum;
}

var sum = reduce(numbers, function(accum, num) {
	return accum + num;
})

// console.log(sum);

var addNums = function(num1, num2) {
	return num1 + num2;
}

var sum2 = reduce(numbers, addNums);

// console.log(sum2)



