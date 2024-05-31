/*16-More-Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program 
informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

const guestList : string[] = ["Waqar", "Hassam", "Asif"];
console.log(`${guestList[2]} excused himself from coming for dinner.`);
guestList.splice(2,1,"Naveed")  
console.log("A bigger dinner table");
guestList.unshift("Ali");           //add one in beginning
console.log("Add in beginning = ",guestList);
guestList.splice(1,0,"Ahmad");      // add in middle
console.log("Add in middle = ",guestList);
guestList.push("Zain");           //add one in end//use append()
console.log("add in end by push():", guestList);
guestList.forEach(element => {
    console.log(`Dear ${element}, you are invited to dinner.`);

});
