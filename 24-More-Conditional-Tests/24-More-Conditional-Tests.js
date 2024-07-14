"use strict";
/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Tests for equality and inequality with strings");
console.log(`"Pakistan" == "Pakistan"=${"Pakistan" == "Pakistan"}`); //true
console.log(`"Pakistan" == "pakistan".toLocaleLowerCase()=${"Pakistan" == "pakistan".toLocaleLowerCase()}`); //false
console.log(" ----------------------- x ----------------------- ");
console.log("Tests using the lower case function");
console.log(`"Pakistan".toLowerCase() == "pakistan" = ${"Pakistan".toLowerCase() == "pakistan"}`); //true
console.log(" ----------------------- x ----------------------- ");
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(`5>6 = ${5 > 6}`); //True
console.log(`5<7 = ${5 < 7}`); //False
console.log(" ----------------------- x ----------------------- ");
console.log("Tests using 'and' and 'or' operators");
console.log(`true && false = ${true && false}`); //false
console.log(`true || false = ${true || false}`); //true
console.log(" ----------------------- x ----------------------- ");
console.log("Test whether an item is in a array");
let stationery = ["Pencil", "Books", "Papers"];
console.log(stationery);
console.log("Is 'Pencil' in a stationery array?");
console.log(stationery.includes("Pencil")); //true
console.log(" ----------------------- x ----------------------- ");
console.log("Test whether an item is not in a array");
console.log("Is 'Flower' in a stationery array?");
console.log(stationery.includes("Flower")); //false
console.log(" ----------------------- x ----------------------- ");
