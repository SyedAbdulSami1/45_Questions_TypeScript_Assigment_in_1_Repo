// 03-Name Cases: Store a person’s name in a variable, 
//  and then print that person’s name in lowercase, uppercase, and titlecase.

let pName: string = "syed abdul Sami";

// For Upper Case
console.log("Name in Upper Case:", pName.toUpperCase());
// For Lower Case
console.log("Name in Lower Case:", pName.toLowerCase());
// For Title Case
let arryBySplit = pName.split(" ")
let pNameInTitleCase :string=" ";
for(let work of arryBySplit) {
    pNameInTitleCase += work.charAt(0).toUpperCase()+work.slice(1).toLowerCase()+" ";
}
let titleCaseName :string = pNameInTitleCase.trim();
console.log("Name in Lower Case:", titleCaseName);
