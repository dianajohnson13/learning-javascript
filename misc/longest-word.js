function longestWord(string){
	var words = string.split(" ");
	var longWord = words[0]
	var longestLength = longWord.length

	for (var i = 0 ; i < words.length ; i++) {
		if (words[i].length > longestLength)
		{
			longWord = words[i];
			longestLength = longWord.length;
		}
	};
	
	return longWord;
};

console.log(longestWord("I love penguins so much"))