// Task-6 



/*  Task 1 — Student Result Analyzer
Create a program that accepts a student's:
Name
Department
5 subject marks
Requirements:
Calculate total marks
Calculate average
Find pass/fail
Assign grade:
90+ → A
75–89 → B
60–74 → C
50–59 → D
Below 50 → Fail
Display the result using console.log()
Concepts: variables, arithmetic operators, if/else, functions.*/

// function stuRes (name,department,marks){
//     // calculate total marks
//     let total = 0;
//     for(let i=0; i<marks.length;i++){
//         total += marks[i];
//     }
//     // calculate average
//     let avg = total/marks.length;

//     let grade = "";
//     let status = "";

//         // Find pass/fail

//     if (avg >= 90) {
//     grade = "A";
//     status = "Pass";
//   } else if (avg >= 75) {
//     grade = "B";
//     status = "Pass";
//   } else if (avg >= 60) {
//     grade = "C";
//     status = "Pass";
//   } else if (avg >= 50) {
//     grade = "D";
//     status = "Pass";
//   } else {
//     grade = "Fail";
//     status = "Fail";
//   }

//   console.log("Name :", name);
//   console.log("Department :", department);
//   console.log("Marks :",marks.join(","));
//   console.log("Total Marks :", total + "/" + (marks.length * 100));
//   console.log("Average :", avg);
//   console.log("Grade :",grade);
//   console.log("Status :",status);

// }
// let stuName = "Harshitha";
// let stuDepartment = "Artifical Inteligence";
// let stuMarks = [60,80,90,95,95];
// stuRes(stuName,stuDepartment,stuMarks);



/*  Task 2 — Employee Salary Calculator
Create an employee object:
{
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
}
Calculate:
Basic salary
10% bonus if experience ≥ 2
15% bonus if experience ≥ 5
Final salary
Use a function:
calculateSalary(employee)
Concepts: objects, functions, conditions, arithmetic.*/

// let employee = {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// };
// function calSal(emp){
//     let basicSal = emp.salary;
//     let bonusPer = 0;

//     if (emp.experience >= 5){
//         bonusPer = 0.15;
//     } else if (emp.experience >= 2){
//         bonusPer = 0.10;
//     }
//     let bonAmount = basicSal * bonusPer;
//     let finalSalary = basicSal + bonAmount;


//     console.log(`Name : ${emp.name}`);
//     console.log(`Role : ${emp.role}`);
//     console.log(`Experience : ${emp.experience} Years`);
//     console.log(`Basic Salary : ${basicSal}`);
//     console.log(`Bonus (${bonusPer * 100}%) : ${bonAmount}`);
//     console.log(`Final Amount : ${finalSalary}`);
    
// }
// calSal(employee);


/*  Task 3 — Product Filter System
Create an array:
let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];
Perform:
Get products above ₹2,000
Get only electronics
Find the first product below ₹1,000
Calculate total price of all products
Check whether any product costs more than ₹50,000
Check whether every product has a price above ₹500
Concepts: filter(), find(), reduce(), some(), every().*/

// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];

// // Get products above ₹2,000
// let productAbove2000 = products.filter(product => product.price > 2000);
// console.log("Products Above 2000 :",productAbove2000);

// // Get only electronics
// let electronicsOnly = products.filter(product => product.category === "electronics");
// console.log("Electronics :",electronicsOnly)

// // Find the first product below ₹1,000
// let firstProduct = products.find(product => product.price < 1000);
// console.log("First Product Below 1000 :", firstProduct);

// // Calculate total price of all products
// let totalPriceOfProducts = products.reduce((accumulator, product) => accumulator + product.price, 0);
// console.log("Total Price of all Products :", totalPriceOfProducts);

// // Check whether any product costs more than ₹50,000
// let moreThan50000 = products.some(product => product.price > 50000);
// console.log("Any Product Costs more than 50000 ? : ",moreThan50000);

// // Check whether every product has a price above ₹500
// let priceAbove500 = products.every(product => product.price > 500);
// console.log("Every Product has a price above ₹500 ? : ",priceAbove500);


/*  Task 4 — Employee Management
Create an array of 6 employees.
Each employee should have:
{
    id: 101,
    name: "Kavin",
    role: "Frontend Developer",
    salary: 40000
}
Perform:
Display all employee names
Display employees earning above ₹40,000
Find employee with ID 103
Calculate total salary
Find highest-paid employee
Sort employees from highest salary to lowest
Create a new array containing only employee names
Concepts: objects, arrays, map(), filter(), find(), reduce(), sort(). */

