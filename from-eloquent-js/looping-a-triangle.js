//Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

var hashes = "#"
for (var x = 0 ; x < 7 ; x++) {
	console.log(hashes)
	hashes += "#"
};