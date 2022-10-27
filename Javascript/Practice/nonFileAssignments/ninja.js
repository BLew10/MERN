class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(`Health: ${this.health} | Speed: ${this.speed} | Strength: ${this.strength}`)
    }

    drinkSake(){
        this.health+=10
    }
}

class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10 )
        this.wisdom = wisdom
    }

    speakWisdom() {
        super.drinkSake()
        console.log("Be like water")
    }
}

const sensei1 = new Sensei("Master Roshi");



sensei1.speakWisdom()

sensei1.showStats()
