function isPrime(number) {
	for (divisor = 2 ; divisor < number ; divisor++) {
		if (number % divisor === 0)
			{return false}
	};
	return true;
};

console.log(isPrime(5))
console.log(isPrime(17))
console.log(isPrime(14))
