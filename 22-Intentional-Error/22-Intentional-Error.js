"use strict";
/*22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
Object.defineProperty(exports, "__esModule", { value: true });
let cities = ["Pakistan", "UK", "USA", "Canada"];
console.log(cities[4]);
cities[4] = "Australia";
console.log(cities[4]); // Now I corrected the error before closing the program.
// Now let's run the corrected code
