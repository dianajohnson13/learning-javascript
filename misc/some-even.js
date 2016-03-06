// Your code here.

function some(array, pred) {
 for (el in array) {
   
   if (pred(array[el])) return true
 }
  return false
}

function every(array, pred) {
 for (el in array) {
   if (!pred(array[el])) return false
 }
  return true
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false