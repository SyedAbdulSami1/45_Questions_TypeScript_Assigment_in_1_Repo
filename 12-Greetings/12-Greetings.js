"use strict";
/*12. Greetings: Start with the array you used in Exercise 11, but instead of just printing
each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
const friendsArray = ["Waqar", "Hassam", "Asif", "Naveed", "Ali", "Salman"];
for (const myFriend of friendsArray) {
    console.log(`Congratulations ${myFriend} for clearing your first exam.`);
}
;
