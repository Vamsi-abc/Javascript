/*Task 1 — Variables
Create variables using var, let, and const.
Name
Age
City
College
Requirements:
Print all values.
Change the var value.
Change the let value.
Try changing the const value.
Try redeclaring each variable and observe what happens.*/

/*var Name = "Vamitha";
let Age = 20;
const City = "Vizag";
const College = "I.I.T Bombay";
// Print all values :-
console.log("Name :",Name);
console.log("Age :",Age);
console.log("City :",City);
console.log("College :",College);
// Change the var value. :-
Name = "Vamha";
console.log("updated_Name :",Name);

// Change the let value. :-
Age = 21;
console.log("updated_Age :",Age);
// Try changing the const value. :-
//City = "Hyd";
//console.log("updated_City :",City); // Getting error because we can't change the const value.
// Try redeclaring each variable and observe what happens :-
var Name = "Harvam";
console.log("secondUpdated_Name :",Name);
//let Age = "23";    // Is shows error.
//console.log("secondUpdated_Age :",Age);
//const College = "I.I.T Delhi";
//console.log("secondUpdated_College :",College);*/  // Is shows error because it allows one time assignement.


/* Task 2 — Printing Statements
Use:
console.log()
alert()
confirm()
prompt()
document.writeln()
Create one example for each.*/

// 1. console.log()
/*console.log("Hello! This is Vamsi");

// 2. alert()
alert("Hello! User");

// 3. confirm()
let isEligible = confirm("Are You 18+ to Vote?");
console.log("Voting eligibility:", isEligible);

// 4. prompt()
let userCity = prompt("Please Enter Your City:");
console.log("User City:", userCity);

// 5. document.writeln()
document.writeln("This is document.writeln() output.");*/


/*  Task 3 — User Details
Get from the user:
Name
Age
City
Qualification
Print the details in the console. */

/*let userName = prompt("Enter your Name:");
let userAge = prompt("Enter your Age:");
let userCity = prompt("Enter your City:");
let userQualification = prompt("Enter your Qualification:");
console.log("--- User Details ---");
console.log("Name :", userName);
console.log("Age :", userAge);
console.log("City :", userCity);
console.log("Qualification :", userQualification);*/


/*  Data Type Tasks
Task 4 — Find Data Types
Create variables containing:
"JavaScript"
100
99.5
true
false
undefined
null
Print their values and use typeof to identify their data types.  */

/*let language = "JavaScript";
let wholeNumber = 100;
let decimalNumber = 99.5;
let isTrue = true;
let isFalse = false;
let notAssigned = undefined;
let emptyValue = null;
console.log("Value:", language, "| Type:", typeof language);
console.log("Value:", wholeNumber, "| Type:", typeof wholeNumber);
console.log("Value:", decimalNumber, "| Type:", typeof decimalNumber);
console.log("Value:", isTrue, "| Type:", typeof isTrue);
console.log("Value:", isFalse, "| Type:", typeof isFalse);
console.log("Value:", notAssigned, "| Type:", typeof notAssigned);
console.log("Value:", emptyValue, "| Type:", typeof emptyValue);*/


/*  Task 5 — Student Array
Create an array containing:
Student names
Example:
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
Print:
First student
Second student
Last student
Total students
Use only:
array[index]
array.length */

/*let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
console.log("First Student Name :",students[0]);
console.log("Second Student Name :",students[1]);
console.log("Last Student Name :",students[students.length-1]);
console.log("Total Students Count :",students.length);*/


/*  Task 6 — Employee Object
Create an employee object containing:
name
age
role
skills
isWorking
qualification
skills and qualification should be arrays.
Print:
Employee name
Age
Role
First skill
Last qualification
Working status
This follows the same array-inside-object structure from your notes.  */
 
/*let employee = {
  name: "Vamsi",
  age: 24,
  role: "Front End Developer",
  skills: ["JavaScript", "HTML", "CSS", "React"],
  isWorking: true,
  qualification: ["10th", "Intermediate", "B.Tech"]
};

console.log("Employee name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First skill:", employee.skills[0]);
console.log("Last qualification:", employee.qualification[employee.qualification.length -1]);
console.log("Working status:", employee.isWorking);*/


/*Arithmetic Operator Tasks
Task 7 — Calculator
Create:
let a = 20;
let b = 5;
Calculate:
Addition
Subtraction
Multiplication
Division
Modulus
Exponentiation*/

/*let a = 20;
let b = 5;
console.log("Addition :", a + b);
console.log("Subtraction :", a - b);
console.log("Multiplication :", a * b);
console.log("Division :", a / b);
console.log("Modulus :", a % b);
console.log("Exponentiation :", a ** b);*/


/*  Task 8 — Shopping Bill
Create:
Shirt = 999
Pant = 1499
Shoes = 1999
Bag = 799
Calculate:
Total price
Use arithmetic operators only. */

