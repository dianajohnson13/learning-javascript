ancestry = [
{name: "betty", born: 1922, mother: undefined},
{name: "mary", born: 1943, mother: "betty"},
{name:"isabelle", born: 1968, mother: "mary"},
{name: "harriet", born: 1993, mother: "isabelle"}]


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function motherChildPairs() {
	var pairs = [];
	ancestry.forEach(function(person) {
		if (person.mother !== undefined) {
			pairs.push([person.name, person.mother])
		}
	});
	return pairs;
}

function ageDiffs(pairs) {
	return pairs.map(function(pair) {
		var mother = pair[1]
		var child = pair[0]
		return (byName[mother].born - byName[child].born)
	});
}

var pairs = motherChildPairs()
var ageDifferences = ageDiffs(pairs)
var averageAgeDiff = average(ageDifferences)

console.log(averageAgeDiff)

// Your code here.

// → 31.2