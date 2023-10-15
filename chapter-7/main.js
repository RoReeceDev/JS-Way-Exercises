//Coding Time 

//Musketeers

//Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".

const musketeers =['Athos', 'Porthos', 'Aramis']

//Shows each array element using a for loop.

for(let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
}

//Adds the "D'Artagnan" value to the array.

musketeers.push('D\'Artagnan')

//Shows each array element using the forEach() method.

musketeers.forEach(musks =>{
    console.log(musks)
})

//Remove poor Aramis.

musketeers.splice(2, 1)


//Shows each array element using a for-of loop.

for(const musk of musketeers){
    console.log(musk)
}


//Sum of Values

//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

//Using forEach

const values = [3, 11, 7, 2, 9, 10];

let sum = 0

values.forEach(value =>{
    sum += value;
})

console.log(sum)

//Using for loop

let total = 0

for(let i = 0; i < values.length; i++){
    total += values[i]
}

console.log(total)


//Array Maximum

//Write a program that creates the following array, then calculates and shows the array's maximum value.

const numMax = [3, 11, 7, 2, 9, 10];


console.log(Math.max(...numMax))

console.log(Math.max.apply(Math, numMax))


let max = numMax[0]

for(let i = 0; i < numMax.length; i++){
    if(numMax[i] > max){
        max = numMax[i]
    }
}

console.log(max)


//List of Words 

//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

const words = []

let word

for(let i = 0; i <= words.length; i++){
    word = prompt('Enter a word or enter stop:')
    if(word === 'stop'){
        console.log(words)
    } else {
        words.push(word)

    }
}