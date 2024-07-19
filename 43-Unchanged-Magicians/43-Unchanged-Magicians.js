"use strict";
/*43. -Unchanged-Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = ["Bhoothnath", "Jadogar", "Harry Potter", "Ajooba"];
function make_great(array) {
    let greatMagicians = [];
    for (const element of array) {
        greatMagicians.push(element + ", The Great.");
    }
    return greatMagicians;
}
function show_magicians(array) {
    array.forEach((element) => {
        console.log(element);
    });
}
const greatMagicians = make_great(magicians);
console.log("Original Magicians");
show_magicians(magicians);
console.log("Great Magicians");
show_magicians(greatMagicians);
