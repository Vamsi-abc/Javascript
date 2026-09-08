//Task-5//



//Q1: What is the difference between var, let, and const?
 
// Ans :- 
// var: An old way to declare a variable that can be re-declared and changed anywhere inside the function where it was created.

// let: A modern way to declare a variable that can be changed, but not re-declared, and only works inside the specific {} block where you write it.

// const: A modern way to declare a variable whose value is locked and cannot be reassigned once set, and only works inside its {} block.


//Q2: Can you re-declare a variable with var? What about let and const?

//Ans :-
// var: Yes. You can re-declare the same variable as many times as you want within the same scope without an error.

// let: No. Re-declaring a let variable in the same scope throws a SyntaxError: Identifier has already been declared. (You can only declare it with the same name if it is inside a different block {}.)

// const: No. Like let, re-declaring a const variable in the same scope causes a SyntaxError.

// Example of each variables :-

// var allows re-declaration
// var x = 1;
// var x = 2;  // Allowed
// console.log(x);

// let prohibits re-declaration
// let y = 1;
// let y = 2;  // SyntaxError: Identifier 'y' has already been declared
// console.log(y);

// const prohibits re-declaration
// const z = 1;
// const z = 2; // SyntaxError: Identifier 'z' has already been declared
// console.log(z);


// Q3: What is the output of this code?

// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;  // will change the value.
// y = 25;  // will change the value.
// z = 30;  // won't change the value.

// console.log(x, y, z);
// output :- Uncaught TypeError: Assignment to constant variable.


//Q4: What is the difference between declaring and initializing a variable?
//Ans :-
// Declaration :-	Reserves the identifier in scope so the program knows it exists.	Ex :- let a; {'a' is declaration}
// Initialization :- Assigns the very first value to the declared variable. Ex :- let a = 10; {'10' is Initialization}


//Q5: What will be the output?

// let a;
// console.log(a);
// output :- undefined


//Q6: What is hoisting? Give an example.
//Ans:-
//Hoisting is JavaScript's default behavior of allocating memory 
// for variable and function declarations during the
//  compilation/creation phase, before any code is actually executed. 
// Conceptually, it makes declarations appear as if they were moved
//  to the top of their enclosing scope.
// Example for hoisting :-
// console.log(a);  // output:- undefined
// var a = "hi";
// console.log(a);  // output:- hi


//Q7: What is the difference between null and undefined?
//Ans:- 
// undefined: A variable has been created, but no value was ever 
// given to it (the computer sets this automatically).

// null: A variable is intentionally set to be empty 
// (the programmer sets this on purpose to mean "nothing").

//ex :-
// let hi;
// let bye = null;
// console.log(hi);  // output :- undefined
// console.log(bye);  // output :- null


//Q8: What will be the output?
// console.log(typeof null);  // output :- object
// console.log(typeof undefined);  // output :-  undefined
// console.log(typeof []);  // output :-  object
// console.log(typeof {});  // output :-  object


// Q9: What is the difference between == and ===?
// == (Loose Equality): Checks only the value and converts the data types behind
//  the scenes to force a match (5 == "5" is true).

// === (Strict Equality): Checks both the value and the data type without
//  converting anything (5 === "5" is false).


//Q10: What is the difference between ++i and i++?
// ++i (Pre-increment): Increases the value first, then uses it.
// let a = 1;
// console.log(++a); // prints 2 (adds 1 first, then prints)
// // i++ (Post-increment): Uses the current value first, then increases it.
// let b = 1;
// console.log(b++); // prints 1 (prints current value first, then b becomes 2)
// console.log(b);   // prints 2 (b is now 2)


//Q11: What will be the output?
// let x = 10;
// let y = "5";
// console.log(x + y);  // output :-  105
// console.log(x - y);  // output :- 5
// console.log(x * y);  // output :- 50
// console.log(x / y); // output :- 2


//Q12: What are logical operators? Explain with examples.
// Ans:-
// Logical operators are used to determine logic 
// between values or expressions, returning either
//  a boolean (true/false) or the value of one of the operands.
//  && :-Logical AND	Returns true only if both sides are true. Stops at the first falsy value.
// || :- Logical OR	    Returns true if at least one side is true. Stops at the first truthy value.
// ! :- Logical NOT	    Inverts the boolean value (true becomes false, false becomes true).
//Examples :-
// '&&' AND
// let willPlay = true;
// let wilWin = true;
// console.log(willPlay && wilWin);
// output :- true;

//  '||' OR
// let willPlay = true;
// let stopPlay = false;
// console.log(willPlay || stopPlay);
//  output :- true;

//  '!' NOT
// let isGoing = true;
// console.log(!isGoing);
// output :- false;


//Q13: What will be the output?
// console.log(5 > 3 && 10 > 5);
 // output :- true
// console.log(5 > 10 || 10 > 5);
 // output :-  true
// console.log(!(5 > 3));
// output :- false


//Q14: What is the ternary operator? Give an example.
//Ans:- The ternary operator (also called the conditional operator) is a concise, one-line shorthand for an if...else statement.
//  It takes three operands: a condition, a value if truth, and a value if false.


// let password = true;
// password ? console.log("Password is Correct") : console.log("Password in InCorrect");


// Q15: What is the difference between implicit and explicit type casting?
//Ans:- 
// Implicit (Automatic): JavaScript changes the type on its own behind your back.

