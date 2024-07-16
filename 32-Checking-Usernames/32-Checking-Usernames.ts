/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users : string[] = ["Asif", "John", "Waqar","Aasim", "Ali"];
let new_users : string[] = ["Asif", "JOHN", "Sami", "Naveed", "Ahmad"];

let lowerCurrentUsers = current_users.map(user => user.toLowerCase());

new_users.forEach(newUser => {
    let lowerNewUser = newUser.toLowerCase();
    if(lowerCurrentUsers.includes(lowerNewUser)){
        console.log(`new username= "${newUser}" has already been used`);        
    } else {
        console.log(`username= ${newUser} is available`);        
    }
})