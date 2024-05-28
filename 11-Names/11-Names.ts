/*11. Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.*/

const friendsArray:string[]=["Waqar", "Hassam", "Asif", "Naveed", "Ali", "Salman"];
let i:number=0;
for (const myFriend of friendsArray) {
    console.log(friendsArray[i]);
    i++
};