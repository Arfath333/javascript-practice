//Primitive Data Types//
var A = "car";
console.log(typeof A);

var B = 3;
console.log(typeof B);

var C = true;
console.log(typeof C);

var D = 
console.log(typeof D);

var E = Symbol();
console.log(typeof E);

//Conditional Statements//
//1. if Conditional Statements//

// if (condition) {
//     statements {
//     }
//}


let a = true;
if (a) {
    console.log("This is True");
}

//Syntax of if else conditional statement//

// if (condition) {
//     statements
// } else {
//     statements
// }

let b  = false;
if (b) {
    console.log("This is true");
} else {
    console.log("this is false");
}

//Syntax of if else if conditional statement//

// if (condition1) {
//     statements
// } else if (condition2) {
//     statements
// } else {
//     statements
// }

let c = 50;
if (c < 10) {
    console.log("c is less than 10");   
} else if (c < 30) {
    console.log("c is less than 30");
} else {
    console.log("c is greater than 30");  
}

//Syntax of switch conditional statement//

// switch (expression) {
//     case n:
//         code block
//         break;
//     case n :
//         code block
//         break;
//     default:
//         default codew block;    
// }

let dice = 3;
switch (dice) {
    case 1:
        console.log("You Got One");
        break;
    case 2:
        console.log("You Got Two");
        break;
    case 3:
        console.log("You Got Three");
        break;
        default:
            console.log("You Did Not Roll The Dice");
}
         

//Looping Statememnts//
//1. for loop
//2. while loop//
//3. do/while loop//
//4. for/in loop//
//5. for/of loop//

//1. for loop

// for (initilization; CSSConditionRule; increment/decrement) {
//         statements
//     }

for (let i=1; i<5; i++) {
    console.log("The value is " + 1);
}

// 2. while loop//

// while (condition) {
    // statements
// }

let i = 0;
while (i < 3) {
    let multiply = i * 2;
    i++;
    console.log(multiply);
}

// 3. Do while loop//

// do {
//     statements;
// } while (condition);

let n = 5
do {
    let square = n * n;
    n--;
    console.log(square);
} while (n>0);


// Function statement

// function functionname(parameter-list) {
//     statements
// }

function print(){
    console.log('Syed Arfath')
}
print()

//functiomn parametrs//
function greet(name) {
    console.log("Hi " + name);
}
greet("arfath");

// return function//

function add(a, b) {
    var c = a + b;
    return c;
}

var res = add(5, 4);
console.log(res);

setTimeout(function () {
    console.log("Execute after 3 sec");
}, 3000);

//call back function//

// function callbackFunction(name) {
//     console.log("hello + name");
// }
// function outerFunction(callback) {
//     let name = prompt ("please enter your name");
//     callback(name);
// }
// outerFunction(callbackFunction);


//Arrays//

var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
console.log(fruits[0]); 
console.log(fruits.length); 
console.log(fruits);

fruits.unshift("grapes");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

var color1 = ["red", "green", "blue"];
var colors = color1.concat(fruits);
console.log(colors);
 