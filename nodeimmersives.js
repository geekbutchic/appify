let firstName = process.argv[2];
let lastName = process.argv[3];
let greeting = process.argv[4];
let firstInitial = firstName[0];
let secondInitial = lastName[0];



console.log(firstName + " " + lastName);

console.log(greeting + " " + firstName + " " + lastName);

console.log(firstName.toUpperCase() + ' ' + lastName.toUpperCase() + ' ' + "building first app");

console.log(firstInitial + " " + secondInitial);



