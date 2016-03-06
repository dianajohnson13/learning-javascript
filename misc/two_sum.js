 // Write a method that takes an array of numbers. If a pair of numbers
 // in the array sums to zero, return the positions of those two numbers.
 // If no pair of numbers sums to zero, return `nil`.

function twoSum(numbers) {
	for (var i = 0 ; i < numbers.length - 1 ; i++) {
		for (var j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === 0)
				{ return [numbers[i], numbers[j]]};
		};
	};
	return null
};

console.log(twoSum([1,4,5,3,5]))