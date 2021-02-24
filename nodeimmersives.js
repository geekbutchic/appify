let firstName = process.argv[2];
let lastName = process.argv[3];
let greeting = process.argv[4];
let firstInitial = firstName[0];
let secondInitial = lastName[0];


console.log("Bentornato!!! Ciao " + firstName + " " + lastName + " come stai?" );

console.log("This is your name in all caps -> " + firstName.toUpperCase() + " " + lastName.toUpperCase() + "!!!");

console.log("Here are your initials -> " + firstInitial + "." + secondInitial + ".");
// Optional version without using process.argv variable.
console.log("Here are your initials -> " + firstName[0] + '.' + lastName[lastName.indexOf(' ') + 1] + '.');

console.log("Your email address is -> " + firstName.toLowerCase() + "." + lastName.toLowerCase() + "@codeimmersives.com");

