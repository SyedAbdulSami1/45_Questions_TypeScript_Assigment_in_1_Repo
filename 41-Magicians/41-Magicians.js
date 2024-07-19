"use strict";
/*41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = ["Bhoothnath", "Jadogar", "Harry Potter", "Ajooba"];
function show_magicians(Array) {
    let i = 0;
    for (const element of Array) {
        i++;
        console.log(`${i}). ${element}`);
    }
}
show_magicians(magicians);
