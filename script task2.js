//Task 1 — var, let, const:- 
/*var StudentName = "Devapuja YugaRaja Vamsi";
let StudentAge =  "24";
const CollegeName = "Raghu Engineering College";

// Print all three values.
console.log("Initial values:");
console.log("Student Name:", StudentName);
console.log("Student Age:", StudentAge);
console.log("College Name:", CollegeName);

// Change the var value:- 
StudentName = "Harshitha";
console.log("Student Name:", StudentName);

// Change the let value:-
StudentAge = "21";
console.log("Student Age:",StudentAge);

// Try changing the const value and observe the error:-
 CollegeName = "Vignan Institute of Technology";
 console.log("College Name", CollegeName);

// // Try redeclaring the var variable:-
var StudentName = "Jahanivi kapoor";
console.log("Student Name:",StudentName);

// Try redeclaring the let variable and observe the error:-
let StudentAge = "27";
console.log("Student Age:",StudentAge);*/



// Task 2 — User Information
/*Get the following information from the user using prompt():
Name
Age
City
Print the result in the console.
Expected:
Name: Naveen
Age: 22
City: Trichy*/

/*let Name = prompt("Enter Name");
let Age = prompt("Enter Age");
let City = prompt("Enter City");
 console.log("Name:",Name);
 console.log("Age:",Age);
 console.log("City:",City);*/



 // Task 3 — Welcome Message
/*Get the user's name using prompt().
Display:
Welcome Naveen!
Use alert().*/
/*let userName = prompt("Enter in the User Name:");
alert("Welcome " + userName + " !!!");*/


// Task 4 — Age Calculator
/*Ask the user for their birth year.
Calculate their approximate age using:
Current Year - Birth Year
Print the age in the console.
Example:
Birth Year: 2000
Age: 26*/
/*let birthYear = prompt("Enter Birth Year");
let currentYear = 2026;
let Age = currentYear - Number(birthYear);
console.log("Birth Year:",birthYear);
console.log("Age:",Age);*/



//Task 5 — Identify Data Types
/*Create variables containing:
"Hello"
100
25.5
true
false
undefined
null
Use typeof and print each data type.*/

/*let str = "Hello";
let numb = 100;
let floatNumb = 25.5;
let booleanTrue = true;
let booleanFalse = false;
let undefin = undefined;
let nullVal = null;

console.log(str,typeof(str));
console.log(numb,typeof(numb));
console.log(floatNumb,typeof(floatNumb));
console.log(booleanTrue,typeof(booleanTrue));
console.log(booleanFalse,typeof(booleanFalse));
console.log(undefin,typeof(undefin));
console.log(nullVal,typeof(nullVal));*/


// Task 6 — Student Data
/*Create an object:
name
age
city
qualification
isStudent
Print:
Complete object
Name
Age
Qualification
isStudent*/

/*let obj = {
    stuName : "Devapuja YugaRaja Vamsi",
    stuAge : 24,
    stuCity : "Vizag",
    stuQualification : "B.Tech in CyberSecurity",
    stuIsStudent : true

}
console.log("Complete Object:",obj);
console.log("Name:",obj.stuName);
console.log("Age:",obj.stuAge);
console.log("City:",obj.stuCity);
console.log("Qualification:",obj.stuQualification);
console.log("isStudent:",obj.stuIsStudent);*/


// Task 7 — Fruit Array
/*Create an array containing 6 fruits.
Apple
Mango
Orange
Banana
Grapes
Papaya
Print:
First fruit
Second fruit
Last fruit
Total number of fruits
Hint:
array.length
array.length - 1*/

/*let arr = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];
console.log("First Fruit:",arr[0]);
console.log("Second Fruit:",arr[1]);
console.log("Last Fruit:",arr[arr.length-1]);
console.log("Total number of fruits:",arr.length);*/


// Task 8 — Basic Calculator
/*Create two numbers:
let a = 20;
let b = 5;
Perform:
Addition
Subtraction
Multiplication
Division
Modulus
Exponentiation
Print every result separately.*/

/*let a = 20;
let b = 5;
// Addition :-
console.log("Additon :", a + b);
// Subtraction :-
console.log("Subtraction :",a - b);
// Multiplication
console.log("Multiplication :",a * b);
// Division :-
console.log("Division :",a / b);
// Modulus :-
console.log("Modulus :",a % b);
// Exponentiation :-
console.log("Exponentiation :",a ** b);*/