// let employees = [
//     {id: 101,
//     name: "Kavin",
//     role: "Frontend Developer",
//     salary: 45000},
//     {
//         id: 102,
//     name: "Praney",
//     role: "Backend Developer",
//     salary: 50000
//     },
//     {id: 103,
//     name: "Sudheer",
//     role: "Java Tester",
//     salary: 60000},
//     {
//         id: 104,
//     name: "Yamini",
//     role: "Python Engineer",
//     salary: 30000
//     },
//     {id: 105,
//     name: "Shriya",
//     role: "Data Analyst",
//     salary: 70000},
//     {
//         id: 106,
//     name: "Divya",
//     role: " Data Scientist Engineer",
//     salary: 80000
//     }
// ];

// // Display all employee names 
// console.log("All Employees Names :-");
// employees.map(emp => console.log(emp.name));

// // Display employees earning above ₹40,000
// let above40000 = employees.filter(emp => emp.salary > 40000);
// console.log("Employees Earning Above 40000",above40000);

// // Find employee with ID 103
// let id103 = employees.find(emp => emp.id === 103);
// console.log("Employee with ID 103 ", id103) ;

// //Calculate total salary
// let totalSal = employees.reduce((total, emp)=> total + emp.salary, 0);
// console.log("Total Salary :",totalSal);

// // Find highest-paid employee
// let highPaid = employees.reduce((max, emp)=> emp.salary > max.salary ? emp : max);
// console.log("Highest-Paid Employee :",highPaid);

// // Sort employees from highest salary to lowest
// let highSalToLow = employees.sort((a, b) => b.salary - a.salary);
// console.log("Sorted by Salary (High to Low:", employees);

// // Create a new array containing only employee names
// let employeeNames = employees.map(emp => emp.name);
// console.log("Array of Employee Names :", employeeNames);


/*  
Task 5 — Shopping Cart
Create:
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];
Calculate:
Item total:
price × quantity
Then calculate:
Total cart value
10% discount if total > ₹50,000
Final payable amount
Create a function:
calculateCart(cart)
Concepts: objects, functions, reduce(), conditions.  */

// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];
// function calculateCart(cartItems){
//     cartItems.forEach(item => {
//         let itemTotal = item.price * item.quantity;
//         console.log(`${item.name} (${item.quantity} X Rs/- ${item.price}) = Rs${itemTotal}`);
//     });

// // Total cart value
// let totalCartValue = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,0);
// // 10% discount if total > ₹50,000
// let discountRupees = 0;
// if(totalCartValue > 50000){
//     discountRupees = 0.10;
// }
// let discountAmount = totalCartValue * discountRupees;
// // Final payable amount
// let finalPay = totalCartValue - discountAmount;
// console.log("Total Cart Value :",totalCartValue);
// console.log("Discount : Rs/-",discountAmount + (discountRupees > 0 ? "(10%)" : "(0%"));
// console.log("Final Payable Amount : Rs/-",finalPay);
// }
// calculateCart(cart);


/*  Task 6 — Student Search System
Create an array of students:
let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];
Requirements:
Display all student names
Display students who scored above 80
Find student named "Priya"
Calculate average mark
Check whether anyone failed
Check whether everyone scored above 40
Sort students by marks  */

// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];
// // Display all student names
// students.forEach(student => console.log(student.name));
// // Display students who scored above 80
// let marks80 = students.filter(student=>student.mark > 80);
// console.log("Student's Scored Above 80 :",marks80); 
// // Find student named "Priya"
// let stuFind = students.find(student=>student.name ==="Priya");
// console.log("student :",stuFind);
// // Calculate average mark
// let totalMarks = students.reduce((acc, student)=> acc + student.mark, 0);
// let avgMarks = totalMarks/students.length;
// console.log("Average Marks :",avgMarks);
// // Check whether anyone failed
// let anyFail = students.some(student => student.mark < 50);
// console.log("Failed Students List :",anyFail);
// // Check whether everyone scored above 40
// let above40 = students.every(student => student.mark > 40);
// console.log("Scored Above 40 :",above40);
// // Sort students by marks
// let sortMarks = [...students].sort((a, b) => b.mark - a.mark);
// console.log("Sorted By Marks :",sortMarks);


/*  Task 7 — Array Transformation Challenge
Given:
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
Perform:
Create a new array containing numbers × 2
Get only even numbers
Get numbers greater than 15
Find the first number greater than 20
Find total of all numbers
Check whether any number is greater than 40
Check whether every number is positive
Sort from highest to lowest
Restriction: Use array higher-order methods wherever possible.  */

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
// // Create a new array containing numbers × 2
// let double = numbers.map(number => number * 2);
// console.log("Number Double :",double);
// // Get only even numbers
// let evenNumber = numbers.filter(number => number %2 == 0);
// console.log("Even Numbers :",evenNumber);
// // Get numbers greater than 15
// let greater15 = numbers.filter(number => number > 15);
// console.log("Greaterthan 15 in Array :",greater15);
// //  Find the first number greater than 20
// let greaterthan20 = numbers.find(number => number >20);
// console.log("First Number Greater than 20 :",greaterthan20);
// // Find total of all numbers
// let allNum = numbers.reduce((acc, number) => acc + number, 0);
// console.log("Total :",allNum);
// // Check whether any number is greater than 40
// let greater40 = numbers.some(number => number > 40);
// console.log("Number's are greaterthan 40 :", greater40);
// // Check whether every number is positive
// let pos = numbers.every(number => number > 0);
// console.log("Every Number's Are Positive ?",pos);
// // Sort from highest to lowest
// let sortt = [...numbers].sort((a, b) => b-a);
// console.log("Sorted High to Low :",sortt);


