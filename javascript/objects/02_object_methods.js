/*
//Object Methods & Imutability
// ========================================================== 
// 1- Built-in Object Methods(keys, values, entries)
// ==========================================================

// The Goal: Converting an object's keys or values into arrays so you can loop through them or count them easily.

const team = {
    anit: "Lead Developer",
    sudip: "Project Manager",
    bhim: "QA Engineer"
};

// Object.keys(object)
const name = Object.keys(team);
console.log(name); // output: [ 'anit', 'sudip', 'bhim' ]
console.log(`Total team members is ${name.length}`);

// Object.values(object)
const roles = Object.values(team);
console.log(roles); // output: [ 'Lead Developer', 'Project Manager', 'QA Engineer' ]

// Object.entries(object)
const pairs = Object.entries(team);
console.log(pairs);
// Output:
// [
//     [ 'anit', 'Lead Developer' ],
//   [ 'sudip', 'Project Manager' ],
//   [ 'bhim', 'QA Engineer' ]
// ]



// ========================================================== 
// 2- Immutability (Object.freeze vs Object.seal)
// ==========================================================


// The Goal: Protecting your objects from being altered accidentally by other parts of your app.

// In a large app, you will have certain configurations (like your API URLs, system constants, or theme settings) that should never be tampered with while the app is running. JavaScript allows you to lock objects down in two distinct levels.


// ---------------------------------------------------------
// Object.freeze(object) => Total Lockdown
// ---------------------------------------------------------

const appConfig = {
    apiBaseUrl: "https://api/sochau.com",
    timeout: 5000,
    theme: "dark"
}

//freeze the object completely
Object.freeze(appConfig);

appConfig.theme = "light"
console.log(appConfig.theme); //dark


// ---------------------------------------------------------
// Object.seal(object) => values can change, structure can't
// ---------------------------------------------------------

const userSession = {
    username: "Anit",
    isLoggedIn: true
    };
    
    // Seal the object
    Object.seal(userSession);
    
    // Allowed: Modifying an existing property
    userSession.isLoggedIn = false; 
    
    // Not Allowed: Adding new structural data
    userSession.ipAddress = "192.168.1.1"; 
    
    // Not Allowed: Deleting structural data
    delete userSession.username;
    
    console.log(userSession);
    // Output: { username: "Anit", isLoggedIn: false } 
    // Notice: isLoggedIn successfully changed, but ipAddress was ignored!
    
    //check if an object is locked or not
    console.log(Object.isFrozen(appConfig)); // true
    console.log(Object.isSealed(userSession)); // true
    
    
    
    
    // ---------------------------------------------------------
    // map() and filter()
    // ---------------------------------------------------------
    
    const warehouse = [
        { id: 1, itemName: "Laptop", price: 800, inStock: true },
        { id: 2, itemName: "Phone", price: 500, inStock: false },
        { id: 3, itemName: "Monitor", price: 200, inStock: true }
    ];
    
// map()
// const productNames = warehouse.map(item => item.itemName); // 'item' represents one row of our table at a time
// console.log(productNames);
   
// filter()
// const availableItems = warehouse.map(item => item.inStock == true);
// console.log(availableItems);

// find()
const specificProduct = warehouse.find(item => item.id == 2);
console.log(specificProduct)

// reduce()
// .reduce() takes two things: a function, and a starting number (0)
const totalInventoryValue = warehouse.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0); // 0 is our starting total

console.log(totalInventoryValue);
// Output: 1500

*/









