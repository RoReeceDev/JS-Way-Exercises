//JavaScript and Objects

//Creating an object 

//Here is the JavaScript representation of a blue Bic ballpoint pen.

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

//Programming with objects


//Let's use objects to make an rpg

//Our first RPG character 

/*const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};*/

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};
  
console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);
  
// Aurora is harmed by an arrow
aurora.health -= 20;
  
// Aurora equips a strength necklace
aurora.strength += 10;
  
console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

//Adding Methods to an object 

const aurora2 = {
    name: "Aurora",
    health: 150,
    strength: 25
};
  
// Return the character description
function describe(character) {
    return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
}
  
console.log(describe(aurora2));


//Using the describe() property inside the object

const aurora3 = {
    name: "Aurora",
    health: 150,
    strength: 25,

    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points and ${this
        .strength} as strength`;
    }
};
  
console.log(aurora3.describe());

//Coding Time

//Adding Character Experience 


// TODO: create the character object here

const aurora4 = {
    name: "Aurora",
    health: 150,
    strength: 25,

    // Return the character description
    describe2() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points`
    }
};
  
aurora4.xp = 0

console.log(aurora4.describe2())

// Aurora is harmed by an arrow
aurora4.health -= 20;

// Aurora equips a strength necklace
aurora4.strength += 10;

// Aurora learn a new skill
aurora4.xp += 15;

console.log(aurora4.describe2());

//Modeling a dog 

//Complete the following program to add the dog object definition.

// TODO: create the dog object here

const dog = {
    name: 'Fang',
    species: 'boarhound',
    size: 75,
    bark() {
        return 'Grrr! Grrr!'
    }
}


console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Modeling a circle 

//Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

const circle = {
    circumference() {
        return (2 * Math.PI) * r
    },
    area(){ 
        return (Math.PI * r) ** 2
    }

}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

//Modeling a bank account

/*Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.*/


const bankAcc = {
    name: "Alex",
    balance: 0,
    credit(transaction){
        let update = transaction + this.balance
        this.balance = update
    },
    describe3(){
        return `owner: ${this.name}, balance ${this.balance}`
    }
}

console.log(bankAcc.describe3())

bankAcc.credit(250)

bankAcc.credit(-80)

console.log(bankAcc.describe3())
