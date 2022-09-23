const background = {width: 512, height: 240}
const canvas = {width: 1920, height: 1000}
huntArea = {left: 0, top: 0, right: Math.floor(477 / background.width * canvas.width), bottom: Math.floor(162 / background.height * canvas.height)}  
ducksArr = []
let duckColor = ['B','V','R']

class duck {
    constructor(color, x, xDirection, yDirection){
        this.alive = true
        this.color = color
        this.x = x
        this.y = 163 / background.height * 900
        this.xDirection = xDirection
        this.yDirection = yDirection
    }
}

const birth = () => {
    color = Math.floor(Math.random() * 3)
    x = (85+ Math.floor(Math.random() * 342)) / background.width * 1920
    xDirection = (Math.random() < 0.5 ? -1 : 1) * Math.ceil(Math.random()) * 5
    yDirection = Math.ceil(Math.random()) * 5
    newDuck = new duck(color, x, xDirection, yDirection)
    ducksArr.push(newDuck)
}

birth()
birth()



const movement = () => {
    ducksArr.forEach(element => {
        if(element.x < huntArea.left || element.x > huntArea.right){
            element.xDirection *= -1
            console.log('x switch')
        }

        if(element.y > huntArea.bottom || element.y < huntArea.top){
            element.yDirection *= -1
            console.log('y switch')
        }


        element.x += element.xDirection
        element.y -= element.yDirection 
    });
}



for(let i = 0; i < 200; i++){
    movement()
    console.log(ducksArr[0].x, ducksArr[0].y,'       ',ducksArr[1].x, ducksArr[1].y)
}

