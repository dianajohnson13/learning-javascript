function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
peoplePerDecade = {}

ancestry.forEach(function(person) {
  if (person.died !== undefined)
  	{ 
      var decade = Math.ceil(person.died / 100);
      var age = person.died - person.born;
      
      if (peoplePerDecade[decade] === undefined)
        {peoplePerDecade[decade] = [age]}
      else
      	{peoplePerDecade[decade].push(age)}                  
    };
});

function groupBy(arr, groupfunc) {
  	var groups = {};
  	arr.forEach(function(element) {
		var key = groupfunc(element);
      	
      	if (groups[key] === undefined)
        	{groups[key] = [element]}
      	else
      		{groups[key].push(element)}  
    });
   	return groups;
};

ppd = groupBy(ancestry, function(element) {
  if (element.died == undefined) return -1
  return Math.ceil(element.died / 100);
});
  
for (year in ppd) {
 if (year != -1) {
   console.log(year + 
               ": " + 
               average(ppd[year].map(function(person) {return person.died - person.born;})));
 }
}
  
for (year in peoplePerDecade) {
 console.log(year + ": " + average(peoplePerDecade[year])) 
}

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94