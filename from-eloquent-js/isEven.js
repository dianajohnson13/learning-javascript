function isEven(number) {
	if (number === 1 || number === -1)
		{return false}
	else if (number === 2)
		{return true}
	else if (number > 2)
		{return isEven(number - 2)}
	else 
		{return isEven(Math.abs(number) - 2)}
}

console.log(isEven(50))

console.log(isEven(75))

console.log(isEven(-1))