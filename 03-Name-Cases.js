// 03-Name Cases: Store a person’s name in a variable, 
//  and then print that person’s name in lowercase, uppercase, and titlecase.
var pName = "syed abdul Sami";
// For Upper Case
console.log("Name in Upper Case:", pName.toUpperCase());
// For Lower Case
console.log("Name in Lower Case:", pName.toLowerCase());
// For Title Case
var arryBySplit = pName.split(" ");
var pNameInTitleCase = " ";
for (var _i = 0, arryBySplit_1 = arryBySplit; _i < arryBySplit_1.length; _i++) {
    var work = arryBySplit_1[_i];
    pNameInTitleCase += work.charAt(0).toUpperCase() + work.slice(1).toLowerCase() + " ";
}
var titleCaseName = pNameInTitleCase.trim();
console.log("Name in Lower Case:", titleCaseName);
