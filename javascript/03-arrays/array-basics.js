// ============================================================
// JAVASCRIPT ARRAY PRACTICE — ARRAY BASICS
// ============================================================

// ============================================================
// 01. CREATE ARRAYS
// ============================================================

// Q1. Create an array containing 5 fruit names.
// Expected: ["Apple", "Banana", "Mango", "Orange", "Grapes"]
/*
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Q2. Create an array containing 5 numbers.
// Expected: [10, 20, 30, 40, 50]

const numbers = [10, 20, 30, 40, 50]

// Q3. Create an array containing your 5 favorite programming languages.

const favProgrammingLanguages = [
    "React JS",
    "Javascript",
    "Python",
    "C Program",
    "NEXT JS",
];

// Q4. Create an array containing different data types:
// a string, a number, a boolean, and null.

const mixedData = ["Anit", 23, true, null];

// Q5. Create an empty array called `students`.

const student = []

// ============================================================
// 02. ACCESS ARRAY ELEMENTS
// ============================================================

// Q6. Create this array:
// const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// Print the first element.

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits[0]);

// Q7. Using the same array, print the third element.

console.log(fruits[2]);

// Q8. Print the last element of the array.

console.log(fruits[fruits.length - 1]);

// Q9. Print the second and fourth elements.

console.log(fruits[1]);
console.log(fruits[3]);

// Q10. Create an array of 5 numbers and print every element
// individually using its index.

// ============================================================
// 03. ARRAY INDEX
// ============================================================

// Q11. Create this array:
// const numbers = [10, 20, 30, 40, 50];
// Print the index of the first element .

const numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(numbers[0]));

// Q12. Print the index of the last element.
console.log(numbers.indexOf(numbers[numbers.length - 1]));

// Q13. Print the element at index 2.
console.log(numbers[2]);

// Q14. Print the element at index 4.
console.log(numbers[4]);

// Q15. What happens when you try to access an index
// that does not exist?
//
// Example:
console.log(numbers[10]);
//Output: undefined
// ============================================================
// 04. ARRAY LENGTH
// ============================================================

// Q16. Create an array of 5 numbers and print its length.

const num = [1, 2, 3, 4, 5];
console.log(num.length);

// Q17. Create an array of 7 names and print its length.

const friends = [
    "Sudip",
  "Bhim",
  "Pratik",
  "Nischal",
  "Samana",
  "Sandesh",
  "Nikesh",
];

let lengthOfFriends = friends.length;
console.log("Total length of friends = " + lengthOfFriends);

// Q18. Find the last index of this array using `.length`:

const colors = ["Red", "Green", "Blue", "Yellow"];

let lastIndex = colors.length - 1;
console.log(lastIndex);

// Q19. Print the last element of this array using `.length`:

const fruits = ["Apple", "Banana", "Mango", "Orange"];

let lastElem = fruits.length - 1;
console.log(fruits[lastElem]);

// ============================================================
// 05. UPDATE ARRAY ELEMENTS
// ============================================================

// Q20. Change "Banana" to "Pineapple".

const fruits = ["Apple", "Banana", "Mango"];
fruits[1] = "Pineapple";

console.log(fruits[1]);

// Q21. Change the first element of this array to "HTML".

const technologies = ["CSS", "JavaScript", "React"];
technologies[0] = "HTML";
console.log(technologies[0]);

// Q22. Change the last element of this array to 100.

const numbers = [10, 20, 30, 40, 50];
numbers[numbers.length - 1] = 100;

console.log(numbers);

// Q23. Change the second and fourth elements.

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits[1] = "Pineapple";
fruits[3] = "Watermelon";

console.log(fruits);


// ============================================================
// 06. COMBINATION PRACTICE
// ============================================================

// Q25. Create an array of 5 student names.
// Print the first student and the last student.

const students = ["Anit", "Sudip", "Bhim", "Ram", "Sita"];

for (let i = 0; i < students.length; i++) {
    if (i === 0 || i === students.length - 1) {
        console.log(students[i]);
    }
}


// ============================================================
// CHALLENGE
// ============================================================

// Q26. Create an array of 5 numbers.
// Find the sum of the first and last elements.

const num = [2, 4, 6, 8, 10];
console.log(num[0] + num[num.length - 1]);

// Q27. Create an array of 5 numbers.
// Find the difference between the last and first elements.

const num = [2, 4, 6, 8, 10];
console.log(num[num.length - 1] - num[0]);

// Q28. Create an array of 5 numbers.
// Multiply the second and fourth elements.

const num = [2, 4, 6, 8, 10];
console.log(num[1] * num[3]);
*/
