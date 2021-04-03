/*  console.log('Hello World!');
alert('yo!');

var b = "smoothie"

console.log(b)

var age = prompt('what is your age?');

document.getElementById('text').innerText = age;

var num1 = 10;
num1++;

num1--;

num1 += 10;
console.log(num1);

function fun(){
     alert('this is a function')
}
fun();

// creates a function that takes a name and returns "hello" followed by name

// for example

// if name is "Jay" - return "Hello Jay"

function greeting(yourName) {
    var result = 'hello ' + yourName;
    console.log(result)
}

var name = prompt('What is your name?')
greeting(name)

function sumNumbers(a, b){
    console.log(a + b)
}

sumNumbers(4, 3) 

//while loops

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

//for loops

for (let num = 0; num < 420; num++) {
    console.log(num);
}
// Data Types
// numbers, strings, objects, boolean, array, undefined, null

//strings

let fruit = 'banana';
let moreFruit = 'banana\napple'

console.log(moreFruit);
console.log(fruit.length);
console.log(fruit.indexOf('a'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[3]);
console.log(fruit.split(''));

//Arrays in Javascript
*/
let fruit = ['orange', 'banana','pineapples', 'apple'];

fruit = new Array ('banana', 'orange', 'apple', 'pineapples');

//console.log(fruit[2]); //access value at index 2

//fruit[0] = 'pear';
//console.log(fruit);

/*for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}*/


// array common methods
console.log('to string', fruit.toString());
console.log(fruit.join( ' * '));
console.log(fruit, fruit.pop(), fruit); //removes last item
console.log(fruit.push('blackberries'), fruit); // appends
console.log(fruit[3]);
fruit[fruit.length] = 'new fruit'; // same as push
console.log(fruit);
fruit.shift(); // removes first element from an array
console.log(fruit);
fruit.unshift('kiwi'); // add first element to an array
console.log(fruit);
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruit.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort())

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b;})); // sorted in ascending order
console.log(someNumbers.sort(function(a, b) {return b-a;})); // sorted in descending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num)
}
console.log(emptyArray)

//Objects in Javascript

let student = {
    first: 'Jason',
    last: 'Holmes',
    age:37,
    height:182,
    studentInfo: function(){
        return this.first +  '\n' + this.last + '\n' + this.age;
    }
};

// console.log(student.first);
// console.log(student['first']);
// student.first = "notJason"; // Change the value
// console.log(student['first']);
// student['first'] = 'newjason'; //another way to change the value. in the video, Qasi is not putting the quotations around the keys.
// console.log(student['first']);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditionals, Control Flows (if else)
// 18-35 is my target demographic
// && AND bolean statement
// || OR
var age = 45;

if((age >= 18) && (age <= 35) ){
    status = 'target demo';
    console.log(status)
}else{
    status = 'Not my audience';
    console.log(status)
}

// Switch Statements
//Differnetiate betweena  weekdaya nd a weekend
// 0 Sunday
// 6 is Saturday
// 4 Thursday

switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = "weekend";
        break;
    case 6:
        text = "weekend"
        break;
    default:
        text = "weekday";
}

console.log(text)