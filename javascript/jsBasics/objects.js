/*Exercise 1: The Profile Card**

1. Create an object named `profile`.
2. Give it three properties:
 `username` (your name or a fake username)
 `followers` (any number)
 `isVerified` (set it to `true` or `false`)
3. Use `console.log()` to print out the `followers` count.

// solution:
const profile = {
    username: "anitshrestha",
    followers: 1000,
    isVerified: true,
}
console.log(profile.followers);


Exercise 2: The Video Game Item**

1. Create an object named `sword`.
2. Give it these properties:
`itemName` (e.g., "Excalibur")
`damagePoints` (e.g., 85)
`elementalType` (e.g., "Fire")
3. Use `console.log()` to print out the `itemName`.

// solution:
const sword = {
    itemName: "Excalibur",
    damagePoints: 85,
    elementalType: "Fire"
    }
    console.log(sword.itemName);
    
    
    Exercise 3: The Movie Details**
    
    1. Create an object named `favoriteMovie`.
    2. Give it these properties:
    `title` (a string)
    `director` (a string)
    `releaseYear` (a number)
    3. Use `console.log()` to print out the `releaseYear`.
    
    const favoriteMovie = {
        title: "Spiderman Brand New Day",
        director: "Destin Daniel Cretton",
        releaseYear: "July 31, 2026"
        }
console.log(favoriteMovie.releaseYear);

//* changing and adding data inside object

const profile = {
    username: "anitshrestha",
    followers: 1000,
    isVerified: true,
}

// update username
profile.username = "mamatashrestha"

// add new property(password)
profile.password = "hello123"

console.log(profile.username);
console.log(profile.password);

//key ma space huda double quote ("") rakhnu parxa
const obj = {
    "first name": "Anit",
    "last name": "Shrestha"
}
// 
const person = { name: "Anit" };
const whatToLookup = "name";

console.log(person[whatToLookup]);

// function inside object (method)


Exercise 1: The Alarm Clock**

1. Create an object named `alarm`.
2. Give it a method named `snooze`.
3. Inside the `snooze` method, make it `console.log("5 more minutes...")`.
4. Call the method (`alarm.snooze()`) to make it run.

// solution
const alarm = {
    //method snooze(function named snooze inside object)
    snooze: function () {
        console.log("5 more minutes...");

    }
}
alarm.snooze();

Exercise 2: The Calculator**

1. Create an object named `miniCalc`.
2. Give it a method named `add` that takes two parameters (`a`, `b`).
3. Inside the method, write `console.log(a + b);`.
4. Call the method and pass two numbers into it (e.g., `miniCalc.add(10, 5);`).

// solution
const miniCalc = {
    add: function (a, b) {
        console.log(a + b);
    }
}
miniCalc.add(10, 5)

// "this" keyword 

Now that you can write methods, let's look at a common problem. What if a method inside an object needs to read or use another property *inside that same object*?

For example, if you have a user object, and the `greet` method needs to print the user's `name`.

To do this, we use the keyword `this`. Inside an object's method, `this` means "this current object".


If you don't use `this` (e.g., if you just wrote `console.log(name)`), JavaScript will look for a global variable called `name` outside the object instead of looking inside the object box, resulting in an error or the wrong data.

Exercise 1: The Smart Car**

1. Create an object named `car`.
2. Give it two properties: `brand` (e.g., `"Tesla"`) and `fuelLevel` (e.g., `80`).
3. Give it a method named `checkFuel`.
4. Inside the `checkFuel` method, make it print: `"The Tesla has 80% fuel left." dynamically using `this.brand` and `this.fuelLevel`.
5. Call `car.checkFuel();`.

// solution
const car = {
    brand: "Tesla",
    fuelLevel: 80,
    checkFuel: function () {
        console.log(`The ${this.brand} has ${this.fuelLevel} fuel left.`)
    }
}
car.checkFuel();


Exercise 2: Status Update**

1. Create an object named `gameCharacter`.
2. Give it properties: `name` (e.g., `"Arthur"`) and `health` (e.g., `100`).
3. Give it a method named `takeDamage`.
4. Inside `takeDamage`, change the health value by subtracting 20 from it (Hint: `this.health = this.health - 20;`).
5. On the next line inside the method, `console.log` the new health.
6. Call `gameCharacter.takeDamage();` to see it work.

// solution
const gameCharacter = {
    name: "Alok",
    health: 100,
    takeDamage: function(){
        this.health = this.health - 20;
        console.log(this.health);
    }
}
gameCharacter.takeDamage();



// class

class SmartCar {
    // 1. The constructor is just a setup function. 
    // It runs automatically ONLY when you create a new car.
    constructor(carBrand, startFuel) {
        this.brand = carBrand;
        this.fuelLevel = startFuel;
    }
    
    // 2. This is an action that ALL cars made from this blueprint can do.
    drive() {
        this.fuelLevel = this.fuelLevel - 10;
        console.log(`Remaining fuel: ${this.fuelLevel}`);
    }
}

// This creates a completely independent car object box
const myTesla = new SmartCar("Tesla", 80);


Exercise 1: The Footballer Blueprint**

1. Create a class named `Footballer`.
2. Inside the `constructor`, accept two parameters: `playerName` and `jerseyNumber`.
3. Inside the constructor, assign them to `this.name` and `this.number`.
4. Below the class, use the `new` keyword to create a player named `player1`. Pass it the name `"Messi"` and number `10`.
5. Use `console.log(player1.name)` to print out the name.

// solution
class Footballer {
    constructor(playerName, jerseyNumber) {
        this.name = playerName;
        this.number = jerseyNumber;
    }
}

const player1 = new Footballer("Messi", 10);
console.log(player1.name);
console.log(player1.number);

Exercise 2: The Social Media Post Blueprint**

1. Create a class named `Post`.
2. Inside the `constructor`, accept two parameters: `authorName` and `likesCount`.
3. Assign them to `this.author` and `this.likes`.
4. Below the class, use the `new` keyword to create a post named `myPost`. Pass it your username and any number of likes.
5. Use `console.log(myPost.likes)` to print the likes.

class Post {
    constructor(authorName, likesCount){
        this.author = authorName;
        this.likes = likesCount;
        }
        }

        const myPost = new Post("anit",20);
        console.log(myPost.author)
        console.log(myPost.likes)
        
        
        //methods inside class
        
        Exercise 1: The Footballer's Number Change**
        
        1. Take your `Footballer` class.
        2. Add a method named `changeNumber` that takes *one parameter* (e.g., `newNumber`).
        3. Inside that method, update the player's number (Hint: `this.number = newNumber;`).
        4. Below your class, create a player, call `player1.changeNumber(30);`, and then `console.log(player1.number)` to make sure it changed from 10 to 30.
        
        // solution
        class Footballer {
            constructor(playerName, jerseyNumber) {
                this.name = playerName;
                this.number = jerseyNumber;
            }
        
            // Method that accepts a parameter to change the internal data
            changeNumber(newNumber) {
                this.number = newNumber;
            }
        }
        
        // 1. Create the player with number 10
        const player1 = new Footballer("Messi", 10);
        console.log(`Original Number: ${player1.number}`); // Output: 10
        
        // 2. Change the number using our method
        player1.changeNumber(30);
        console.log(`Updated Number: ${player1.number}`);  // Output: 30

        Exercise 2: Boosting Post Likes**
        
        1. Take your `Post` class.
        2. Add a method named `likePost`.
        3. Inside `likePost()`, increase `this.likes` by 1.
        4. Below your class, create a post, call `myPost.likePost();`, and then `console.log(myPost.likes)` to see the count go up from 20 to 21.
  
        // solution
        class Post {
            constructor(authorName, likesCount) {
                this.author = authorName;
                this.likes = likesCount;
    }
    
    // Method that increments the internal likes count by 1
    likePost() {
        this.likes = this.likes + 1; // Or shorthand: this.likes++;
    }
}

// 1. Create a post starting with 20 likes
const myPost = new Post("anit", 20);
console.log(`Starting Likes: ${myPost.likes}`); // Output: 20

// 2. Call the method to simulate clicking the 'like' button
myPost.likePost();
console.log(`After Liking: ${myPost.likes}`);   // Output: 21


// * Mini-project
//The Master Challenge: The E - Commerce Product

Imagine you are building a shopping application like an e - commerce store.

1. Create a class named `Product`.
2. The `constructor` should accept three parameters: `productName`, `originalPrice`, and`category`.Save them to`this.name`, `this.price`, and`this.category`.
3. Add a method named `applyDiscount` inside the class that takes a`discountAmount` as a parameter.Inside the method, subtract that amount from`this.price`.
4. Below your class, use the `new` keyword to create an item called `myGadget` with the name`"Headphones"`, a price of`150`, and the category`"Electronics"`.
5. Call your `applyDiscount` method to shave `20` off the price.
6. `console.log(myGadget.price)` to verify the final price is`130`.


// solution
class Product {
    constructor(productName, originalPrice, category) {
        this.name = productName;
        this.price = originalPrice;
        this.category = category;
    }
    
    // adding method
    applyDiscount(discountAmount) {
        this.price = this.price - discountAmount;
    }
}

const myGadget = new Product("Headphones", 150, "Electronics");
myGadget.applyDiscount(20);
console.log(myGadget.price);


// Class Inheritance (extend and super)

//physical product class
class Product {
    constructor(productName, originalPrice, category) {
        this.name = productName;
        this.price = originalPrice;
        this.category = category;
    }
}

// digital product is inheritate from product
class DigitalProduct extends Product {
    constructor(productName, originalPrice, category, link) {
        super(productName, originalPrice, category);
        this.downloadLink = link;
    }
}

const myGadget = new DigitalProduct("Headphones", 150, "Electronics", "google.com");
console.log(myGadget.downloadLink)

*/

