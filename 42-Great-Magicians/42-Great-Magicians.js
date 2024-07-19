"use strict";
/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = ["Bhoothnath", "Jadogar", "Harry Potter", "Ajooba"];
function show_magicians(Array) {
    for (const element of Array) {
        console.log(element);
    }
}
function make_great(ArrayList) {
    for (let i = 0; i < ArrayList.length; i++) {
        magicians[i] = magicians[i] + ", " + "The Great.";
    }
}
make_great(magicians);
show_magicians(magicians);
