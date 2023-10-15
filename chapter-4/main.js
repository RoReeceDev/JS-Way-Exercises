//Coding Time

//Carousel

//Write a program that launches a carousel for 10 turns, showing the turn number each time.

//while loop

/*let j = 1
while(j <= 10){
    console.log(`Carousel Turn2 ${j}`)
    j++
}*/

//for loop

/*for(let i = 1; i <= 10; i++){
    console.log(`Carousel Turn1 ${i}`)
}*/

//When it's done, improve it so that the number of turns is given by the user.

//While Loop

/*let carousel = ""
while(carousel <= 10){
    carousel = Number(prompt("Enter the turns the carousel will make:"))
    carousel++
    console.log(carousel)
    
}*/

//For Loop

/*for(let carosuel = ""; carosuel <= 10;) {
    carosuel = Number(prompt("Enter the Number of the carosuel:"))
    console.log(`Carosuel turned ${carosuel} times`)
}*/

//Parity

//Check the following program that shows even numbers (divisible by 2) between 1 and 10.

/*for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }
}*/

//This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

//Improve the program so that it also shows odd numbers.

/*for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
}*/


//Improve it again to replace the initial number 1 by a number given by the user.

/*for (let i = ""; i <= 10; i++) {
    i = Number(prompt("Enter a number:"))
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
}*/

//Input Validation 

//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.


/*for(let i= ""; i >= 100;) {
  i = Number(prompt("Enter a number"))
  console.log(i)
}*/

for(let i = ""; 100 >= i >= 50;) {
  i = Number(prompt("Enter a number"))
  console.log(i)
}


//When you are done with the above, improve the program so that the terminating number is between 50 and 100.

