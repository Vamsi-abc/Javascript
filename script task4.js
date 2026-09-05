/*    Task-4       */






/*  Task 1 — For Loop
Print numbers from 1 to 10 using a for loop.
Expected:
1
2
3
...
10 */

/*for(let a=1;a<11;a++){
    console.log(a);
}*/



/*  Task 2 — Reverse Number
Print numbers from 10 to 1 using a for loop. */

/*for(let a=10;a>=1;a--){
    console.log(a);
}*/


/*  Task 3 — Even Numbers
Print all even numbers from 1 to 20.  */

/*for(let a=2;a<=20;a+=2){
    console.log(a);
}*/


/*  Task 4 — Odd Numbers
Print all odd numbers from 1 to 20.  */

/*for(let a=1;a<=20;a+=2){
    console.log(a);
}*/


/*  Task 5 — Multiplication Table
Get a number from the user.
Print its multiplication table from 1 to 10.  */

/*let number = Number(prompt("Enter a Number :"));
for(let i=1;i<=10;i++){
    console.log(`${number} X ${i} = ${number * i}`);
}*/


/*  While Loop
Task 6 — Countdown
Using while, print:
10
9
8
7
6
5
4
3
2
1 */

/*let a = 10;
while(a>=1){
    console.log(a);
    a--;
}*/


/*   Sum of Numbers
Using while, calculate:
1 + 2 + 3 + ... + 10 */

/* let a = 1;
 let sum = 0;
 while(a<=10){
    sum += a;
    a++;
 }
 console.log(sum);*/


 /*  Do While
Task 8 — Print Numbers
Use do...while to print:
1
2
3
4
5  */

/*let val = 1
do{
    console.log(val);
    val++
}
while(val<=5)*/


/*  Task 9 — Do While Understanding
What is the output?
let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5); */

// output = 10; 
// A do...while loop always executes its code block once before checking the condition, which is why 10 is printed even though 10 <= 5 is false.


/*  Task 10 — String Characters
let name = "javascript";
Print every character using for...of.  */

/*let nam = "javascript";
for(let char of nam){
    console.log(char);
}*/


/*  Task 11 — Array Values
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
Use for...of to print every fruit. */

/*let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for(let result of fruits){
    console.log(result);
}*/


/*  Task 12 — Student Names
Create an array of 5 student names.
Use for...of to print:
Student: Arun
Student: Priya.... */

/* let students =["Arun","Priya","Ramesh","Suresh","Venkatash"];
for(let nam of students){
    console.log("Student :",nam);
}  */


/*  Task 13 — Employee Object
Create:
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
Use for...in to print:
name Arun
age 25
role Developer
city Chennai  */

/*let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
for(let res in employee){
    console.log(`${res} ${employee[res]}`);
}*/


/*  Task 14 — Product Object
Create:
productName
price
brand
category
stock
Use for...in to print every key and value.  */

/*let product = {
    productName : "Laptop",
price : 90000,
brand : "HP",
category : "Gaming",
stock : 12
};
for(let key in product){
    console.log(`${key} : ${product[key]}`);
}*/


/*  Task 15 — Simple Function
Create a function called welcome().
It should print:
Welcome to JavaScript
Call the function 3 times.  */

/*function welcome(){
    console.log("Welcome to JavaScript")
}
welcome();
welcome();
welcome();*/


/*  Task 16 — Function With Parameter
Create:
function greet(name) {
    // code
}
Call:
greet("Naveen");
greet("Arun");
greet("Priya");
Expected:
Hello Naveen
Hello Arun
Hello Priya  */

/*function greet (name){
    console.log(`Hello ${name}`)
}
greet ("Naveen");
greet ("Arun");
greet ("Priya");*/


/*  Task 17 — Multiple Parameters
Create a function:
student(name, age, department)
Print all three values.
Call it with 3 different students.  */

/*function student (name, age, department){
    console.log(`Name : ${name}, Age : ${age}, Department : ${department}`)
};
student("Arun", 20, "EEE");
student("Priya", 21, "ECE");
student("Ramu", 19, "IT");*/


/*  Task 18 — Addition Function
Create:
function add(a, b) {
    // return result
}
Call:
let result = add(10, 20);
console.log(result);
Expected:
30  */

/*function add (a, b){
    return a + b;
}
let result = add(10, 20);
console.log(result);*/


/*Task 19 — Salary
Create:
function salary(amount) {
    return amount;
}
Store the returned value in a variable and print it.*/

/*function salary(amount) {
    return amount;
}
let mySalary = salary(60000);
console.log(mySalary);*/


/*  Task 20 — Bonus Calculator
Create:
function bonus(salary, bonusAmount)
Return:
salary + bonusAmount
Example:
Salary = 50000
Bonus = 5000

Total = 55000  */

/*function bonus(salary, bonusAmount){
    return salary + bonusAmount;
}
let totalSalary = bonus(55000, 5000);
console.log(totalSalary);*/

/*   Default Parameter
Task 21
Create:
function employee(name, role = "Developer") {
    // print name and role
}
Call:
employee  ("Arun");
employee("Priya", "Designer");
Find the output.  */

/*function employee(name, role = "Developer") {
    console.log(`Name : ${name}, Role : ${role}`)
}

employee  ("Arun");
employee("Priya", "Designer");*/


/*Task 22 — Named Function
Create a named function:
function square(number) {
    return number * number;
}
Call it with 5 different numbers. */

/*function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(4));
console.log(square(6));
console.log(square(8));
console.log(square(12));*/


