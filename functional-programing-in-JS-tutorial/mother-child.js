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
	if (person.mother !== undefined && byName[person.mother] !== undefined)
     	{pairs.push([person.name, person.mother])}
});

function hasKnownMother(person) {
	if (person.mother !== undefined && byName[person.mother] !== undefined) 
      return true
    return false
}

function momDiff(person) {
  return byName[person.mother].born - person.born;
}

var diffs = ancestry.filter(hasKnownMother).map(momDiff);

var diffs2 = ancestry.map(function(person) { 
 	if (!hasKnownMother(person)) return null;
  	return momDiff(person);
});

//var diffs = pairs.map(function(pair) {
//  return byName[pair[1]].born - byName[pair[0]].born;
//});



console.log(average(diffs2.filter(function(avg) { if (avg == null) return false; return true})));


// → 31.2