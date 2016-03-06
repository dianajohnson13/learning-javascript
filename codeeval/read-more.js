function handleText(string) {
  if (string.length <= 55)
  	{return string}
  else
  	{return limitText(string)}
}

function limitText(string) {
	var shortText = string.slice(0, 40);

	for (i = shortText.length - 1; i > 0; i--) {
		if (shortText.charAt(i) === " ") {
			shortText = shortText.slice(0, i);
			return shortText + "... <Read More>";
		}
	}
}

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
      console.log(handleText(line));
  }
});