/*Task 23 — Anonymous Function
Create an anonymous function and store it in a variable.
let calculate = function(a, b) {
    return a + b;
};
Call it and print the result.*/
/*let calculate = function(a, b) {
    return a + b;
};
let result = calculate(10,10);
console.log(result);*/


/* Task 24 — Arrow Function
Create an arrow function that accepts two numbers and returns their multiplication.
let multiply = (a, b) => {
    return a * b;
};*/
/*let multiply = (a, b) => {
    return a * b;
};
let result = multiply(10,10);
console.log(result);*/


/*  Task 25 — Predict the Output  */
/*function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);  // 10
        console.log(b);  // 20
        console.log(c);  // 30
    }

    console.log(a);  // 10
    console.log(b);  // Reference error because let is block-scoped. It lives strictly inside { ... } of the if statement and is destroyed once the block finishes.
    console.log(c);  // Reference error and never runs, because the program crashed on b. and {if b variable runs also 'c' won't because const is also block-scoped and would throw the exact same ReferenceError  }
                    // Note :- let, const is also block-scoped and would throw the exact same ReferenceError.
}

test();*/


/*Hoisting 
Task 26 — Predict*/
/*console.log(a);

var a = 10;

//  output :- undefined

  Because var a is hoisted and assigned undefined
   in memory before the code runs, but the value 
   10 is assigned only on the next line. */


/*  Task 27
Predict:
console.log(b);

let b = 20;
//  output :- ReferenceError: Cannot access 'b' before initialization
*/


/* Task 28
Predict:
console.log(c);

const c = 30;
// output :- ReferenceError: Cannot access 'c' before initialization.
Then explain the difference between the three.*/

// var is hoisted and initialized with undefined, so accessing it early returns undefined.

// let is hoisted but uninitialized in the Temporal Dead Zone (TDZ), throwing a ReferenceError if accessed early.

// const behaves like let in the TDZ throwing a ReferenceError, with the added restriction that it can never be reassigned.


/*  Task 29 — Self Invoking Function
Create an IIFE that immediately prints:
Welcome to JavaScript
Then create another IIFE that accepts:
product
discount
and prints the discount message.  */

//  IIFE without parameters
/*(function() {
  console.log("Welcome to JavaScript");
})();

// IIFE with parameters
(function(product, discount) {
  console.log(`Special Offer: ${product} is now ${discount}% off!`);
})("Iphone", 20);*/


/*  Callback / Higher-Order Function
Task 30
Create:
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);  


// Higher-Order Function: execute

// It takes another function as an argument (callback). 
// Any function that receives a function as a parameter 
// or returns a function is a Higher-Order Function.

// Callback Function: welcome
// It is passed as an argument into execute 
// to be called (executed) inside it later. */


/* Generator Function
Task 31 — Cashback
Create a generator:
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
Create the generator object and print all values using for...of. */

/*function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let reward = cashback();

for(let rewards of reward){
console.log(rewards); 
}  */


/*  FINAL MINI PROJECT
Task 32 — Employee Management Console
Create a simple Employee Management System using only the concepts you've learned.
Employee data
Create an array containing employee objects:
Name
Age
Department
Role
Salary

 */
//Employee Data
/*let employees = [
  {
    name: "Arun",
    age: 25,
    department: "IT",
    role: "Developer",
    salary: 40000
  },
  {
    name: "Priya",
    age: 24,
    department: "HR",
    role: "HR Executive",
    salary: 35000
  }
];

// 1. for...of: Print every employee
console.log("--- 1. for...of: Print every employee ---");
for (let emp of employees) {
  console.log(emp);
}

// 2. for...in: Print each employee's keys and values
console.log("\n--- 2. for...in: Keys and Values ---");
for (let emp of employees) {
  for (let key in emp) {
    console.log(`${key}: ${emp[key]}`);
  }
}

// 3. Function & 4. Function parameters: Display employee information
console.log("\n--- 3 & 4. Function with Parameters ---");
function displayEmployee(emp) {
  console.log(`Name: ${emp.name}, Role: ${emp.role}, Department: ${emp.department}`);
}
displayEmployee(employees[0]);
displayEmployee(employees[1]);

// 5. Return: Return employee's salary
console.log("\n--- 5. Return Employee Salary ---");
function getSalary(emp) {
  return emp.salary;
}
let arunSalary = getSalary(employees[0]);
console.log(`Returned salary: ${arunSalary}`);

// 6. Condition: Check Salary >= 40000
console.log("\n--- 6. Condition Check (Salary >= 40000) ---");
for (let emp of employees) {
  if (emp.salary >= 40000) {
    console.log(`${emp.name} earns >= 40000 (Salary: ${emp.salary})`);
  } else {
    console.log(`${emp.name} earns < 40000 (Salary: ${emp.salary})`);
  }
}

// 7. Arrow function: Simple calculation (Calculate 10% bonus)
console.log("\n--- 7. Arrow Function Calculation ---");
let calculateBonus = (salary) => salary * 0.10;
console.log(`Arun's Bonus: ${calculateBonus(employees[0].salary)}`);
console.log(`Priya's Bonus: ${calculateBonus(employees[1].salary)}`);

// 8. Generator: Produce employee benefits
console.log("\n--- 8. Generator (Employee Benefits) ---");
function* employeeBenefits() {
  yield "Medical Insurance";
  yield "Transport";
  yield "Food Allowance";
  yield "Bonus";
}

let benefits = employeeBenefits();
for (let perk of benefits) {
  console.log(`Benefit: ${perk}`);
}  */
