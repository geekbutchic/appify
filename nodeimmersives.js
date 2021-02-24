const firstName = process.argv[2];
const lastName = process.argv[3];
const firstInitial = firstName[0];
const secondInitial = lastName[0];
// const fullName = firstName + " " + lastName;
// const email = firstName.toLoweCase() + "." + lastName.toLowerCase() + "@codeimmersives.com";


console.log("Bentornato!!! Ciao " + firstName + " " + lastName + " come stai?" );

console.log("This is your name in all caps -> " + firstName.toUpperCase() + " " + lastName.toUpperCase() + "!!!");

console.log("Here are your initials -> " + firstInitial + "." + secondInitial + ".");
// Optional version without using process.argv variable.
console.log("Here are your initials -> " + firstName[0] + '.' + lastName[lastName.indexOf(' ') + 1] + '.');

console.log("Your email address is -> " + firstName.toLowerCase() + "." + lastName.toLowerCase() + "@codeimmersives.com");

