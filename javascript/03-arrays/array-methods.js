// ============================================================
// JAVASCRIPT ARRAY METHODS PRACTICE
// ============================================================

// ============================================================
// 01. PUSH()
// Add an element to the END of an array.
// ============================================================

// Q1. Add "Mango" to the end of this array.
// Expected: ["Apple", "Banana", "Mango"]
/*
const fruits1 = ["Apple", "Banana"];
fruits1.push("Mango");

console.log(fruits1);

// ============================================================
// 02. POP()
// Remove the LAST element from an array.
// ============================================================

// Q2. Remove the last element and print the removed element.
// Expected: "Orange"

const fruits2 = ["Apple", "Banana", "Mango", "Orange"];
const removedFruit = fruits2.pop();

console.log(removedFruit);
*/

// ============================================================
// 03. UNSHIFT()
// Add an element to the BEGINNING of an array.
// ============================================================

// Q3. Add "Apple" to the beginning of this array.
// Expected: ["Apple", "Banana", "Mango"]

const fruits3 = ["Banana", "Mango"];

// ============================================================
// 04. SHIFT()
// Remove the FIRST element from an array.
// ============================================================

// Q4. Remove the first element and print the removed element.
// Expected: "Apple"

const fruits4 = ["Apple", "Banana", "Mango"];

// ============================================================
// 05. INCLUDES()
// Check whether an array contains a specific value.
// ============================================================

// Q5. Check whether "Mango" exists in the array.
// Expected: true

const fruits5 = ["Apple", "Banana", "Mango", "Orange"];

// ============================================================
// 06. INDEXOF()
// Find the index of a specific value.
// ============================================================

// Q6. Find the index of "Mango".
// Expected: 2

const fruits6 = ["Apple", "Banana", "Mango", "Orange"];

// ============================================================
// 07. SLICE()
// Extract part of an array WITHOUT changing the original.
// ============================================================

// Q7. Create a new array containing "Banana" and "Mango".
// Expected: ["Banana", "Mango"]

const fruits7 = ["Apple", "Banana", "Mango", "Orange"];

// ============================================================
// 08. SPLICE()
// Remove an element from a specific position.
// ============================================================

// Q8. Remove "Mango" using splice().
// Expected: ["Apple", "Banana", "Orange"]

const fruits8 = ["Apple", "Banana", "Mango", "Orange"];

// ============================================================
// 09. FOREACH()
// Run some code for every element.
// ============================================================

// Q9. Print every number multiplied by 2.
// Expected:
// 20
// 40
// 60
// 80
// 100

const numbers1 = [10, 20, 30, 40, 50];

// ============================================================
// 10. MAP()
// Create a NEW array by transforming every element.
// ============================================================

// Q10. Create a new array containing the square of every number.
// Expected: [1, 4, 9, 16, 25]

const numbers2 = [1, 2, 3, 4, 5];

// ============================================================
// 11. FILTER()
// Create a NEW array containing elements that satisfy a condition.
// ============================================================

// Q11. Create a new array containing only even numbers.
// Expected: [2, 4, 6, 8, 10]

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ============================================================
// 12. FIND()
// Return the FIRST element that satisfies a condition.
// ============================================================

// Q12. Find the first number greater than 50.
// Expected: 60

const numbers4 = [10, 30, 60, 40, 80];

// ============================================================
// 13. SOME()
// Check whether AT LEAST ONE element satisfies a condition.
// ============================================================

// Q13. Check whether the array contains at least one negative number.
// Expected: true

const numbers5 = [10, 20, -5, 30, 40];

// ============================================================
// 14. EVERY()
// Check whether ALL elements satisfy a condition.
// ============================================================

// Q14. Check whether every number is positive.
// Expected: true

const numbers6 = [10, 20, 30, 40, 50];

// ============================================================
// 15. REDUCE()
// Reduce an array to a SINGLE value.
// ============================================================

// Q15. Find the sum of all numbers using reduce().
// Expected: 150

const numbers7 = [10, 20, 30, 40, 50];

// ============================================================
// 16. MIXED CHALLENGE
// ============================================================

// Q16. From this array:
// 1. Get only the even numbers.
// 2. Double each even number.
// 3. Find the total of the resulting numbers.
//
// Expected:
// Even numbers: [2, 4, 6, 8]
// Doubled: [4, 8, 12, 16]
// Total: 40

const numbers8 = [1, 2, 3, 4, 5, 6, 7, 8];

// ============================================================
// 17. MIXED CHALLENGE
// ============================================================

// Q17. Find the average of all numbers in this array
// using array methods.
//
// Expected: 30

const numbers9 = [10, 20, 30, 40, 50];
