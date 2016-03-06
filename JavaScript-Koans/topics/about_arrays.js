module("About Arrays (topics/about_arrays.js)");

test("array literal syntax and indexing", function() {
    var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
    equal("cellar door", favouriteThings[0], 'what is in the first position of the array?');
    equal(42, favouriteThings[1], 'what is in the second position of the array?');
    equal(true, favouriteThings[2], 'what is in the third position of the array?');
});

test("array type", function() {
    equal("object", typeof([]), 'what is the type of an array?');
});

test("length", function() {
    var collection = ['a','b','c'];
    equal(3, collection.length, 'what is the length of the collection array?');
});

test("splice", function() {
    var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var workingWeek = daysOfWeek.splice(5, 2);
    ok(workingWeek.equalTo(workingWeek), 'what is the value of workingWeek?');
    ok(daysOfWeek.equalTo(daysOfWeek), 'what is the value of daysOfWeek?');
});

test("stack methods", function() {
    var stack = [];
    stack.push("first");
    stack.push("second");

    equal("second", stack.pop(), 'what will be the first value popped off the stack?');
    equal("first", stack.pop(), 'what will be the second value popped off the stack?');
});

test("queue methods", function() {
    var queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    equal("third", queue.shift(), 'what will be shifted out first?');
    equal("first", queue.shift(), 'what will be shifted out second?');
});