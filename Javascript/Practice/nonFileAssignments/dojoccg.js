class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power
        this.res = res
    }
    play(target) {
        if (target instanceof Unit) {
            target.res -= this.power
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    play(target) {
        if (target instanceof Unit) {
            target[this.stat] += this.magnitude
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

const redNinja = new Unit('Red Belt Ninja', 3, 3, 4)
const blackNinja = new Unit('Black Belt Ninja', 4, 5, 4)

const hardAlgo = new Effect('Hard Algorithm', 2, "Increase target resilience by 3", "res", 3)
const promiseRejection = new Effect('Unhandled Promise Rejection',1,  "Reduce target resilience by 2", "res", -2)
const pairProgram = new Effect('Pair Programming',3,  "Increase target power by 2", "power", 2)

hardAlgo.play(redNinja)
promiseRejection.play(redNinja)

console.log(redNinja.res)