/*let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;
let totalPrice = shirt + pant + shoes + bag;
console.log("Shirt Price :",shirt);
console.log("Pant Price :",pant);
console.log("Shoes Price :",shoes);
console.log("Bag Price :",bag);
console.log("Total Price :",totalPrice);*/


/*Task 9 — Increment & Decrement
Find the output without running the code first.
A 
let a = 10;

let b = a++;

console.log(a);
console.log(b); 
// output :-
//   a : 11
//   b : 10 

// B 
let a = 10;

let b = ++a;

console.log(a);
console.log(b);
// output :-
//   a : 11
//   b : 11


// C 
let a = 10;

let b = a--;

console.log(a);
console.log(b);
// output :-
//   a : 9
//   b : 10


// D 
let a = 10;

let b = --a;

console.log(a);
console.log(b);
// output :-
//   a : 9
//   b : 9 */


/*  Assignment Operator Tasks
Task 10
Start with:
let num = 10;
Perform separately:
num += 5
num -= 3
num *= 2
num /= 4
num %= 3
num **= 2
Print the result after each operation. */

/*let num = 10;
console.log("Starting value :", num);
num += 5;
console.log("num += 5 :",num);
num -= 3;
console.log("num -= 3 :",num);
num *= 2;
console.log("num *= 2 :",num);
num /= 4;
console.log("num /= 4 :",num);
num %= 3;
console.log("num %= 3 :",num);
num **= 2;
console.log("num **= 2 :",num);*/


/* Comparison Operator Tasks
Your notes cover <, >, <=, >=, ==, !=, ===, and !==.
Task 11 — Find Output
Predict the result:*/
/*console.log(10 > 5);
//true
console.log(10 < 5);
// false
console.log(10 >= 10);
// true
console.log(10 <= 9);
// false

console.log(5 == "5");
// true
console.log(5 === "5");
// false
console.log(10 != "10");
// false
console.log(10 !== "10");
// true */


/*Logical Operator Tasks
Task 12 — AND
Find the output: */
/*console.log(true && true);
// true
console.log(true && false);
// false
console.log(false && true);
// false
console.log(false && false);
// false*/


/* Task 13 — OR */
/*console.log(true || true);
//   true
console.log(true || false);
//   true
console.log(false || true);
//   true
console.log(false || false);
//   false*/


/*  Task 14 — NOT  */
/*console.log(!true);
//  o/p :- false
console.log(!false);
//  o/p :- true
console.log(!(5 > 10));
//  o/p :- true
console.log(!(10 > 5));
//  p/p :- false  */


/*  Task 15 — Combination */
// Find the output without executing:
/*console.log(5 == "5" && !(5 === 5) || 6 > 7);
//             true && false || false
//                 false  || false
//                   o/p :- false

console.log(10 > 5 && 8 < 12 || 4 === "4");
//             true && true || false
//                  true || false
//                   o/p :- true

console.log(7 === 7 && 10 != "10" || 5 >= 5);
//             true && false || true
//                  false || true
//                   o/p :- true

console.log(15 < 10 || 20 > 15 && 5 == "5");
//              false || true && true
//                    true && true
//                     o/p :- true*/
//These follow the same comparison + logical style in your code.


/*  Ternary Operator Tasks
Task 16 — Voting
Create:
let age = 20;
Use the ternary operator:
age >= 18 → "Eligible to vote"
age < 18  → "Not eligible" */

/*let age = 20;
let votingCriteria = age >= 18 ? "Eligible to Vote" : "Not Eligible to Vote";
console.log(votingCriteria);*/


/*Task 17 — Password
Create:
let password = true;
Use ternary:
true  → "Login successful"
false → "Wrong password"*/

/*let password = true;
console.log(password ? "Login Successful" :"Wrong password");*/


/*  Concatenation & Template String
Task 18 — User Introduction
Create:
let name = "Naveen";
let age = 25;
let city = "Trichy";
Print:
My name is Naveen. I am 25 years old. I live in Trichy.
Do it two ways:
Using +
Using template literals `${}`
Your notes cover both approaches.  */


/*let name = "Naveen";
let age = 25;
let city = "Trichy";
// using +
console.log("My name is " + name + ". I am " + age + " years old." + " I live in " + city + ".");
// using template literals `${}`
console.log(`My name is ${name }. I am ${age} years old. I live in ${city}.`)*/


/* Type Casting Tasks
Task 19 — String Conversion
Use String() to convert:
100
true
undefined
null
[1, 2]
Print the result and its typeof.*/
/*let numStr = String(100);
let boolStr = String(true);
let undefStr = String(undefined);
let nullStr = String(null);
let arrStr = String([1, 2]);
console.log(numStr, ":", typeof (numStr))
console.log(boolStr, ":", typeof (boolStr))
console.log(undefStr, ":", typeof (undefStr))
console.log(nullStr, ":", typeof (nullStr))
console.log(arrStr, ":", typeof (arrStr))8/


/*  Task 20 — Number Conversion
Predict the output:*/
/*console.log(Number());
//  o/p :- 0
console.log(Number(""));
//  o/p :- 0
console.log(Number("123"));
//   o/p :- 123
console.log(Number("a1"));
//   o/p :- NaN
console.log(Number(true)); 
//   o/p :- 1
console.log(Number(false));
//   o/p :- 0
console.log(Number(undefined));
//   o/p :-NaN
console.log(Number(null));  */
//   o/p :- 0  


