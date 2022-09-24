ducksArr = []

class duck {
    constructor(color, x, xDirection, yDirection){
        this.alive = true
        this.color = color
        this.x = x
        this.y = 147
        this.xDirection = xDirection
        this.yDirection = yDirection
        this.img
        this.phase = 0
    }
}

const birth = () => {
    colorRan = Math.ceil(Math.random() * 20)
    if (colorRan > 17){
        color = 2
    } else if (colorRan > 12){
        color = 1
    } else {
        color = 0
    }
    x = 0
    xDirection = 0
    yDirection = 0
    newDuck = new duck(color, x, xDirection, yDirection)
    ducksArr.push(newDuck)
}

birth()

console.log(ducksArr.values(alive).every())



if(shotStatus){
    huntActive = false
    gameStatus = 4
    shotStatus = false
    console.log(`Game status: `, gameStatus)
}

if(timer > 10000){
    gameStatus = 6
    console.log(`Game status: `, gameStatus)
}