/*  Task 8 — String Analyzer
Ask the user to enter a sentence.
Example:
"JavaScript is very powerful"
Display:
Total characters
Uppercase sentence
Lowercase sentence
Whether it contains "JavaScript"
First character
Last character
Number of words
Replace "JavaScript" with "Python"
Convert sentence into an array using split()
Concepts: length, includes(), slice(), toUpperCase(), toLowerCase(), replace(), split().  */

// let para = "JavaScript is very powerful";
// // Total characters
// let totalChars = para.length;
// console.log("Total Character's including Spaces:",totalChars);
// // Uppercase sentence
// let upper = para.toUpperCase();
// console.log("UpperCase :",upper);
// // Lowercase sentence
// let lower = para.toLowerCase();
// console.log("Lowercase :", lower);
// // Whether it contains "JavaScript"
// let inc = para.includes("JavaScript");
// console.log("Contains JavaScript :",inc);
// // First character
// let first = para.slice(0,1);
// console.log("First Character :",first);
// // Last character
// let last = para.slice(-1);
// console.log("Last Character :",last);
// // Number of words
// let words = para.split(" ").length;
// console.log("Number of words :",words);
// // Replace "JavaScript" with "Python"
// let repla = para.replace("JavaScript","Python");
// console.log("Replace :",repla);
// // Convert sentence into an array using split()
// let con = para.split(" ");
// console.log("Converted to Array :",con);


/*  Final Mini Project — Employee Dashboard
This would be a good intermediate-level class project.
Create an Employee Dashboard using JavaScript.
Data
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];
Students must implement
1. Employee List
Display all employees.
2. Search
Search employee by name.
3. Department Filter
Filter employees by department.
4. Salary Filter
Show employees earning more than ₹50,000.
5. Salary Calculation
Calculate total company salary.
6. Highest Salary
Find the highest-paid employee.
7. Experience
Find employees with more than 3 years' experience.
8. Sorting
Sort employees by salary:
Low → High
High → Low
9. Statistics
Display:
Total Employees: 3
Total Salary: ₹160000
Highest Salary: ₹65000
Average Salary: ₹53333  */

/*let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];
// Employee List
employees.forEach(emp => {
console.log(`ID: ${emp.id} | Name: ${emp.name} | Dept: ${emp.department} | Salary: Rs/-${emp.salary} | Exp: ${emp.experience} yrs`)
});
// Search employee by name
function searchName(name){
    return employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
}
console.log("Serach Employee :",searchName(prompt("Enter Name :")));
// Filter employees by department
function filterDepartment(dept){
    return employees.filter(emp => emp.department.toLowerCase() === dept.toLowerCase());
}
console.log("Department Filter :",filterDepartment(prompt("Enter Department Name :")));
// Show employees earning more than ₹50,000
let more50k = employees.filter(emp => emp.salary > 50000);
console.log("Above 50K Salary List :",more50k);
// Calculate total company salary
let totalcomSal = employees.reduce((total, emp)=> total + emp.salary, 0);
console.log("Total Company employees Salary :",totalcomSal);
// Find the highest-paid employee
let highSal = employees.reduce((highest, emp)=>(emp.salary>highest.salary?emp:highest));
console.log("Highest Paid Employee :",highSal);
// Find employees with more than 3 years' experience
let more3Exp = employees.filter(emp => emp.experience > 3);
console.log("Above 3 Years Experience List :",more3Exp);
// Sort employees by salary:
// Low → High
let sortAscending = [...employees].sort((a,b) => a.salary - b.salary);
console.log("Low to High salaries :",sortAscending);
// High → Low
let sortDescending = [...employees].sort((a,b) => (b.salary-a.salary));
console.log("High to Low salaries :",sortDescending);
// Statistics
let totalEmpCount = employees.length;
let avgSal = totalcomSal/totalEmpCount;
console.log("Statitics Display :");
console.log("Total Employees :", totalEmpCount);
console.log("Total Company Salary : Rs/-",totalcomSal);
console.log("Highest Salary : Rs/-",highSal.salary);
console.log("Average Salary :Rs/-",avgSal);*/
