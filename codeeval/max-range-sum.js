var fs  = require("fs");
var sumTotalRange = function(rangedArr) {
    return rangedArr.reduce(function(a, b) {return a + b});
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(";");
        var n = Number(data[0]);
        var diffs = data[1].split(" ").map(function(digit) {
            return Number(digit);
        });
        var maxGain = 0;

        for (var i = 0; i < diffs.length - (n - 1);  i++) {
            var diffRange = diffs.slice(i, i + n );
            var totalOfRange = sumTotalRange(diffRange);

            if (totalOfRange > maxGain) {
                maxGain = totalOfRange;
            }
        }
        console.log(maxGain);
    }
});