/*
Exercise 1: Building a Ride - Sharing App(e.g., Pathao / InDrive)

   When building a ride - sharing app, you have different types of drivers, but they all share common core properties like their name and vehicle number.


1. Create the Base Class: Define a class named `Driver`.
   Its`constructor` should accept `driverName` and`vehicleNumber`.Save them to `this.name` and`this.plate`.


2. Create the Child Class: Define a class named `CarDriver` that `extends Driver`.
   Its`constructor` should accept three parameters: `driverName`, `vehicleNumber`, and`carType`(e.g., `"Sedan"` or`"Hatchback"`).
   Use`super()` to pass the name and plate up to the parent.
   Save the third parameter to`this.carCategory`.


3. Test It Out:
   Create an instance named `driver1` using`new CarDriver("Ram", "BA 2 PA 1234", "Sedan")`.
   `console.log` all three properties from `driver1` to verify the ride - sharing data pairs up perfectly.
*/   

/*
   // solution
   class Driver {
    constructor(driverName, vehicleNumber) {
        this.name = driverName;
        this.plate = vehicleNumber;
    }
}

class CarDriver extends Driver {
    constructor(driverName, vehicleNumber, carType) {
        super(driverName, vehicleNumber);
        this.carCatagory = carType;
    }
}

const driver1 = new CarDriver("Laxman", "BA 2 PA 2020", "Sedan");
console.log(driver1.name);
console.log(driver1.plate);
console.log(driver1.carCatagory);
*/


