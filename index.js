// Global game variables
const background = {width: 512, height: 240}
let huntArea
let round = 1
let shots = 3
let score = 0
let duckColor = null
let ctx
let shotStatus = false
let ducksShot = 0
let huntActive = false
let ducksArr = []

// Game loop variables
let time = 100
let timer = 0
let ducksReleased = 9
let gameStatus = 0
let dogPhase = 1
let dogWalkX = 0
let dogWalkY = 145
let sniff = false
let dogAlert = false
let fallPhase = 0
let downStatus = false
let duckHold = ducksShot + 1
let dogY = 153
let increment = -1
let perfectTimer = 0
let test = 0
let red = false
let dogJump = false
let inPlay = false


// Movement Variables
let duckPhase = 0

let mouseClick = []

// Round dependant variables
let ducksPerRound = [null, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10]

colorScore = [
    [null,500,500,500,500,500,800,800,800,800,800,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
    [null,1000,1000,1000,1000,1000,1600,1600,1600,1600,1600,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000],
    [null,1500,1500,1500,1500,1500,2400,2400,2400,2400,2400,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000]
]

perfectRound = [null, 10000,  10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 15000, 15000, 15000, 15000, 15000, 20000, 20000, 20000, 20000, 20000, 30000]

let hitDuck = [false, false, false, false, false, false, false, false, false, false,]

// Image loading
// Duck color [0: brown, 1: violet, 2: red]

// Import flying ducks -- I had to do most of the importing by hardcoding :(
    // I tried to use a 3d array to store all the ducks but I could nto get it to work
//Import Flying Ducks and falling ducks

let duckBR = []
let duckVR = []
let duckRR = []

let duckBL = []
let duckVL = []
let duckRL = []

let duckBDR = []
let duckVDR = []
let duckRDR = []

let duckBDL = []
let duckVDL = []
let duckRDL = []

let duckBF = []
let duckVF = []
let duckRF = []

//Import flying ducks

for(let i = 0; i < 4; i++){
    duckBR[i] = new Image()
    duckBR[i].src = `individual-assets/duck-flight-b-h-${i+1}.png`

    duckVR[i] = new Image()
    duckVR[i].src = `individual-assets/duck-flight-v-h-${i+1}.png`

    duckRR[i] = new Image()
    duckRR[i].src = `individual-assets/duck-flight-r-h-${i+1}.png`

    duckBDR[i] = new Image()
    duckBDR[i].src = `individual-assets/duck-flight-b-d-${i+1}.png`

    duckVDR[i] = new Image()
    duckVDR[i].src = `individual-assets/duck-flight-v-d-${i+1}.png`

    duckRDR[i] = new Image()
    duckRDR[i].src = `individual-assets/duck-flight-r-d-${i+1}.png`

    duckBL[i] = new Image()
    duckBL[i].src = `individual-assets/flip/duck-flight-b-h-${i+1}.png`

    duckVL[i] = new Image()
    duckVL[i].src = `individual-assets/flip/duck-flight-v-h-${i+1}.png`

    duckRL[i] = new Image()
    duckRL[i].src = `individual-assets/flip/duck-flight-r-h-${i+1}.png`

    duckBDL[i] = new Image()
    duckBDL[i].src = `individual-assets/flip/duck-flight-b-d-${i+1}.png`

    duckVDL[i] = new Image()
    duckVDL[i].src = `individual-assets/flip/duck-flight-v-d-${i+1}.png`

    duckRDL[i] = new Image()
    duckRDL[i].src = `individual-assets/flip/duck-flight-r-d-${i+1}.png`

    duckBF[i] = new Image()
    duckBF[i].src = `individual-assets/duck-flight-b-f-${i+1}.png`

    duckVF[i] = new Image()
    duckVF[i].src = `individual-assets/duck-flight-v-f-${i+1}.png`

    duckRF[i] = new Image()
    duckRF[i].src = `individual-assets/duck-flight-r-f-${i+1}.png`
}

// Import shot ducks
let duckBS = []
let duckVS = []
let duckRS = []

duckBS[0] = new Image()
duckBS[0].src = `individual-assets/duck-flight-b-s-1.png`

duckVS[0] = new Image()
duckVS[0].src = `individual-assets/duck-flight-v-s-1.png`

duckRS[0] = new Image()
duckRS[0].src = `individual-assets/duck-flight-r-s-1.png`

// Add all duck types to respective color
const brownDuck = [duckBL, duckBR, duckBDL, duckBDR, duckBS, duckBF]
const violetDuck = [duckVL, duckVR, duckVDL, duckVDR, duckVS, duckVF]
const redDuck = [duckRL, duckRR, duckRDL, duckRDR, duckRS, duckRF]

// Add all duck color arrays to big duck array
const duckImgs = [brownDuck, violetDuck, redDuck]


// Import dogs with duck and shot board assets
let dogDuck = []
let shotBoard = []
for (let i = 0; i < 4; i++){
    dogDuck[i] = new Image()
    dogDuck[i].src = `individual-assets/dog-duck-${i}.png`
    shotBoard[i] = new Image()
    shotBoard[i].src = `individual-assets/shot-${i}.png`
}

let dogWalking = []
for (let i = 0; i < 8; i++){
    dogWalking[i] = new Image()
    dogWalking[i].src = `individual-assets/dog-walk-${i+1}.png`
}

// Import duck board
let duckBoard = new Image()
duckBoard.src = `individual-assets/duck-board.png`

// Import sky, grass, round-num board
let skyImg = new Image()
skyImg.src = `individual-assets/sky.png`

let grassImg = new Image()
grassImg.src = `individual-assets/grass.png`

let grassSkyImg = new Image()
grassSkyImg.src = `individual-assets/grass-sky.png`

let roundNum = new Image()
roundNum.src = `individual-assets/round-num-large.png`

let boardBackground = new Image()
boardBackground.src = `individual-assets/board-background.png`

let boardBackgroundHollow = new Image()
boardBackgroundHollow.src = `individual-assets/board-background-hollow.png`

let flyAwayImg = new Image()
flyAwayImg.src = `individual-assets/fly-away.png`

// Functions


class duck {
    constructor(color, x, xDirection, yDirection){
        this.alive = true
        this.color = color
        this.x = x
        this.y = (143 - round + 1) / background.height * ctx.canvas.height
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
    x = (85+ Math.floor(Math.random() * 342)) / background.width * ctx.canvas.width
    xDirection = ((Math.random() < 0.5 ? -1 : 1) * (round + Math.ceil(Math.random() * 5) + 3)) / background.width * ctx.canvas.width
    yDirection = (round + Math.ceil(Math.random() * 5) + 3) / background.height * ctx.canvas.height
    newDuck = new duck(color, x, xDirection, yDirection)
    ducksArr.push(newDuck)
}

const movement = () => {
    ducksArr.forEach(element => {
        if(element.x < huntArea.left || element.x > huntArea.right){
            element.xDirection *= -1
        }

        if(element.y > huntArea.bottom || element.y < huntArea.top){
            element.yDirection *= -1
        }
        element.phase++
        if (element.phase > 3){
            element.phase = 0
        }

        console.log(element.x, element.y)

        element.x += element.xDirection
        element.y -= element.yDirection 
    });
}

const duckImg = () => {
    ducksArr.forEach(element => {
        if(Math.abs(element.yDirection) >= Math.abs(element.xDirection)){
            direction = 2
        } else {
            direction = 0
        }

        if (element.xDirection > 0){
            direction ++
        }
        
        element.img = duckImgs[color][direction][element.phase]
    })
}

// Mouse position inside the canvas system
const mousePosition = (ctx) =>{
    ctx.canvas.addEventListener('mousemove', function(event){
        let mouseX = event.clientX - ctx.canvas.offsetLeft
        let mouseY = event.clientY - ctx.canvas.offsetTop
        //let status = document.getElementById('status')
        //status.innerHTML = mouseX+" | "+mouseY
        mouseClick = [mouseX, mouseY]
    })
}

const click = (ctx) => {
    ctx.canvas.addEventListener('click', function(event){
    if (huntActive && shots > 0){
        document.getElementById("canvas").style.borderColor = "red"
        let mouseX = event.clientX - ctx.canvas.offsetLeft
        let mouseY = event.clientY - ctx.canvas.offsetTop
        //alert(mouseX+" | "+mouseY)
        mouseClick = [mouseX, mouseY]
        shots--

        // Test Collision
        ducksArr.forEach((element, i) => {
            if(element.x < mouseClick[0]  && mouseClick[0] < element.x + 33 / background.width * ctx.canvas.width && element.y < mouseClick[1]  && mouseClick[1] < element.y + 39 / background.width * ctx.canvas.width){
                scoreAdd()
                element.alive = false
                shotStatus = true
                ducksShot += 1
                hitDuck[ducksReleased - 1 - i] = true
            } 
        }) 
            scoreBoard(ctx)
    }
})
}

// Static background items -- sky, grass, gameboard
const sky = (ctx) => {
    displayImage(ctx, skyImg, 0, 0)
}

const grass = (ctx) => {
    displayImage(ctx, grassImg, 0, 147 / background.height * ctx.canvas.height)
}

const grassSky = (ctx) => {
    displayImage(ctx, grassSkyImg, 0, 134 / background.height * ctx.canvas.height)
}

const scoreBackground = (ctx) => {
    displayImage(ctx, boardBackground, 0, 166 / background.height * ctx.canvas.height)
}

const scoreBackgroundHollow = (ctx) => {
    displayImage(ctx, boardBackgroundHollow, 0, 166 / background.height * ctx.canvas.height)
}

const flyAway = (ctx) => {
    displayImage(ctx, flyAwayImg, 203 / background.width * ctx.canvas.width, 49 / background.height * ctx.canvas.height)
}

const roundDisplay = (ctx) => {
    if( round > 9) {
        ctx.fillStyle = `rgba(23, 14, 14, 1)`
    ctx.fillRect(151 / background.width * ctx.canvas.width * 0.984, 190.6 / background.height * ctx.canvas.height * 0.99, 32.5 / background.width * ctx.canvas.width * 0.984, 8.4 / background.height * ctx.canvas.height * 0.99)
    }
    arcadeText(ctx, `R=${round}`, 8, `rgba(151, 235, 30, 1)`, 149.2, 197.4, 'left')
}

const scoreBoard = (ctx) => {
    // redisplay board background
    scoreBackground(ctx)
    roundDisplay(ctx)
    
    // To add if condition to draw brown box behind if R>9
    arcadeText(ctx, `${score.toString().padStart(6, '0')}`, 8, "white", 365, 213, 'right')
    arcadeText(ctx, `SCORE`, 8, "white", 365, 221, 'right')

    // Duck Icons indicating which duck/ducks within the round you are at
    ctx.fillStyle = `white`
    ctx.fillRect(225.5 / background.width * ctx.canvas.width * 0.984, 208 / background.height * ctx.canvas.height * 0.99, 80.5 / background.width * ctx.canvas.width * 0.984, 7 / background.height * ctx.canvas.height * 0.99)

    // Blue bars indicating how many ducks/round you must hit to advance rounds 
    ctx.fillStyle = `rgba(54, 176, 255, 1)`
    ctx.fillRect(225.5 / background.width * ctx.canvas.width * 0.984, 215.45 / background.height * ctx.canvas.height * 0.99, (80.7 * ducksPerRound[round] / 10) / background.width * ctx.canvas.width * 0.984, 7 / background.height * ctx.canvas.height * 0.99)

    // Duck symbols indiv
    hitDuck.forEach((element, i) => {
        if(element){
            ctx.fillStyle = `red`
            ctx.fillRect((225.5 + i * 8.05) / background.width * ctx.canvas.width * 0.984, 208 / background.height * ctx.canvas.height * 0.99, 8.05 / background.width * ctx.canvas.width * 0.984, 7.2 / background.height * ctx.canvas.height * 0.99)
        }
    })

    // Display shots board
    displayImage(ctx, shotBoard[shots], 148 / background.width * ctx.canvas.width, 204 / background.height * ctx.canvas.height)

    // Display duck board
    displayImage(ctx, duckBoard, 189 / background.width * ctx.canvas.width, 203 / background.height * ctx.canvas.height)
}

const scoreAdd = () => {
    ducksArr.forEach(element => {
        score += colorScore[element.color][round] // colorScore[ducksArr[#].color][round]
    })
}

// --------------------------------Game Function--------------------------------
// State #
// 0 - Round entrance Vars
// 1 - Round start sequence
// 2 - Hunting vars
// 3 - Hunting sequence
// 4 - Duck fall vars
// 5 - Duck fall seq
// 6 - Dog w/ Duck vars
// 7 - Dog w/ Duck sequence
// 8 - Perfect Score setup
// 9 - Flash duck Icons
// 10 - Round end reset

const hunting = (ctx) => {
    // 0 Dog walk variables -------------------------------------
    if(gameStatus === 0){
        dogPhase = 1
        dogWalkX = 0
        sniff = false
        timer = 0
        dogAlert = false
        dogJump = false

        // Display round banner
        sky(ctx)
        scoreBoard(ctx)
        roundDisplay(ctx)
        displayImage(ctx, roundNum, 203 / background.width * ctx.canvas.width, 49 / background.height * ctx.canvas.height)
        arcadeText(ctx, `ROUND`, 18, "white", 257, 71, 'center')
        arcadeText(ctx, round, 18, "white", 257, 90, 'center')
        gameStatus = 1
    }

    // 1 Round start animation, here comes doggo!----------------
    if(gameStatus === 1){
        if(dogPhase > 4){
            dogPhase = 1
        }

        if( dogWalkX < 180 && !dogAlert) {
            grassSky(ctx)
            displayImage(ctx, dogWalking[dogPhase], dogWalkX / background.width * ctx.canvas.width, dogWalkY / background.height * ctx.canvas.height)
            dogPhase++
            dogWalkX += 5
        } 

        if(dogWalkX > 179 ){
            grassSky(ctx)
            sky(ctx)
            if(timer === 0){
                dogPhase = 0
            }

            if(timer > 18){
                displayImage(ctx, dogWalking[7], (180 + 30 + (5 * (timer - 18))) / background.width * ctx.canvas.width, (dogWalkY - 30 + (5 * (timer - 18))) / background.height * ctx.canvas.height)
                grass(ctx)
            }else if(timer > 12){
                displayImage(ctx, dogWalking[6], (180 + (5 * (timer - 12))) / background.width * ctx.canvas.width, (dogWalkY - (5 * (timer - 12))) / background.height * ctx.canvas.height)
            } else if(timer > 6){
                displayImage(ctx, dogWalking[5], 180 / background.width * ctx.canvas.width, (dogWalkY - 3) / background.height * ctx.canvas.height)
                dogJump = true
            } else {
                displayImage(ctx, dogWalking[dogPhase], 180 / background.width * ctx.canvas.width, dogWalkY / background.height * ctx.canvas.height)
            }

            if(dogPhase === 0){
                dogPhase = 1
            } else if(dogPhase === 1){
                dogPhase = 0
            }
            timer ++
        }

        // Change this to dog jump animation - when complete ???????????????????????
        if(dogJump && timer > 24){
            //clearInterval(gameLoop)
            gameStatus = 2
            grass(ctx)
        }

    }

    // 2 Setup variables for duck hunting -----------------------
    if(gameStatus === 2){
        huntActive = true
        gameStatus = 3
        ducksReleased++
        timer = 0
        duckXY = [0,0]
        flash = true
        birth()
    }

    // 3 DUCK HUNTING BEGINS!-----------------------------------
    if(gameStatus === 3 ){
        // Break Conditions
        if(shotStatus || timer > 10000){
            huntActive = false
            gameStatus = 4
            shotStatus = false
            if(timer > 10000){
                gameStatus = 6
            }
        }
        movement(ctx)
        // Change Canvas

        sky(ctx)
        duckImg()

        if(flash) {
            ctx.fillStyle = `rgb(28,16,16)`
            flash = false
        } else {
            ctx.fillStyle = `white`
            flash = true
        }

        ducksArr.forEach((element, i) => {
            ctx.fillRect((225.5 + (ducksReleased - i - 1) * 8.05) / background.width * ctx.canvas.width * 0.984, 208 / background.height * ctx.canvas.height * 0.99, 8.05 / background.width * ctx.canvas.width * 0.984, 7.2 / background.height * ctx.canvas.height * 0.99)
            displayImage(ctx, duckBoard, 189 / background.width * ctx.canvas.width, 203 / background.height * ctx.canvas.height)
        })
        
        ducksArr.forEach(element => {
            displayImage(ctx, element.img, element.x , element.y)
        })
        grass(ctx)
        scoreBackgroundHollow(ctx)
        // create movement function
     
        // This should probably be in the duck render function

        timer += time
    }

    // 4 DUCK FALLING VARS ----------------------------------------
    if(gameStatus === 4){
        scoreBoard(ctx)
        timer = 0
        fallPhase = 0
        gameStatus = 5
    }

    // 5 DUCK FALLING SEQUENCE ------------------------------------
    if(gameStatus === 5){
        if(ducksArr[0].y > 143 / background.height * ctx.canvas.height){
            scoreBackgroundHollow(ctx)
            roundDisplay(ctx)

            gameStatus = 6
        }

        if(timer < 4) {
            sky(ctx)
            displayImage(ctx, duckImgs[ducksArr[0].color][4][0], ducksArr[0].x, ducksArr[0].y)
        } else { 
            if(fallPhase > 3) {
                fallPhase = 0
            }
            sky(ctx)
            displayImage(ctx, duckImgs[ducksArr[0].color][5][fallPhase], ducksArr[0].x, ducksArr[0].y)
            grass(ctx)
            ducksArr[0].y += 40
            fallPhase += 1
        }

        grass(ctx)
        timer++ 
    } 

    // 6 Dog W Duck Variables ------------------------------------
    if(gameStatus === 6){
        sky(ctx)
        grass(ctx)
        downStatus = false
        duckHold = ducksShot + 1
        dogY = 153
        increment = -5

        // Avoid drawing over r=# 
        if(ducksArr[0].x > 95 / background.width * ctx.canvas.width && ducksArr[0].x <= 145 / background.width * ctx.canvas.width) {
            ducksArr[0].x = 94 / background.width * ctx.canvas.width
        } else if(ducksArr[0].x > 145 / background.width * ctx.canvas.width && ducksArr[0].x < 195 / background.width * ctx.canvas.width){
            ducksArr[0].x = 195 / background.width * ctx.canvas.width
        }

        if(duckHold === 1){
            ducksArr[0].x = 256 / background.width * ctx.canvas.width
        }

        gameStatus = 7
    }
    // 7 Dog w duck animation ------------------------------------
    if(gameStatus === 7){
        if (downStatus && dogY > 153){
            gameStatus = 8
        }

        sky(ctx)
        displayImage(ctx, dogDuck[duckHold], ducksArr[0].x, dogY / background.height * ctx.canvas.height)
        scoreBackgroundHollow(ctx)
        grass(ctx)

        if(duckHold < 2){
            flyAway(ctx)
            // displayImage(ctx, roundNum, 203 / background.width * ctx.canvas.width, 49 / background.height * ctx.canvas.height)
            // arcadeText(ctx, `FLY`, 18, "white", 257, 71, 'center')
            // arcadeText(ctx, `AWAY`, 18, "white", 257, 90, 'center')
        }

        if(dogY < 120){
            downStatus = true
            increment *= (-1)
        }

        dogY += increment

        if(duckHold === 0){
            duckHold = 1
        } else if(duckHold === 1){
            duckHold = 0
        }
    }

    // 8 - Reset perfectTimer, Test if perfect round
    if(gameStatus === 8) {
        perfectTimer = 0
        if(hitDuck.filter(Boolean).length === 10){
            gameStatus = 9
            displayImage(ctx, roundNum, 203 / background.width * ctx.canvas.width, 49 / background.height * ctx.canvas.height)
            arcadeText(ctx, `PERFECT!!`, 11, "white", 257, 68, 'center')
            arcadeText(ctx, perfectRound[round], 11, "white", 257, 85, 'center')
            score += perfectRound[round]
        } else {
            gameStatus = 10
        }
    }

    // 9 - flash the duckimgs
    if(gameStatus === 9){
        if(red){
            ctx.fillStyle = `red`
            red = false
        } else {
            ctx.fillStyle = `white`
            red = true
        }
        ctx.fillRect(225.5 / background.width * ctx.canvas.width * 0.984, 208 / background.height * ctx.canvas.height * 0.99, 80.5 / background.width * ctx.canvas.width * 0.984, 7 / background.height * ctx.canvas.height * 0.99)
        displayImage(ctx, duckBoard, 189 / background.width * ctx.canvas.width, 203 / background.height * ctx.canvas.height)

        if(perfectTimer > 1000){
            gameStatus = 10
        }
        perfectTimer += time
    }

    // 10 - Test to see how many ducks have been released, if 10 new round if not gamestatus 2
    if(gameStatus === 10){
        

        if (ducksReleased === 10){
            if(hitDuck.filter(Boolean).length >= ducksPerRound[round]){
                ducksReleased = 0
                gameStatus = 0
                round++
                hitDuck = [false, false, false, false, false, false, false, false, false, false,]
                console.log('reset')
            } else {
                clearInterval(gameLoop)
                displayImage(ctx, roundNum, 203 / background.width * ctx.canvas.width, 49 / background.height * ctx.canvas.height)
                arcadeText(ctx, `GAME`, 18, "white", 257, 71, 'center')
                arcadeText(ctx, `OVER`, 18, "white", 257, 90, 'center')
                resetAll()
                setTimeout(welcomeScreen, 1500, ctx)
            }
            
        }else if(ducksReleased < 10){
            gameStatus = 2
            } 
        reset()
    }
    document.getElementById("canvas").style.borderColor = "black")
}

// Reset game variables
const reset = () => {
    shots = 3
    ducksShot = 0
    shotStatus = false
    duckPhase = 0
    duckXY = [0, 50]
    mouseClick = []
    scoreBoard(ctx)
    ducksArr.pop()
}

const resetAll = () => {
    // Reset all global game variables
    round = 1
    shots = 3
    score = 0
    duckColor = null
    ctx
    shotStatus = false
    ducksShot = 0
    huntActive = false
    ducksArr = []
    time = 100
    timer = 0
    ducksReleased = 0
    gameStatus = 0
    dogPhase = 1
    dogWalkX = 0
    dogWalkY = 145
    sniff = false
    dogAlert = false
    fallPhase = 0
    downStatus = false
    duckHold = ducksShot + 1
    dogY = 153
    increment = -1
    perfectTimer = 0
    test = 0
    red = false
    dogJump = false
    inPlay = false
}

// Display fucntions --> Image, text
const displayImage = (ctx, img, x, y) => {
        ctx.drawImage(img, x, y, img.width / background.width * ctx.canvas.width, img.height / background.height * ctx.canvas.height)
}

// Custom text font from google fonts 
const arcadeText = (ctx, text, size, color, x, y, align) => {
    const arcadeFont = new FontFace('pixelFont', 'url(other-assets/PressStart2P-Regular.ttf)')
    arcadeFont.load().then(function(font){
        document.fonts.add(arcadeFont)
        ctx.fillStyle = color
        ctx.textAlign = align
        ctx.font = `${size / background.height * ctx.canvas.height}px pixelFont`
        ctx.fillText(text, x / background.width * ctx.canvas.width, y / background.height * ctx.canvas.height)
    })
}

const welcomeScreen = (ctx) => {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    arcadeText(ctx, `DUCK HUNT REMAKE`, 18, "white", 257, 71, 'center')
    displayImage(ctx, dogDuck[3], 222.5 / background.width * ctx.canvas.width, 96 / background.height * ctx.canvas.height)
    arcadeText(ctx, `PRESS ANY KEY TO START`, 18, "white", 257, 185, 'center')
}

// Define canvas and context
ctx = document.getElementById('canvas').getContext('2d')
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerWidth/2.14
ctx.imageSmoothingEnabled = false
grass(ctx)
// When window loads
window.addEventListener('load', function(event) {
    mousePosition(ctx)
    click(ctx)
    // Define hunt area once ctx is created
    huntArea = {left: 0, top: 0, right: Math.floor(477 / background.width * ctx.canvas.width), bottom: Math.floor((144 - round + 1) / background.height * ctx.canvas.height)}  
    welcomeScreen(ctx)
})

//const gameLoop = null

document.addEventListener('keydown', (event) => {
    if(!inPlay){
        inPlay = true
        gameLoop = setInterval(hunting, time, ctx) 
    }
})