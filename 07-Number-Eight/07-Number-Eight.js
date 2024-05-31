"use strict";
/*7. Number Eight: Write addition, subtraction, multiplication, and division operations that each
result in the number 8. Be sure to enclose your operations in print statements to see the results. */
Object.defineProperty(exports, "__esModule", { value: true });
function Operations(a, c, b) {
    if (c === "+") {
        console.log(`a + b = ${a + b}`);
    }
    else if (c === "-") {
        console.log(`a - b = ${a - b}`);
    }
    else if (c === "*") {
        console.log(`a * b = ${a * b}`);
    }
    else if (c === "/") {
        console.log(`a / b = ${a / b}`);
    }
    else {
        console.log(`please put correct value`);
    }
}
Operations(5, "+", 3); //a + b = 8
Operations(10, "-", 2); //a - b = 8
Operations(2, "*", 4); //a * b = 8
Operations(16, "/", 2); //a / b = 8
