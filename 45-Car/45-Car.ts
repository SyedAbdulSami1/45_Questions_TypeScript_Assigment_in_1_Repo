/*45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

function makeCar (manufacturer: string, model: string,...Options: [string, any][]) {
    let car: {manufacturer: string, model: string, [key: string]: any} = {manufacturer, model};
    for (let [key, value] of Options) {
        car[key] = value;
    }
    return car;
}

console.log(makeCar("Toyota", "Camry", ["color", "blue"], ["feature", "sunroof"]));
console.log(makeCar("Toyota", "Camry", ["color","black"],["year", 2024]));