//Add Conditions

//if statements 

//Enter a number
const number = Number(prompt("Enter a number:"))
//If the number is positive
if (number > 0) {
  //Display a message
  console.log(`${number} is positive`)
}

const number2 = Number(prompt("Enter a number:"));
if (number2 >= 0) {
  console.log(`${number2} is positive or zero`);
}

//The else statement

const number3 = Number(prompt("Enter a number:"));
if (number3 > 0) {
  console.log(`${number3} is positive`);
}
else {
  console.log(`${number3} is negative or zero`);
}

//Nesting Conditions 

const number4 = Number(prompt("Enter a number:"));
if (number4 > 0) {
  console.log(`${number4} is positive`);
} else {
  // number <= 0
  if (number4 < 0) {
    console.log(`${number4} is negative`);
  } else {
    // number === 0
    console.log(`${number4} is zero`);
  }
}

//Add Additional Logic 

//And Operator &&

/*if ((number5 >= 0) && (number5 <= 100)) {
    console.log(`${number5} is between 0 and 100, both included`);
}*/

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false


// OR Operator ||

/*if ((number6 < 0) || (number6 > 100)) {
    console.log(`${number6} is not in between 0 and 100`);
}*/

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false



//writing a statement with multiple choices using if else statements

const weather1 = prompt("What's the weather like?");
if (weather1 === "sunny") {
  console.log("T-shirt time!");
} else if (weather1 === "windy") {
  console.log("Windbreaker life.");
} else if (weather1 === "rainy") {
  console.log("Bring that umbrella!");
} else if (weather1 === "snowy") {
  console.log("Just stay inside!");
} else {
  console.log("Not a valid weather type");
}



//writing a statement with multiple choices using switch statements

const weather2 = prompt("What's the weather like?");
switch (weather2) {
  case "sunny":
    console.log("T-shirt time!");
    break;
  case "windy":
    console.log("Windbreaker life.");
    break;
  case "rainy":
    console.log("Bring that umbrella!");
    break;
  case "snowy":
    console.log("Winter is coming! Just stay inside!");
    break;
  default:
    console.log("Not a valid weather type");
}

//Coding Time

//Following Day

//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

let day = prompt("What is today?")

if (day === 'monday') {
  console.log('The following day is tuesday')
} else if (day === 'tuesday') {
  console.log('The following day is wednesday')
} else if (day === 'wednesday') {
  console.log('The following day is thursday')
} else if (day === 'thursday') {
  console.log('The following day is friday')
} else if (day === 'friday') {
  console.log('The following day is saturday')
} else if (day === 'saturday') {
  console.log('The following day is sunday')
} else if (day === 'sunday') {
  console.log('The following day is monday')
} else {
  console.log("Please enter a day of the week")
}

switch (day) {
  case "monday":
    console.log('The following day is tuesday')
    break;
  case "tuesday":
    console.log('The following day is wednesday')
    break;
  case "wednesday":
    console.log('The following day is thursday')
    break;
  case "thursday":
    console.log('The following day is friday')
    break;
  case "friday":
    console.log('The following day is saturday')
    break;
  case "saturday":
    console.log('The following day is sunday')
    break;
  case "sunday":
    console.log('The following day is monday')
    break;
  default:
    console.log("Please enter a day of the week")
}


//Number comparison

//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.



let nUM1 = Number(prompt('Enter first number:'))
let nUM2 = Number(prompt('Enter second number'))

if (nUM1 === nUM2) {
  console.log('These numbers are the same')
} else if (nUM1 > nUM2) {
  console.log(`${nUM1} is more than ${nUM2}`)
} else {
  console.log(`${nUM1} is less than ${nUM2} `)
}



//Final Values 

//Take a look at the following program.

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

//Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.



//Number of Days in A Month 

//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

function howManyDays(month) {
  if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
    return "30 Days"
  } else if ((month === 1) || (month === 3) || (month === 5)(month === 7) || (month === 8) || (month === 10) || (month === 12)) {
    return "31 Days"
  } else if ((month === 2)) {
    return "28 Days"
  } else {
    return 'Input does not match month of the year'
  }
}


//Following Second

//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

function nextSecond(hours, minutes, seconds) {
  if (
    hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    minutes <= 59 &&
    seconds >= 0 &&
    seconds <= 59
  ) {
    seconds++
    if (seconds === 60) {
      seconds = 0;
      minutes++
      if (minutes === 60) {
        minutes = 0;
        hours++
        if (hours === 24) {
          hours = 0;
        }
      }
    }
    let time = `${hours}h${minutes}m${seconds}s`
    console.log(`In a second the time will be ${time}`);
  }
  else {
    console.log("Enter correct information");
  }


}

nextSecond(12, 23, 59)

/*This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s should give 14h18m0s
6h59m59s should give 7h0m0s
23h59m59s should give 0h0m0s (midnight)*/