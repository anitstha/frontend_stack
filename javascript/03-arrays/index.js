/*
const student = ["Ram", "Sita", "Krishna"];

// accessing all elements inside an array of student using for loop
for (let i = 0; i <= student.length - 1; i++) {
  console.log(`Student at index ${i} is ${student[i]}`);
}

// push - adds new elem at end
const stdName = student.push("Anit");
console.log(stdName); //4
console.log(student);

//unshift - adds new elem at start
const newName = student.unshift("Mamata");
console.log(newName); //5
console.log(student);

//pop() - removes last elem
console.log(student);
student.pop();
console.log(student);

//shift() - removes first elem
student.shift();
console.log(student);

//slice() - copy
const studentCopy = student.slice();
console.log(student);
console.log(studentCopy);
console.log(student === studentCopy);

//is array or not - to do


//Array Destructuring
const [fruit1, , fruit3] = ["apple", "banana", "guava"];
console.log(fruit1, fruit3);

//Rest and Spread operators

//rest operator
const fruits = ["apple", "banana", "cherry", "guava", "watermelon"];
const [first, second, ...restFruits] = fruits;
console.log(first);
console.log(second);
console.log(restFruits);

//spread operators
const num = [1, 2, 3, 4];
const newNum = [...num, 5, 6, 7];
console.log(num);
console.log(newNum);

// swapping using destructuring

let first = 1;
let second = 2;

[first, second] = [second, first];
console.log(first); //2
console.log(second); //1

// Merge
const animals = ["cow", "dog", "cat"];
const birds = ["sparrow", "parrot"];
const animalsAndBirds = [...animals, ...birds];
console.log(animalsAndBirds);

//length property
//2 ** 32 = 4294967295 (max length of array)

const arr1 = [23, 45, 32];
console.log(arr1.length); //3

arr1.length = 2; //only two elements will be stored in arr1 now
console.log(arr1);

arr1.length = 9; //three elements will be stored and rest of 6 elements will filled with empty elements arr1 now
console.log(arr1);

//concat() method

const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];
const mergedArray = first.concat(second, third);
console.log(mergedArray);

// joint() method

const items = ["pen", "pencil", "bag"]; //seperates the items with new string

const joined = items.join(">");
console.log(joined);

// fill() method

const colors = ["black", "white", "red"];
colors.fill("blue");
console.log(colors); //[ 'blue', 'blue', 'blue' ]

colors.fill("green", 1, 3);
console.log(colors); //[ 'blue', 'green', 'green' ]

// includes() method

const names = ["anit", "mamata"];
console.log(names.includes("anit")); // true
console.log(names.includes("Mamata")); //false

// indexOf() and lastIndexOf() method

const names = ["anit", "mamata", "shila", "rita", "anit"];
console.log(names.indexOf("shila")); //2
console.log(names.indexOf("laxman")); //-1
console.log(names.indexOf("anit")); //0
console.log(names.lastIndexOf("anit")); //4

// reverse()

const nums = [1, 2, 3];
console.log(nums); //[ 1, 2, 3 ]
console.log(nums.reverse()); //[3, 2, 1]

// sort()
// The default sort() method converts the element types into string
// The default sorting order is ascending

const names = ["sudip", "anit", "bhim"];
console.log("Sort names in Descending order is:", names.sort()); //[ 'anit', 'bhim', 'sudip' ]

names.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
});
console.log("Sort names in Descending order is:", names); //[ 'sudip', 'bhim', 'anit' ]

const age = [4, 2, 6, 84, 12, 23, 45];

age.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
});
console.log(age); //[2,  4,  6, 12, 23, 45, 84]

// splice()
// splice(start, deleteCount, items)

const names = ["sudip", "anit", "bhim"];
console.log(names.splice(0, 2)); //[ 'sudip', 'anit' ] (0th position bata suru vayera 2nd index ko element lai delete garyo)
*/
