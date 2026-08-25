/*
Q1.What is a variable in JavaScript?
 Ans :- variable is used to store the value or data.
 Ex :- a = 10;
    Here, 
    a 'a' is 'variable' 
    '10' is data
    Therefore, '10' is assigned to variable 'a'. That means '10' is stored in variable 'a'.


Q2.What are the three keywords used to create variables?
Ans:- 
1.var
2.let
3.const


Q3.Write the syntax to create a variable using var.
Ans:- var a = 10;


Q4.Write the syntax to create a variable using let.
Ans:- let b = 20 ;


Q5.Write the syntax to create a variable using const.
Ans:-  const c = 40;


Q6.What is declaration?
Ans:-  (var a)  Here, 'a' is declaration.


Q7.What is initialization?
Ans:- (let a = 10) Here, '10' is initialization.


Q8.What is reassignment?
Ans:- Updating an existing variable with a new value (e.g, a = 20;).


Q9.What is redeclaration?
Ans:-  Declaring an already-existing variable name again within the same scope using a declaration keyword (e.g., var a = 10; var a = 20;).


Q10.Which keyword allows redeclaration?
Ans:- var keyword.


Q11.Which keyword allows reassignment?
Ans:-  var and let


Q12.Which keyword requires initialization when declared?
Ans:-  const keyword


Q13.Identify the declaration and initialization:
let age = 25;
Ans:- 'age' is declaration and '= 25' is intilization.


Q14.What is the value of a?
var a = 100;
console.log(a);
Ans:-  a = 100;


Q15.Change the value of this variable to 200:
let number = 100;
Ans:-  number = 200;


Q16.What will be the output?
var a = 10;
console.log(a);
Ans:-  10


Q17.What will be the output?
var a = 10;
a = 20;
console.log(a);
Ans:- 20


Q18.What will be the output?
var a = 10;
var a = 30;
console.log(a);
Ans:-  30


Q19.Write a var variable named name with the value "John".
Ans:- var name = "John";


Q20.Create a var variable named price with the value 500.
Ans:-  var price = 500;


Q21.Reassign price from 500 to 1000.
Ans:- var price = 500;
          price = 1000;
          document.writeln(price)


Q22.What will be the output?
var x = 50;
x = 100;
console.log(x);
Ans:- 100


Q23.Can a var variable be reassigned?
Ans:-  Yes


Q24.Can a var variable be redeclared?
Ans:-  Yes


Q25.Write an example of var redeclaration.
Ans:- var x = 150;
      var x = 200; //Redeclaration
console.log(x);


Q26.Create a let variable named age with the value 25.
Ans:-  let age = 25;


Q27.What will be the output?
let age = 20;
age = 30;
console.log(age);
Ans:-  30


Q28.Can a let variable be reassigned?
Ans:-  Yes


Q29.Can a let variable be redeclared?
Ans:-  No


Q30.Find the error:
let name = "John";
let name = "David";
Ans:-  Here, "name" is declared with "John". so again same declaration(name) i.e let name = "David" is error. in simple understanding:- SyntaxError: Identifier 'name' has already been declared.


Q31.Create a let variable called city and assign "Chennai".
Ans:-  let city = "Cheenai";
       document.writeln(city);


Q32.Change the value of city to "Salem".
Ans:-    city = "Salem";
        document.writeln(city);


Q33.What will be the output?
let x = 10;
x = 50;
console.log(x);
Ans:- 50;


Q34.Write a let variable called salary with the value 25000.
Ans:-  let salary = 25000;
        document.writeln(salary);


Q35.Reassign salary to 30000.
Ans:-  let salary = 25000;
           salary = 30000;
           document.writeln(salary);


Q36.Create a const variable called pi with the value 3.14.
Ans:-  const pi = 3.14;
        document.writeln(pi);


Q37.Can a const variable be reassigned?
Ans:-  No


Q38.Can a const variable be redeclared? 
Ans:-  No


Q39.What is wrong with this code?
const age;
age = 25;
Ans:-  Error in (const age;) because it for age they didn't intilize the value. so it throws error. missing intilization for {const age;} 


Q40.What happens here?
const price = 500;
price = 1000;
Ans:- Error because once it assigned a value for price means that is final. It wont change the value after try to reassigned also.


Q41.Create a const variable called country with the value "India".
Ans:-  const country = "India";
        document.writeln(country);


Q42.What will be the output?
const x = 100;
console.log(x);
Ans:- 100


Q43.Which keyword should you use if the value should not be reassigned?
Ans:-  Const  


Q44.What is the difference between let and const?
Ans:-  let allows reassignment and can be declared without an immediate value.
        Const wont allow to reassign values because it is static in nature.


Q45.What is the difference between var and const?
Ans:- var allows redeclaration and reassignment without showing error it will execute.
      const dont allow both it will be unique.


Q46.Write JavaScript code to print Hello World using console.log().
Ans:-   console.log("Hello World");  
             or
              var a = "Hello World";
              console.log(a);


Q47.Write JavaScript code to print the number 500 using console.log().
Ans:-  let b = 500;
        console.log(500);


Q48.What is the purpose of console.warn()?
Ans:-  It displays a yellow warning symbol message in the broweser console to indicate the user to warn.


Q49.What is the purpose of console.error()?
Ans:-  It displays the output red message in the browser console to indicate for the code errors and immediate action to be required to debug the code.


Q50.What is the purpose of each?
alert()
prompt()
confirm()
document.writeln()
console.log()
Ans:-
alert(): Displays a simple modal dialog with a message and an "OK" button to inform the user.

prompt(): Opens a modal dialog with a text input field, allowing the user to provide an input in the box given to type.

confirm(): Shows a modal dialog with "OK" and "Cancel" buttons, returning true or false based on the user's choice.

document.writeln(): Writes text or HTML directly into the web page document, appending a newline character after the output.

console.log(): Prints informational messages or variable data directly to the developer console for debugging purposes.
*/


// Practical Questions :-
//Q.Create a variable for student name, age, and mark and print all three.

let studentName = "Devapuja YugaRaja Vamsi";
let studentAge = 22;
let studentMark = 87;

 console.log("Name :" , studentName);
 console.log("Age :" , studentAge);
 console.log("Mark :" , studentMark);



 //Q.Ask the user's name using prompt() and display it using alert().

let a = "Enter User Name";
let b = prompt(a);
alert(b);


//Q.Ask the user's age using prompt() and print it using console.log().

let UserAge = "Enter User Age";
let UserAge2 = prompt(UserAge);
console.log(UserAge2);


//Q.Ask the user a question using confirm().

let question = "Are you understanding classes ?";
let question2 = confirm(question);
console.log(question2);


//Q.Ask the user's name and display it on the webpage using document.writeln().

let username = "Enter UserName";
let username2 = prompt(username);
document.writeln(username2);

