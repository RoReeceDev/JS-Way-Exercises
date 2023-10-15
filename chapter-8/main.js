//Work with strings 

//Turning a string into an array

const name = "Sarah";
const nameArray = Array.from(name);
nameArray.forEach(letter => {
  console.log(letter);
});

//Coding Time 

//Word Info

//Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

function aWord1(){
    let word = prompt("Enter a word")
    console.log(word.length)
    console.log(word.toLowerCase())
    console.log(word.toUpperCase())
}




//Vowel Count 


function aWord2(){
    let word = prompt("Enter a word")
    console.log(word.length)
    console.log(word.toLowerCase())
    console.log(word.toUpperCase())
    let vowels = 'aeiouAEIOU'.split('')
    let count = 0
    word.split('').forEach(function(e){
        if(vowels.indexOf(e) !== -1){
            count++
        }
    })
    console.log(count)
}

aWord2()

//backwards word 

function aWord3(){
    let word = prompt("Enter a word")
    console.log(word.length)
    console.log(word.toLowerCase())
    console.log(word.toUpperCase())
    let vowels = 'aeiouAEIOU'.split('')
    let count = 0
    word.split('').forEach(function(e){
        if(vowels.indexOf(e) !== -1){
            count++
        }
    })
    console.log(count)
    let reverseWord = ''
    for(let i = word.length - 1; i >= 0; i--){
        reverseWord += word[i]
    }
    console.log(reverseWord)
}

aWord3()

//palindrome

function aWord4(){
    let word = prompt("Enter a word")
    console.log(word.length)
    console.log(word.toLowerCase())
    console.log(word.toUpperCase())
    let vowels = 'aeiouAEIOU'.split('')
    let count = 0
    word.split('').forEach(function(e){
        if(vowels.indexOf(e) !== -1){
            count++
        }
    })
    console.log(count)
    let reverseWord = ''
    for(let i = word.length - 1; i >= 0; i--){
        reverseWord += word[i]
    }
    console.log(reverseWord)
    let pali = ''
    for(let i = word.length - 1; i >= 0; i--){
        pali += word[i]
    }
    if(pali === word){
        console.log(`${pali} is a palindrome`)
    } else{
        console.log(`${pali} is not a palindrome`)
    }
}


aWord4()