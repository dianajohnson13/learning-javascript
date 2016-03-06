// Print out the grid below, allowing for 'size' to be variable:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

var size = 8;

function chessRow(lastRow) {
	if (lastRow === undefined)
		{var row = " "}
	else if (lastRow[0] === "#")
		{var row = " "}
	else
		{var row = "#"}
	
	while (row.length < size) {
		if (row.charAt(row.length - 1) === "#")
			{ row += " " }
		else 
			{ row += "#" }
	};
	return row;
}

var allRows = []
while (allRows.length < size) {
	allRows.push(chessRow(allRows[allRows.length - 1]));
}
allRows.forEach(function(row) {console.log(row)});