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

/* For loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}
*/
// Data Types
let yourAge = 18; // Number
let yourName = 'bob'; // String
let name = {first: 'Jane', last: 'Doe'} // Object
let truth = false; // Boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random = undefined; // undefined
let nothing = null; // value null

// Strings in JavaScript (Common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruit = 'banana\napple'; // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', 123));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // Split by characters//Split by a comma
console.log(fruit.split('')); // Split by characters

// TIMESTAMP: 52:07
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');

console.log(fruits[2]); // Access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries'), fruits); //  appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; // sames as push
console.log(fruits);
fruits.shift(); // removes first element from a array
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b;})); // sorted in ascending order
console.log(someNumbers.sort(function(a, b) {return b-a;})); // sorted in descending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in JavaScript
// Dictionaries in Python

let student = {
    first: 'Jason',
    last: 'Holmes',
    age: 37,
    height: 185,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

// console.log(student.first);
// console.log(student['last']); // Accessing works with index; in tutorial Qazi forgot quotes
// student.first = 'notJason'; //change value
// console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());

// Conditionals, Control flows (if else)
// 18-35 is mu Target Demographic
// && And
// || or
var  age = 45;

if ((age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status)
} else {
    status = 'Not my audience';
    console.log(status)
}

// Switch Statement
// Differentiate between weekday vs. weekend
// Day 0 --> Sunday --> weekend
// Day 1 --> Monday --> weekday
// Day 2 --> Tuesday --> weekday
// Day 3 --> Wednesday --> weekday
// Day 4 --> Thursday --> weekday
// Day 5--> Friday --> weekend
// Day 6 --> Saturday --> weekend
switch (6) {
    case 0:
        text = 'weekend'
        break;
    case 5:
        text = 'weekend'
        break;
    case 6:
        text = 'weekend'
        break;    
    default:
        text = 'weekday'
}

console.log(text);