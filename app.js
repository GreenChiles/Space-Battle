class AssignToMyself  {
    constructor(healthPoints, firepower, accuracy){
    this.healthPoints = 20
    this.firepower = 5
    this.accuracy = 0.7
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
}

const alien1 = new AssignToAliens()
console.log(alien1)

