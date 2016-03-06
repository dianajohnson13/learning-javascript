var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
var array = []
arrays.forEach(function(arr) {
 	array = array.concat(arr);
});
console.log(array);
// → [1, 2, 3, 4, 5, 6]