"use strict";
// 03-Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName3 = "Sami";
console.log("Name in Upper Case:", personName3.toUpperCase());
console.log("Name in Lower Case:", personName3.toLowerCase());
let firstName = personName3.charAt(0).toUpperCase();
let lastName = personName3.slice(1).toLowerCase();
console.log("Name in Title Case:", firstName + lastName);
