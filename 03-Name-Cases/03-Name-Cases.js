"use strict";
// 03-Name Cases: Store a person’s name in a variable, 
//  and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let pName = "syed abdul Sami";
// For Upper Case
console.log("Name in Upper Case:", pName.toUpperCase());
// For Lower Case
console.log("Name in Lower Case:", pName.toLowerCase());
// For Title Case
let arryBySplit = pName.split(" ");
let pNameInTitleCase = " ";
for (let work of arryBySplit) {
    pNameInTitleCase += work.charAt(0).toUpperCase() + work.slice(1).toLowerCase() + " ";
}
let titleCaseName = pNameInTitleCase.trim();
console.log("Name in Lower Case:", titleCaseName);