// Explicit (Manual): You write the code to change the type on purpose.

// Implicit (JS does it automatically)
// let result1 = "5" - 2; // 3 (JS converts "5" to 5)

 // Explicit (we do it on purpose)
// let result2 = Number("5") + 2; // 7 (we forced "5" to become 5)


//Q16: What will be the output?
// console.log(Number("123"));
 // output :- 123
// console.log(Number("hello"));
 // output :- NaN
// console.log(Number(true));
 // output :- 1
// console.log(Number(false));
 // output :- 0
// console.log(Boolean(0));
 // output :- false  
// console.log(Boolean("hello"));
 // output :- true


//Q17: What is NaN? Give an example.
//Ans:- NaN stands for "Not-a-Number". It is a special value in JavaScript that represents an invalid or failed mathematical operation.
// Example:-

//console.log("hello" * 5);   // NaN
//console.log(Number("abc")); // NaN
//console.log(10 + undefined); // NaN


//Q18: What is the difference between if-else and switch?
//Ans:-if-else evaluates boolean expressions and ranges, 
// while switch matches a single value against multiple fixed options using strict equality (===).
// if-else :-
// let height = 160;
// if(height >= 160){
//     console.log("Selected!!!");

// }else{
//     console.log("Not Selected!!!");
// }
// output :- Selected!!!

// switch :-
// let month = 1;
// switch(month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     default:
//         console.log("Invalid Month");

// }
// output :- Jan


//Q19: What will be the output?

// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// output :- Adult


//Q20: What is nested if? Give an example.
//Ans:- A nested if is simply an if statement placed inside another if statement.

//Example:-




// let age = 18;
// let height = 160;
// let weight = 60;
// if(age >= 18){
//     if(height >= 160){
//         if(weight >= 60){
//             console.log("Selected");
        
//         }else{
//             console.log("Not Selected");
//         }
//     }else{
//         console.log("Not Selected");
//     }
// }else{
//     console.log("Not Selected");
// }


//Q21: Write a program to check if a number is even or odd using ternary operator.
//let password = true;
// password ? console.log("Password is Correct") : console.log("Passwor


// let value = Number(prompt("Enter Number:"));
// let result = value % 2 === 0 ? "Even" : "Odd";
// console.log(result);


//Q22: What is the difference between while and do-while?
//Ans:-
// while loop (Entry-controlled): Checks the condition before executing the loop body. If the condition is initially false, the loop will never execute.

// do-while loop (Exit-controlled): Executes the loop body first, then checks the condition and it will run at least once, whether the condition is true or false.

// while loop :-
// let count = 10;
// while (count < 10){
//     console.log("Print Nothing");
//     count++;
// }

//do-while :-
// let num = 10;
// do{
//     console.log(`Run At lease once  ${num}`);
//     num++;
// }while(num < 10);


//Q23: What will be the output?
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
//}
// output :-
// 1
// 2
// 3
// 4
// 5


//Q24: What is the difference between for-of and for-in?
//Ans:-
//for...of iterates over the values of an iterable collection.

//for...in iterates over the keys property names or indexes of an object or array.

//for...of ex :-
// let fruits = ["Apple","Mango","Orange","Banana"];
// for(let eat of fruits){
//     console.log(eat);
// }

// for...in ex :-
// let employee = {
//     name : "Vamsi",
//     designation : "Front End Developer",
//     company : "Stackly"
// };
// for(let data in employee){
//     console.log(`${data} : ${employee[data]} `);
// }


// Q25: Write a program to find sum of numbers from 1 to 100.
// let a = 0;
// for (let i=0;i<=100;i++){
//     a += i;
// }
// console.log("Sum from 1-100:",a);
// output:-5050


//Q26: What is the difference between slice and splice?
//Ans:-
//slice() :-It  returns a shallow copy of a portion of an array without modifying the original array.
//splice() :- It mutates the original array by adding, removing, or replacing elements.

//slice() ex :-
// let num = [10,20,30,40,50];
// let sliced = num.slice(1,3);
// console.log(sliced); // [20, 30]
// console.log(num);  // [10, 20, 30, 40, 50] (unchanged)

//splice() ex :-
// let numb = [10,20,30,40,50];
// let spliced = numb.splice(1,2,"a","z");
// console.log(numb);  // [10, "a", "z", 40, 50]
// console.log(spliced);  // [20,30]


//Q27: What will be the output?
// let arr = [1, 2, 3];
// arr.push(4);      // [1,2,3,4]
// arr.pop();        //[1,2]
// arr.unshift(0);   //[0,1,2,3]
// arr.shift();      //[1,2,3]
// console.log(arr);  // Final output :- [1,2,3]


//Q28: What is the difference between function declaration and function expression?
//Ans:-
//Function Declaration :- we can call it anywhere.
// hello(); // Works!

// function hello() {
//   console.log("Hello!");
// }

//Function Expression :- we can't call it anywhere. we must define it before calling it.
// hello(); // Error!

// const hello = function() {
//   console.log("Hello!");
// };


//Q29: What is an arrow function? Give an example.
//Ans:- An arrow function is a compact ES6 syntax for writing function expressions 
// using => that lexically binds the this value from its surrounding scope.
// const add = (a, b) => a + b;

// console.log(add(5, 3)); // Output: 8


//Q30: What will be the output?
// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message);
//output :- Hello