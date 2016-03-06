function sumNums(number) {
	var sum = 0;
	for (var num = 1 ; num <= number ; num++) {
		sum += num;
	};
	return sum;
};

console.log(sumNums(5))