// 03-Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let p3Name: string = "Sami";

console.log("Name in Upper Case:", p3Name.toUpperCase());
console.log("Name in Lower Case:", p3Name.toLowerCase());

let firstName = p3Name.charAt(0).toUpperCase();
let lastName = p3Name.slice(1).toLowerCase();
console.log("Name in Title Case:", firstName + lastName);
