var name = "John Doe"; // Issue: 'var' should be replaced with 'let' or 'const'
var age = 30;          // Issue: 'var' should be replaced with 'let' or 'const'
var unusedVar = "This is never used"; // Issue: Unused variable

function getUserName() {
    var name = "Jane Doe"; // Issue: This shadows the outer 'name' variable
    return name;
}

function calculateAge(yearOfBirth) {
    var currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
}

// Code duplication issue
function calculateUserAge(user) {
    var currentYear = new Date().getFullYear();
    return currentYear - user.yearOfBirth;
}

function unsafeFunction(userInput) {
    // Issue: Use of eval() introduces security risks
    return eval(userInput);
}

// Another code duplication issue
function duplicateFunction1() {
    console.log("This is a duplicate function");
}

function duplicateFunction2() {
    console.log("This is a duplicate function");
}

console.log(getUserName());
console.log(calculateAge(1990));
console.log(calculateUserAge({ yearOfBirth: 1990 }));
console.log(unsafeFunction("2 + 2")); // Potential security issue