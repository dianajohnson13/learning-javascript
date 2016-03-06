ancestry = [{name: "Betsy", born: 1942, mother: "Joanne"},
 {name: "Joanne", born: 1923, mother: undefined}, 
 {name: "Harriet", born: 1968, mother: "Betsy"}]

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var pairs = []
ancestry.forEach(function(person) {
	if (person.mother !== undefined)
     	{pairs.push([person.name, person.mother])}
});

var diffs = pairs.map(function(pair) {
	return byName[pair[1]].born - byName[pair[0]].born;
});


console.log(average(diffs))