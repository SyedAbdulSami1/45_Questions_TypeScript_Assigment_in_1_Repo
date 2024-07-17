"use strict";
/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message = "I love TypeScript") {
    console.log(`This T-Shirt Size is "${size}" and printed message is ${message}.`);
}
//with difault message
make_shirt("Large");
make_shirt("Medium");
//any size with different message.
make_shirt("Any", "Pakistan Zindabad");
