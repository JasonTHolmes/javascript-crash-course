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
console.log(fruit, fruit.pop(), fruit);
console.log(fruit.push('blackberries'), fruit);
console.log(fruit[4]);
fruit[fruit.length] = 'new fruit';
console.log(fruit);