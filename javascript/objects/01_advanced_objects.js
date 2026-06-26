/*
// LESSON 1: ADVANCED OBJECTS IN JAVASCRIPT (ES6+)


// =======================================================
// 1. PROPERTY SHORTHAND
// =======================================================

// if a variable name matches the object key name you only need to type it once instead of 'key: variable'.

// old way
const user = "shila";
const role = "CEO";

// should repead the names
const profile = {
    user: user,
    role: role
};


//After ES6 - >define variables
const username = "anit";
const role = "developer";

// create object using shorthand
const profile = {
    username,
    role,
    status: "active"
};

console.log(profile);


// =======================================================
// 2. OBJECT DESTRUCTURING
// =======================================================

// extracting data out of objects cleanly

// old way
const profile = {
    id: 1,
    name: "Anit Shrestha",
    role: "Frontend Developer",
    company: "Google"
}

const name = profile.name;
const role = profile.role;
const company = profile.company;

console.log(`${name} works on ${company} as a ${role}`);

// modern destructuring way
const profile = {
    id: 1,
    name: "Anit Shrestha",
    role: "Frontend Developer",
    company: "Google"
}

const { name, role, company } = profile;
console.log(`${name} works on ${company} as a ${role}`);

// Destructuring Assignment with Renaming
const { id: userId } = profile;
console.log(userId);


// =======================================================
// 3. THE SPREAD OPERATOR (...)
// =======================================================

const user = { name: "anit", status: "active" }

const updatedUser = user;
updatedUser.status = "inactive"

console.log(user.status); // output: inactive

// yesari new variable banayera old value change garda original object ko value pani change hunxa which is not what we wanted

// using spread operator
const user = { name: "anit", status: "active" };

const updatedUser = {
    ...user //copies name: "anit" and status: "active" into this new object
}

updatedUser.status = "inactive"

console.log(user.status);  // output: active
console.log(updatedUser.status); //outpu: inactive
*/


// =======================================================
// 4. OPTIONAL CHAINING (?.) & NULLISH COALESCING (??)
// =======================================================


// Report 1: Fully reviewed and complete
const reportA = {
  id: "REP-404",
  title: "Pothole on Main St",
  meta: {
    coordinates: { lat: 27.71, lng: 85.32 },
    adminReview: {
      status: "Verified",
      assignedTo: "Bhim"
    }
  }
};

// Report 2: Brand new submission (unreviewed, missing data)
const reportB = {
  id: "REP-405",
  title: "Broken Streetlight",
  meta: {
    coordinates: { lat: 27.72, lng: 85.33 }
    // adminReview is completely missing because no one looked at it yet!
  }
};

// Processing Report A (Exists)
const adminA = reportA.meta.adminReview?.assignedTo ?? "Unassigned";
console.log(`Report A admin: ${adminA}`); 
// Output: Report A admin: Bhim

// Processing Report B (Missing)
const adminB = reportB.meta.adminReview?.assignedTo ?? "Unassigned";
console.log(`Report B admin: ${adminB}`); 
// Output: Report B admin: Unassigned 
// No crash! The app cleanly displays "Unassigned" to the user.










