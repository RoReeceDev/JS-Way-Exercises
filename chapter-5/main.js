
// Declare myFunction
function myFunction() {
    let returnValue;
    // Calculate return value
    // returnValue = ...
    return returnValue;
}
  
  // Get return value from myFunction
  const result = myFunction();
  // ...
  
  console.log(result)


//Coding Time

//Improved hello

//Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
/*function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}*/
  

// TODO: ask user for first and last name

function sayHello(firstName, lastName) {
    firstName = prompt('Enter your first name:')
    lastName = prompt('Enter your last name:')
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
    
}

// TODO: call sayHello() and show its result

console.log(sayHello())

//Number squaring 

//Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
/*function square1(x) {
    // TODO: complete the function code
    return x * x
}*/
  
  // Square the given number x
const square2 = y => y ** 2 // TODO: complete the function code
  
console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

//When it's done, update the program so that it shows the square of every number between 0 and 10.

function square1() {
    for(let x = 0; x <= 10; x++){
        console.log(x ** 2)
    }
} 

square1()


//Minimum of Two Numbers 

//Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// TODO: write the min() function

function min(num1, num2){
    if(num1 < num2){
        return num1
    } else {
        return num2
    }
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1


//Calculator 

//Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program

function calculate(n1, op, n2){
    if(op === '+') {
        return n1 + n2
    } else if(op === '-') {
        return n1 - n2
    } else if(op === '*'){
        return n1 * n2
    } else {
        return n1 / n2
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity


//Circumference and area of a circle 

//Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

/*Here are some tips for solving this exercise:

Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
The value of number π (Pi) is obtained with Math.PI in JavaScript.
You might want to use the exponentiation operator ** to perform computations.*/

//Without user input

/*function circumference(radius){
    return (2 * Math.PI) * radius
}

console.log(circumference(5))


function circleArea(radius){
    return (Math.PI * radius) ** 2
}

console.log(circleArea(5))*/

//With User input

function circumference(){
    let radius = Number(prompt("Enter the radius of the circle"))
    return (2 * Math.PI) * radius
}

console.log(circumference())

function circleArea(){
    let radius = Number(prompt("Enter the radius of the circle"))
    return (Math.PI * radius) ** 2
}

console.log(circleArea())