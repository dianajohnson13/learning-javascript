// Our Person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
};

// Now we can make an array of people
var family = new Array();

// loop through our new array
var family[0] = new Person("alice", 40);
var family[1] = new Person("bob", 42);
var family[2] = new Person("michelle", 8);
var family[3] = new Person("timmy", 6);

for (var counter = 0; counter < family.length - 1 ; counter++) {
    console.log(family[counter].name);
};
