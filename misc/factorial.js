// Write a method that takes an integer `n` in; it should return
// n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
//
// As a special case, `factorial(0) == 1`.

function factorial(number) {
	if (number === 0)
		{return 1};

	var product = 1;
	for (var num = 1; num <= number; num++) {
		product *= num;
	};
	return product;
};

console.log(factorial(4))