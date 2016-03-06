function longestWord(string) {
	var words = string.split(" ");
	var longWord = "";
	var longWordLength = longWord.length;

	for (var i = 0; i < words.length; i++) {
		if (words[i].length > longWordLength) 
		{
			longWord = words[i];
			longWordLength = longWord.length
		}
	}
	return longWord;
}

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
      console.log(longestWord(line));
  }
});
