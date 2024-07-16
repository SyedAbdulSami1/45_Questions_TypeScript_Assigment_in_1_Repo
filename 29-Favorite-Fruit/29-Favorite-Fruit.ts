/*29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/

let favorite_fruits : string[] = ["apple", "orange", "pineapple"];
console.log(favorite_fruits);
if (favorite_fruits.includes("apple") == true) {
    console.log("You really like apple");    
};
if (favorite_fruits.includes("orange") == true) {
    console.log("You really like orange");
};
if (favorite_fruits.includes("pineapple") == true) {
    console.log("You really like pinapple");
};
if (favorite_fruits.includes("banana") == true) {
    console.log("You really like bananas!");
};
if (favorite_fruits.includes("mango") == true) {
    console.log("You really like mangoes!");
};