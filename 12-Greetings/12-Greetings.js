/*12. Greetings: Start with the array you used in Exercise 11, but instead of just printing
each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.*/
var friendsArray = ["Waqar", "Hassam", "Asif", "Naveed", "Ali", "Salman"];
for (var _i = 0, friendsArray_1 = friendsArray; _i < friendsArray_1.length; _i++) {
    var myFriend = friendsArray_1[_i];
    console.log("Congratulations ".concat(myFriend, " for clearing your first exam."));
}
;
