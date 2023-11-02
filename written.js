/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  
 */
/**
 * Initialise a variable called goose one to the values: smart, intelligent, sensible.
 * Initialise a variable called goose two to the values: silly, unintelligent, nonsensible.
 * Now concatenate the two arrays in a variable called total geese with goose one then goose two.
 * Then console log total geese.
 */
var gooseOne = ["smart", "intelligent", "sensible"];
var gooseTwo = ["silly", "unintelligent", "nonsensible"];
var totalGeese = gooseOne.concat(gooseTwo);
console.log(totalGeese); // [ `smart`, `intelligent`, `sensible`, `silly`, `unintelligent`, `nonsensible` ]
/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 *  
 */
/**
 * initialise the variable `animals` to a 2-Dimensional array containing the values below:
 *          column[0]   column[1]   column[2]
 * Row 1    Dog         Husky       Age: 2.0
 * Row 2    Cat         Orange      Age: 3.0
 * 
 * now use console.table() to showcase the information in a table.
 * 
 * Then based on the values stored in the schedule 2D array, console log out this sentence use backticks:
 * The _Dog_, a _Husky_, is _2.0_ years old.
 * 
 */
var animals = [
    ["Dog", "Husky", 2.0],
    ["Cat", "Orange", 3.0],
];
console.table(animals);
sentence = `The ${schedule[0][0]}, a ${schedule[1][0]}, is ${schedule[2][0]} years old.`;
console.log(sentence); // The Dog, a Husky, is 2 years old.