/*  Task 21 — Boolean Conversion
Predict:*/
/*console.log(Boolean());
//   o/p :- false
console.log(Boolean(""));
//   o/p :- false
console.log(Boolean("hello"));
//   o/p :- true
console.log(Boolean(123));
//   o/p :- true
console.log(Boolean(true));
//   o/p :- true
console.log(Boolean(false));
//   o/p :- false
console.log(Boolean(undefined));
//   o/p :- false
console.log(Boolean(null));
//   o/p :- false
console.log(Boolean([]));
//   o/p :- true
console.log(Boolean({}));
//   o/p :- true*/


/*Flow Control Tasks
Task 22 — Voting Eligibility
Get age using prompt().
18 or above → "You can vote"
Below 18   → "You can't vote"
Use:
if
else*/

/*let age = Number(prompt("Enter Your Age "));
if(age >= 18){
    console.log("You Can Vote");
}else{
    console.log("You Can't Vote");
}*/


/*  Task 23 — Positive or Negative
Get a number from the user.
Check:
Positive
Negative
Zero
Use if / else if / else.*/

/*let num = Number(prompt("Enter a number:"));
if (num > 0){
    console.log("Positive")
}else if(num <0){
    console.log("Negative");
}else{
    console.log("Zero");
}*/


/*  Task 24 — Grade System
Get marks from the user.
Create:
90–100 → A Grade
80–89  → B Grade
70–79  → C Grade
60–69  → D Grade
Below 60 → Fail
Use if / else if / else.*/
/*let marks = Number(prompt("Enter the marks:"));

if (marks > 100 || marks < 0) {
    console.log("Invalid Marks");
} else if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else {
    console.log("Fail");
}*/


/*  Nested If Task
Task 25 — Job Eligibility
Get:
Age
Height
Weight
Rules:
Age >= 18
Height >= 160
Weight >= 60
If all conditions are satisfied:
"Congratulations! You are selected"
Otherwise display the appropriate reason.
This is based directly on the nested-if structure in your code. */

/*let age = Number(prompt("Enter your Age :"));
let height = Number(prompt("Enter your Height (in cm) :"));
let weight = Number(prompt("Enter your Weight (in kg) :"));
if(age >= 18){
    if(height >= 160){
        if(weight >= 60){
            console.log("Congratulations!You are Selected");
        }else{
            console.log("Rejected : Weight must be at least 60 kg");
        }
    }else{
        console.log("Rejected : Height must be at least 160 cm");
    }
}else{
    console.log("Rejected : Age must be 18 or above");
}*/


/*  Switch Tasks
Task 26 — Traffic Light
Get a traffic light color:
red
yellow
green
Use switch.
red    → Stop
yellow → Ready
green  → Go */

/*let color = prompt("Enter traffic color");
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
    break;
default:
    console.log("Invalid Color");
}*/


/*  Task 27 — Day
Create:
let day = 1;
Use switch:
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
7 → Sunday
Add:
default → Invalid day  */

/*let day = Number(prompt("Enter day between 1-7 :"));
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
            break;
    default:
        console.log("Invalid Day");
        
}*/


/*  Task 28 — Student Result System
Create a small Student Result System using everything you've learned.
Step 1 — Get user details
Name
Age
City
Step 2 — Get marks
Tamil
English
Maths
Step 3 — Calculate
Total
Average
Step 4 — Check result
Use if / else if / else:
90+ → A
80+ → B
70+ → C
60+ → D
Below 60 → Fail
Step 5 — Check voting
Age >= 18
Step 6 — Display
Use a template string:
Name: Naveen
Age: 22
City: Trichy
Total: 250
Average: 83.33
Grade: B
Voting: Eligible  */
/*
let stuName = prompt("Enter Name");
let stuAge = Number(prompt("Enter Age"));
let stuCity = prompt("Enter City");

let tamil = Number(prompt("Enter Tamil subject Marks"));
let english = Number(prompt("Enter English subject Marks"));
let maths = Number(prompt("Enter Maths subject Marks"));

let total = tamil + english + maths;
let avg = total/3;

let grade;
if(avg >= 90){
    grade = "A";
}else if(avg >= 80){
    grade = "B";
}else if(avg >= 70){
    grade = "C";
}else if(avg >= 60){
    grade = "D";
}else{
    grade = "Fail";
}

let voting = stuAge >= 18 ? "Eligible" : "Not Eligible";

console.log(`Name : ${stuName}
Age : ${stuAge}
City : ${stuCity}
Total : ${total}
Average : ${avg.toFixed(2)}
Grade : ${grade}
Voting : ${voting}`);*/