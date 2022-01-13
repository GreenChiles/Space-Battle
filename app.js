class AssignToMyself  {
    constructor(healthPoints, firepower, accuracy){
    this.healthPoints = 20
    this.firepower = 5
    this.accuracy = 0.7
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

    retreat(){ // check if this works when leave function is made
        if (alien == dead){
            leave()
            console.log(" i quit")
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

const alien1 = new AssignToAliens()
const alien2 = new AssignToAliens()
const alien3 = new AssignToAliens()
const alien4 = new AssignToAliens()
const alien5 = new AssignToAliens()

//console.log(alien1)
/*myself.shoot(alien1)
console.log(myself)
console.log(alien1)*/

alien1.shoot(myself)
console.log(myself)
console.log(alien1)
