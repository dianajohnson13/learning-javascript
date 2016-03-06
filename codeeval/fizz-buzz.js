var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	var args = line.split(" ");
    	var results = [];
    	
    	var x = args[0];
    	var y = args[1];
    	var n = args[2];

    	for (num = 1; num <= n; num++) {
    		if (num % x === 0 && num % y === 0)
    			{results.push("FB")}
    		else if (num % x === 0)
    			{results.push("F")}
    		else if (num % y === 0)
    			{results.push("B")}
    		else
    			{results.push(num)}
    	};
    }
    console.log(results.join(" "))
});

