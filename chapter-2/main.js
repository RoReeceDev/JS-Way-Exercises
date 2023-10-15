//Play with Variables

//Declaring a variable

let a
console.log(a) //note result is undefined as we did not assign a value

//Assign values to variables 

let b;
b = 3.14
console.log(b)


//using const 

const c = 3.14
//c = 6.28  //cannot change a value of const, will cause an error!!

//Increment a number variable

let d = 0
d += 1
d++
console.log(d)

//Variable scope

let num1 = 0
{
    num1 = 1
    const num2 = 0
}

console.log(num1)
//console.log(num2) //Can't call this outside of code block as it is block scoped.

//Expression

// e is an expression whose value is 3
const e = 3;
// f is an expression whose value is the value of e (3 here)
let f = e;
// (f + 1) is an expression whose value is f's + 1 (4 here)
f = f + 1; // d now contains the value 4
console.log(f); // Show 4


//Operator Priority

let g = 3 + 2 * 4; // g contains 11 (3 + 8)
g = (3 + 2) * 4;   // g contains 20 (5 * 4)

//Template Literals

const country = "France";
console.log(`I live in ${country}`); // Show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // Show "3 + 7 = 10"


//Type Conversion

//Implicit Conversions

const h = 100;
// Show "Variable f contains the value 100"
console.log("Variable h contains the value " + h);

//Explicit Conversions

const i = "5";
console.log(i + 1); // Concatenation: show the string "51"
const j = Number("5");
console.log(j + 1); // Numerical addition: show the number 6

//Impossible conversions

const k = "five" * 2;
console.log(k); // Show NaN


//Entering Information

const name = prompt("Enter your first name:");
alert(`Hello, ${name}`);


//Console.log displaying multiple values at once

const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3); // Show "36.9 37.6 37.1"

//Coding Time 

//Build a habit of choosing good variable names in all exercises, starting with these ones.

//Improved Hello

//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

const fname = prompt ("Enter your first name:")
const lname = prompt("Enter your last name:")

alert(`Hello ${fname} ${lname}`)


//Final Values 

//Observe the following program and try to predict the final values of its variables.

let m = 2;       // output 2
m -= 1;          // output 1
m++;             // output 2
let n = 8;       // output 8
n += 2;          // output 10
const o = m + n * n;       // output 102
const p = m * n + n;       // output 30
const q = m * (n + n);     // output 40
const r = m * n / m;       // output 10
const s = n / m * m;       // output 10

console.log(m, n, o, p, q, r, s);


//VAT Valculation

//Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

let rawPrice = prompt('Give a raw price:')
rawPrice = rawPrice * 0.206
alert(rawPrice)
console.log(rawPrice)

//From Celsius to Farenheit degrees

//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

//The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

let celsuisTemp = prompt("What is the temperature °C \?")
let farenheitTemp = celsuisTemp * 9/5 + 32
console.log(farenheitTemp)
alert(farenheitTemp)

//Variable Swapping

//Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
//Add the necessary code to swap the values of variables number1 and number2.

let placeholder = number1
number1 = number2
number2 = placeholder

console.log(number1); // Should show 3
console.log(number2); // Should show 5


