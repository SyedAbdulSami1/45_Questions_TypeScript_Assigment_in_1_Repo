"use strict";
/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
Object.defineProperty(exports, "__esModule", { value: true });
//If the alien is green
let alien_color = "green";
console.log(`alien_color is ${alien_color}`);
if (alien_color === "green") {
    console.log("Player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("Player earned 10 points");
}
else {
    console.log("Player earned 15 points");
}
//If the alien is yellow
alien_color = "yellow";
console.log(`alien_color is ${alien_color}`);
if (alien_color === "green") {
    console.log("Player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("Player earned 10 points");
}
else {
    console.log("Player earned 15 points");
}
//If the alien is red
alien_color = "red";
console.log(`alien_color is ${alien_color}`);
if (alien_color === "green") {
    console.log("Player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("Player earned 10 points");
}
else {
    console.log("Player earned 15 points");
}
