let petType = ["cat", "dog", "rabbit"];

class animal {
    constructor(){
        this._pet = petType;
        this.hunger = 0;
        this.thirst = 0;
        this.bored = true;
        this.boredLevel = 0;
        
        
    }

    setInterval(play, 2000);
    play(){
        this.bored = false;
        this.boredLevel--;
        this.thirst += 20;
        this.hunger += 10
        alert(`Your ${this._pet} is happy now!`)

        if(virtualPet.hunger >= 100){
            alert(`Your ${virtualPet._pet} is dead!`)
        }else if(virtualPet.hunger > 30){
            alert(`Your ${virtualPet._pet} is hungry!`)
        }
    
    }
    
}

const virtualPet = new animal()

    if(virtualPet.bored  == true){
        alert(`Your ${virtualPet._pet} is bored, play with it!`)

    }

let selectedOption = ["feed", "drink", "play"];

const gameLoop = () => { 
    // At the start of this loop is where you want to 'deteriorate' the values
    // e.g. hunger + 10 
    // let time = 5;

    if (selectedOption === "play") {
        this.play + 10;       
        
    } else if (selectedOption === "feed") {
        hunger + 10;
    } else if (selectedOption === "drink") {
        hunger + 1;
    } else {
        time - 2;
    }
    
    // At the end of this 'loop'
    gameLoop();
    // This will run the function again
}

const init = () => {        
    console.log("hello");
    let selectedPet = prompt("Who are you?");

    if(selectedPet === "cat") {

    } else if (selectedPet === "dog") {
 
    } else if (selectedPet === "rabbit") {
    
    } else {
        console.log("haha that's not a pet!");
    }

    gameLoop()
}


//init();

// new stuff!
class Animal {
    constructor(type, name) {
        this.type = type,
        this.name = name,
        this.age = 0,
        this.hunger = 10,
        this.thirst = 10,
        this.happiness = 10,
        this.clean = 10
    }
    feed(){
        this.hunger += 5
        this.thirst -= 1
        this.happiness -= 1
        this.clean -= 1
    }
    water(){
        this.thirst += 5
        this.hunger -= 1
        this.happiness -= 1
        this.clean -= 1
        }
    play(){
        this.thirst -= 1
        this.hunger -= 1
        this.happiness += 5
        this.clean -= 1
    }
    wash(){
        this.clean += 5
        this.thirst -= 1
        this.happiness -= 1
        this.hunger -= 1
    }
}

class Cat extends Animal {
    constructor(type, name) {
        super(type, name)
    }
    giveCatnip () {
        this.happiness += 4
    }
}

class Dog extends Animal {
    constructor(type, name) {
        super(type, name)
    }
    giveSqueakyToy () {
        this.happiness += 4
    }
}

// let cat = new Cat("cat", "catty")

// console.log(cat)

let pet

let selectedOption = "wash"
let selectedPet = {
    type: "Dog", 
    name: "Chester"
}
const gameLoop = () => {
    // Animal.hunger = pet.hunger
    // Animal.play = pet.play
    // Animal.water = pet.water
    // Animal.feed = pet.feed

    if (pet.hunger <= 0) {
        console.log(`${pet.name} has died of hunger`)
        return
    } else if(pet.thirst <= 0) {
        console.log(`${pet.name} has died of thirst`)
        return
    } else if(pet.happiness <= 0) {
        console.log(`${pet.name} has died as it was depressed`)
        return
    } else if(pet.clean <= 0) {
        console.log(`${pet.name} has died as it was full of fleas`)
        return
    }
    

    if (selectedOption === "play") {
        pet.play()
        console.log(`${pet.name} is happier`)
    } else if (selectedOption === "feed") {
        pet.feed()
        console.log(`${pet.name} is fuller`)
    }else if (selectedOption === "water") {
        pet.water()
        console.log(`${pet.name} is less thirsty`)
    }else if (selectedOption === "wash") {
        pet.wash()
        console.log(`${pet.name} is cleaner`)
    }
    
    console.log(pet)
    // At the end of this 'loop'
    gameLoop()
    // This will run the function again
}

const init = () => {
    // do some stuff like get initial input
    // e.g. if(selectedPet === "cat")
    pet = new Animal(selectedPet.type, selectedPet.name)
    console.log(pet)
    // now do:
    gameLoop()
}

init()