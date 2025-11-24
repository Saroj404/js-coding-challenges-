 // Q1. Type Checker
 // Write a function 
// checkTypes(values) that takes an array of mixed values and returns 
// an array of their types using 
// typeof .
 // Input: 
// 1, "a", true, null, undefined]
 // Output: 
// ["number", "string", "boolean", "object", "undefined"

function checkTypes(values) {
  return values.map(value => typeof value);
}

// Example usage:
const input = [1, "a", true, null, undefined];
const output = checkTypes(input);
console.log(output); 