// Task 9 — Shopping Bill
/*Create:
Shirt = 999
Pant = 1499
Shoes = 1999
Calculate the total price.
Expected:
Total = 4497*/

/*let shirt = 999;
let pant = 1499;
let shoes = 1999;
let total = shirt + pant + shoes;
console.log("Total Amout :",total);*/


// Task 10 — Simple Marks Calculation
/*Create marks for 3 subjects:
Tamil = 80
English = 75
Maths = 90
Calculate:
Total marks
Average marks*/

/*let Tamil = 80,
    English = 75,
    Maths = 90;
let Total = Tamil + English + Maths;
let avg = Total / 3;

console.log("Total Marks :",Total);
console.log("Average Marks :",avg);*/


/*Increment & Decrement Tasks
Task 11 — Post Increment
Predict the output before running the code:
let a = 10;

let b = a++;

console.log(a);
console.log(b);
Write your expected output first, then run it.*/
// Output :-
//  11
//  10


/* 
Task 12 — Pre Increment
Predict the output:
let a = 10;

let b = ++a;

console.log(a);
console.log(b);
*/
// Output:-
// 11
// 11


/*
Task 13 — Post Decrement
Predict:
let a = 20;

let b = a--;

console.log(a);
console.log(b);*/
// Output:-
// 19
// 20


/*
Task 14 — Pre Decrement
Predict:
let a = 20;

let b = --a;

console.log(a);
console.log(b); */
// Output:-
// 19
// 19


/*
Task 15 — Find the Final Values
Without running the code, find the output:
let a = 5;

let b = a++;

let c = ++a;

let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
Students should write the answer first and then verify it.*/
// Output:-
// 7
// 4
// 7
// 5


/*
Task 16 — Assignment Operators
Given:
let num = 10;
Perform each operation separately:
+=
-=
*=
/=
%=
**=
Example:
num += 5;
console.log(num);*/
/*let num1 = 10;
num1 += 5;
console.log("+= :-",num1);
let num2 = 10;
num2 -= 5;
console.log("-= :-",num2);
let num3 = 10;
num3 *= 5;
console.log("*= :-",num3);
let num4 = 10;
num4 /= 5;
console.log("/= :-",num4);
let num5 = 10;
num5 %= 5;
console.log("%= :-",num5);
let num6 = 10;
num6 **= 5;
console.log("**= :-",num6);*/


/*
 Task 17 — Mini Student Profile
Create a student profile using:
Variables
Name
Age
City
College
Array
Store 5 favorite subjects.
Object
Create an employee/student object containing:
name
age
city
subjects
isStudent
Then print:
Student name
Student age
City
First subject
Last subject
Total subjects
Complete object */

//1. variables :-
/*let name = "Vamsi"
let age = 22;
let city = "Vizag";
let college = "Raghu Engg College";
//2.Array :- 5 fav subjects:-
let subjects = ["English","Maths","Science","Social","Hindi"];
// 3. Object - Student Profile:-
let student = {
    name : name,
    age : age,
    city : city,
    college : college,
    subjects : subjects,
    isStudent : true
};
console.log("Student Name :",student.name);
console.log("Student Age :",student.age);
console.log("City :",student.city);
console.log("First Subject :",subjects[0]);
console.log("Last Subject :",subjects[subjects.length-1]);
console.log("Total Subjects :",subjects.length);
console.log("Complete Object :",student);*/


/*
Final Challenge — User + Calculator
Get two numbers from the user using prompt().
Perform:
Addition
Subtraction
Multiplication
Division
Modulus
Power
Then display all results using console.log().
Restriction: Use only the concepts you have taught so far:
var, let, const, prompt(), console.log(), data types, arrays, objects, arithmetic operators, increment/decrement, and assignment operators.*/
/*let a = Number(prompt("Enter a's Value :"));
let b = Number(prompt("Enter b's Value :"));
let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;
let pow = a ** b;

let results = {
    firstnum : a,
    secondnum : b,
    add : add,
    sub : sub,
    mul : mul,
    div : div,
    mod : mod,
    pow : pow
};

console.log("Calculate Results :-");
console.log("Enter a's Value :", a);
console.log("Enter b's Value :", b);
console.log("Addition :",results.add);
console.log("Subtraction :",results.sub);
console.log("Multiplication :",results.mul);
console.log("Division :",results.div);
console.log("Modulus :",results.mod);
console.log("Power :",results.pow);*/
