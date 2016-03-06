function arrayToList(array) {
	var restVal = null;
	array.reverse().forEach(function(num) {
		restVal = {value: num, rest: restVal};
	});
	return restVal;
}

function listToArray(list) {
	var array = [list.value]
	var item = list.rest
	while (item !== null) {
		array.push(item.value);
		item = item.rest;
	}
	return array;
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));