const truthy = "truthy";
const truthyToo = "Farley";
const falsey  = ""; // falsey 


console.log("falsey ", truthy && falsey);
console.log("truthy", truthy || falsey);
console.log("Farley", truthy && truthyToo);

console.log("!! falsey == false", !!falsey);
console.log("!! truthy == true", !!truthy);
