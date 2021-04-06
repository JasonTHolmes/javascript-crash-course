console.log('hello');

// alert('hello this is Jason');

// How to write a comment inline

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
// console.log(someNumber);

// Manipulate DOM with JavaScript
/* ... It's just a fancy way of saying
change HTML with JavaScript */

// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// Numbers in Javascript
var num1 = 10;

// increment num1 by 1
num1++;

// decrement num1 by 1
num1--;
console.log(num1);

// divide, multiply *, remainder %
console.log(num1 % 6);

// increment/decrement by any number you want
num1 += 10;
console.log(num1);

/* Functions
1 create a function
2. Call the function
*/

// Create
function fun(){
console.log('This is a function');
}

// Call
fun();

/* Let's create a function that takes in a name
and says hello followed by your name

For example:

Name: "Jason"
Return: "Hello Jason"
*/


function greeting(yourName) {
    var result = 'Hello ' + yourName; // String Concatenation
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers together  in a function

function sumNumbers (num1, num2) {
    var result = num1 + num2;
    console.log(num1 + num2);
}

sumNumbers(10, 10);

/* While loops

var num = 0;

while (num < 100){
    num += 1;
    console.log(num);
}

*/

// For loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data Types
let yourAge = 18; // Number
let yourName = 'bob'; // String
let name = {first: 'Jane', last: 'Doe'} // Object
