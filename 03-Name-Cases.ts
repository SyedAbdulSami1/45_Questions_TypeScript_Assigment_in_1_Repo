// 03-Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Sami";

console.log("Name in Upper Case:", personName.toUpperCase());
console.log("Name in Lower Case:", personName.toLowerCase());

let firstName = personName.charAt(0).toUpperCase();
let lastName = personName.slice(1).toLowerCase();
console.log("Name in Title Case:", firstName + lastName);
