const myself = document.querySelector("#myself")
const attackBtn = document.querySelector("#attack")
const lazar1 = document.querySelector("#lazar1")
const lazar2 = document.querySelector("#lazar2")
const lazar3 = document.querySelector("#lazar3")
const lazar4 = document.querySelector("#lazar4")
const alien1 = document.querySelector("#alien1")
const alien2 = document.querySelector("#alien2")
const alien3 = document.querySelector("#alien3")
const alien4 = document.querySelector("#alien4")
const alien5 = document.querySelector("#alien5")
const alien6 = document.querySelector("#alien6")

class AssignToMyself  {
    constructor(healthPoints, firepower, accuracy){
    this.healthPoints = 20
    this.firepower = 5
    this.accuracy = 0.7
    this.retreat = false
    }

    shoot(alien){
        if (Math.random() <= this.accuracy){
            alien.healthPoints -= this.firepower
            console.log("hit")
        } else if (Math.random() > this.accuracy){
            console.log("miss, Lol")
        } else {
            console.log("missed?")
        }
    }

    
}

const myself = new AssignToMyself()
//console.log(myself)


class AssignToAliens {
    constructor(healthPoints, firepower, accuracy){
        this.healthPoints =  Math.floor((Math.random() * 3) + 3) // gets a number between 0 and 3, then adds 3, thus gives random number between 3 - 6.
        this.firepower = Math.floor((Math.random() * 2) + 2)
        this.accuracy = Math.round(Math.random() * (8 - 6) + 6) / 10
    }
    shoot(me){
        if (Math.random() <= this.accuracy){
            me.healthPoints -= this.firepower
            console.log("hit")
        } else if (Math.random() > this.accuracy){
            console.log("miss, Lol")
        } else {
            console.log("missed?")
        }}
}

const killedAlien = () => {
    if (AssignToAliens.healthPoints <= 0){

    }
}

const lazarAnimation = () => {

}

const alien1 = new AssignToAliens()
const alien2 = new AssignToAliens()
const alien3 = new AssignToAliens()
const alien4 = new AssignToAliens()
const alien5 = new AssignToAliens()

//console.log(alien1)
/*myself.shoot(alien1)
console.log(myself)
console.log(alien1)*/


const killCounter = 0
let alienDead = () => {
    if (AssignToAliens.healthPoints <= 0){
        killCounter++
    }
}

let gameOver = () => {
    if (AssignToMyself.healthPoints <= 0){
        console.log("Game over i died lol")
        //alert("game Over, you lose, lol")
    } else if(AssignToMyself.retreat){
        console.log("Game over i quit")
    } else if(killCounter = 6){
        console.log(" I win")
    }
}

gameOverLoss(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
alien1.shoot(myself)
console.log(myself)
console.log(alien1)


