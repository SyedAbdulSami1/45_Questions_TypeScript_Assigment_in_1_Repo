"use strict";
/*21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
Object.defineProperty(exports, "__esModule", { value: true });
var personFor21 = {
    name: "Syed Abdul Sami",
    age: 36,
    hobies: ["Reading", "Learning", "Coding"],
    address: { city: "Karachi", country: "Pakistan" },
    getDetails: function () {
        console.log("My name is ".concat(this.name, ". I am ").concat(this.age, " years old and I enjoy ").concat(this.hobies.join(", "), "."));
    }
};
personFor21.getDetails();
