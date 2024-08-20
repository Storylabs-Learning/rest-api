const name = "John Doe"; // Issue: 'var' debe ser cambiada por 'let' or 'const'
const age = 30; // Issue: 'var' debe ser cambiada por 'let' or 'const'
const unusedVar = "This is never used"; // Issue: variable sin usar

function getUserName() {
  var fullname = "Jane Doe"; // Issue: "shadows" la variable 'name'
  return fullname;
}

function calculateAge(yearOfBirth) {
  var currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

// issue: codigo duplicado
function calculateUserAge(user) {
  var currentYear = new Date().getFullYear();
  return currentYear - user.yearOfBirth;
}

function unsafeFunction(userInput) {
  // Issue: eval() introduce problemas de seguridad.
  return eval(userInput);
}

console.log(getUserName());
console.log(calculateAge(1990));
console.log(calculateUserAge({ yearOfBirth: 1990 }));
console.log(unsafeFunction("2 + 2")); // Potencial problema de seguridad

export default {
  unsafeFunction,
};
