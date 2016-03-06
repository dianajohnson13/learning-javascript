function sumDigits(digitStr) {
	var digits = digitStr.split("")
	return digits.reduce(function(a, b) {
		return Number(a) + Number(b);
	});
}

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
      console.log(sumDigits(line));
  }
});
