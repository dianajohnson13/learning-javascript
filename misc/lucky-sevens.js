// Write a function called lucky_sevens which takes an array of integers 
// and returns true if any three consecutive elements sum to 7.

function lucky_sevens(array) {
	for (i = 0; i < array.length - 3; i++) {
		if (array[i] + array[i + 1] + array[i + 2] === 7) return true
	}
	return false
}

console.log(lucky_sevens([1, 5, 3, 2, 2, 5, 5, 6]))
console.log(lucky_sevens([3, 25, 6, 2, 4, 8]))