var myArray = [4, 5, 6, 7, 8];

for (i = 0; i < myArray.length; i++) {
	console.log(i);
};

var doubles = new Object()

for (i = 0; i < myArray.length; i++) {
	doubles[myArray[i]] = myArray[i] * 2;
};

console.log(doubles);
