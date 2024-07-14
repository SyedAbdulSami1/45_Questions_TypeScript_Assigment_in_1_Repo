"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*17-Shrinking-Guest-List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.*/
const guestList = ["Waqar", "Hassam", "Asif"];
guestList.splice(2, 1, "Naveed");
guestList.unshift("Ali"); //add one in beginning
guestList.splice(1, 0, "Ahmad"); // add in middle
guestList.push("Zain"); //add one in end//use append()
console.log("this array form import 16:", guestList);
console.log("Due to some issues, I can only invite two people for dinner.");
console.log(`Dear ${guestList.pop()}, I can't invite you to dinner.`);
console.log(`Dear ${guestList.pop()}, I can't invite you to dinner.`);
console.log(`Dear ${guestList.pop()}, I can't invite you to dinner.`);
console.log(`Dear ${guestList.pop()}, I can't invite you to dinner.`);
guestList.forEach(element => {
    console.log(`Dear ${element}, "you’re still invited."`);
});
guestList.splice(0, 2);
console.log(`Now, My emty list=`);
console.log(guestList);