/*
Exercise 2: Building a Food Delivery App System(e.g., Foodmandu)

    In a food delivery app, every item in a restaurant's digital menu has a name and a price. However, special items like a "Combo Meal" need to track an extra array of side items included in the deal.

1. Create the Base Class: Define a class named `MenuItem`.
   Its`constructor` should accept `itemName` and`itemPrice`.Save them to `this.name` and`this.price`.


2. Create the Child Class:** Define a class named `ComboMeal` that `extends MenuItem`.
   Its`constructor` should accept three parameters: `itemName`, `itemPrice`, and`includedSides`(which will be a string like`"Fries and Coke"`).
   Use`super()` to handle the item's name and price.
   Save the third parameter to`this.sides`.


3.Test It Out:
   Create an instance named `momoCombo` using`new ComboMeal("MoMo Box Deal", 450, "French Fries & Coke")`.
  `console.log` the combo item's name, price, and sides to see how the system tracks menu structures     cleanly.
*/

/*  
  class MenuItem {
    constructor(itemName, itemPrice) {
        this.name = itemName;
        this.price = itemPrice;
    }
}

class ComboMeal extends MenuItem {
    constructor(itemName, itemPrice, includedSlides){
        super(itemName, itemPrice);
        this.sides = includedSlides;
    }
}

const momoCombo = new ComboMeal("Momo Box Deal", 450, "French Fries and Coke");
console.log(momoCombo.name);
console.log(momoCombo.price);
console.log(momoCombo.sides);
*/


//Overriding Method(Polymorphism)

// ============================================================================
// METHOD OVERRIDING (Polymorphism)
// What: Writing a method in a child class with the EXACT same name as the parent class.
// Why: The child's version overrides (takes priority over) the parent's generic method.
// ============================================================================

/*
class MenuItem {
    constructor(itemName, itemPrice) {
        this.name = itemName;
        this.price = itemPrice;
    }

    // Parent method
    displayDetails() {
        console.log(`Item: ${this.name} costs Rs. ${this.price}`);
    }
}

class ComboMeal extends MenuItem {
    constructor(itemName, itemPrice, includedSides) {
        super(itemName, itemPrice);
        this.sides = includedSides;
    }

    // OVERRIDING: Same name, different behavior!
    displayDetails() {
        console.log(`Combo: ${this.name} (Rs. ${this.price}) -> Includes: ${this.sides}`);
    }
}
    
*/


