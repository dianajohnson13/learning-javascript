function countsBs(string) {
	var BCount = 0
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === "B")
			{BCount += 1}
	};
	return BCount;
}

function countChar(string, char) {
	var charCount = 0
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === char)
			{charCount += 1}
	};
	return charCount;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4