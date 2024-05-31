"use strict";
/*11. Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.*/
Object.defineProperty(exports, "__esModule", { value: true });
const friendsArray = ["Waqar", "Hassam", "Asif", "Naveed", "Ali", "Salman"];
let i = 0;
for (const myFriend of friendsArray) {
    console.log(friendsArray[i]);
    i++;
}
;
