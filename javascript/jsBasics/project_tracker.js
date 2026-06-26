/*
===============================================================================
MINI-PROJECT: THE "SOCHAU" PROJECT TRACKER
===============================================================================

GOAL: 
Build a functional, real-world terminal tracking system for software 
development tasks using Object-Oriented JavaScript.

INSTRUCTIONS:
1. Create a Base Class named 'Task':
   - Constructor: Accepts 'taskName' and 'assignedTo'. 
     Save them to 'this.name' and 'this.assignee'.
   - Default Property: Inside the constructor, hardcode 'this.status = "Pending";'
     (Do not pass status as a parameter; all new tasks start as pending).
   - Method: Add a method named 'completeTask()' that updates 'this.status' 
     to "Completed".

2. Create a Child Class named 'CodingTask' that extends 'Task':
   - Constructor: Accepts 'taskName', 'assignedTo', and 'techStack'.
   - Use 'super()' to forward the taskName and assignedTo up to the parent Task.
   - Save the third parameter to 'this.tech'.

3. Test and Verify:
   - Create an instance named 'project1' using the 'new' keyword with:
     Name: "Fix Navbar Bug", Assignee: "Anit", Tech: "Tailwind CSS"
   - console.log(project1) to see the initial pending status.
   - Call project1.completeTask() to complete it.
   - console.log(project1) again to see the status update to "Completed".
===============================================================================
*/

// 1. Define your base 'Task' class here
class Task {
    constructor(taskName, assignedTo) {
        this.name = taskName;
        this.assignee = assignedTo;
        this.status = "Pending"
    }

    // method
    completeTask() {
        this.status = "Completed";
    }
}

// 2. Define your inherited 'CodingTask' class here
class CodingTask extends Task {
    constructor(taskName, assignedTo, techStack){
        super(taskName, assignedTo);
        this.tech = this.techStack;
    }
}

// 3. Test your code below (Create project1, log it, complete it, log it again)
const project1 = new CodingTask("Fixed Navbar Bug", "Anit Shrestha", "Tailwind CSS");

console.log(project1.status); // output: pending

project1.completeTask();
console.log(project1.status); // output: completed



