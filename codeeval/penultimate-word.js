function penultimateWord(string) {
    words = string.split(" ");
    return words[words.length - 2];
}

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(penultimateWord(line));
    }
});
