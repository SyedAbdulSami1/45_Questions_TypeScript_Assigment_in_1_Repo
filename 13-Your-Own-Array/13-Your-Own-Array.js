/*13-Your-Own-Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”*/
var Aim = ["Honda Motorcycle", "Toyota Yaris", "KIA Sportage", "Land Cruiser", "Rolls Royce"];
Aim.forEach(function (wishes) {
    console.log("I would like to own a ".concat(wishes, "."));
});
