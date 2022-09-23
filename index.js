// Global game variables
const background = {width: 512, height: 240}
let huntArea
let round = 1
let shots = 3
let score = 0
let duckColor = ['B','V','R']
let ctx
let shotStatus = false
let ducksShot = 0
let huntActive = false

// Game loop variables
let time = 200
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

let test = 0

// Movement Variables
let duckPhase = 0
let duckXY = [0 , 50]
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
let duckBH = []
let duckVH = []
let duckRH = []

let duckBD = []
let duckVD = []
let duckRD = []

let duckBF = []
let duckVF = []
let duckRF = []

for(let i = 0; i < 4; i++){
    duckBH[i] = new Image()
    duckBH[i].src = `individual-assets/duck-flight-b-h-${i+1}.png`

    duckVH[i] = new Image()
    duckVH[i].src = `individual-assets/duck-flight-v-h-${i+1}.png`

    duckRH[i] = new Image()
    duckRH[i].src = `individual-assets/duck-flight-r-h-${i+1}.png`

    duckBD[i] = new Image()
    duckBD[i].src = `individual-assets/duck-flight-b-d-${i+1}.png`

    duckVD[i] = new Image()
    duckVD[i].src = `individual-assets/duck-flight-v-d-${i+1}.png`

    duckRD[i] = new Image()
    duckRD[i].src = `individual-assets/duck-flight-r-d-${i+1}.png`

    duckBF[i] = new Image()
    duckBF[i].src = `individual-assets/duck-flight-b-f-${i+1}.png`

    duckVF[i] = new Image()
    duckVF[i].src = `individual-assets/duck-flight-v-f-${i+1}.png`

    duckRF[i] = new Image()
    duckRF[i].src = `individual-assets/duck-flight-r-f-${i+1}.png`
}

// Import Shot Ducks
let duckBS
let duckVS
let duckRS

duckBS = new Image()
duckBS.src = `individual-assets/duck-flight-b-s-1.png`

duckVS = new Image()
duckVS.src = `individual-assets/duck-flight-v-s-1.png`

duckRS = new Image()
duckRS.src = `individual-assets/duck-flight-r-s-1.png`

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
for (let i = 0; i < 7; i++){
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
// Mouse position inside the canvas system
const mousePosition = (ctx) =>{
    ctx.canvas.addEventListener('mousemove', function(event){
        let mouseX = event.clientX - ctx.canvas.offsetLeft
        let mouseY = event.clientY - ctx.canvas.offsetTop
        let status = document.getElementById('status')
        status.innerHTML = mouseX+" | "+mouseY
        mouseClick = [mouseX, mouseY]
    })
}

const click = (ctx) => {
    ctx.canvas.addEventListener('click', function(event){
    if (huntActive && shots > 0){
        let mouseX = event.clientX - ctx.canvas.offsetLeft
        let mouseY = event.clientY - ctx.canvas.offsetTop
        //alert(mouseX+" | "+mouseY)
        mouseClick = [mouseX, mouseY]
        shots--

        // Test Collision
        if(duckXY [0] < mouseClick[0]  && mouseClick[0] < duckXY [0] + 33 / background.width * ctx.canvas.width && duckXY [1] < mouseClick[1]  && mouseClick[1] < duckXY [0] + 39 / background.width * ctx.canvas.width){
            scoreAdd()
            shotStatus = true
            ducksShot += 1
        } 
        scoreBoard(ctx)
    }
})
}

// Static background items -- sky, grass, gameboard
const sky = (ctx) => {
    displayImage(ctx, skyImg, 0, 0)
}

const grass = (ctx) => {
    displayImage(ctx, grassImg, 0, 146 / background.height * ctx.canvas.height)
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


// const duckRect = (ctx) => {
//     for(let i = 0; i < 10; i++){
//         // Test if a duck was hit
//     }
// }

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
    ctx.fillRect(219 / background.width * ctx.canvas.width * 0.984, 208 / background.height * ctx.canvas.height * 0.99, 87.2 / background.width * ctx.canvas.width * 0.984, 7 / background.height * ctx.canvas.height * 0.99)

    // Blue bars indicating how many ducks/round you must hit to advance rounds 
    ctx.fillStyle = `rgba(54, 176, 255, 1)`
    ctx.fillRect(219 / background.width * ctx.canvas.width * 0.984, 215.45 / background.height * ctx.canvas.height * 0.99, (87.2 * ducksPerRound[round] / 10) / background.width * ctx.canvas.width * 0.984, 7 / background.height * ctx.canvas.height * 0.99)

    // Duck symbols indiv
    // duckRect(ctx)

    // Display shots board
    displayImage(ctx, shotBoard[shots], 148 / background.width * ctx.canvas.width, 204 / background.height * ctx.canvas.height)

    // Display duck board
    displayImage(ctx, duckBoard, 189 / background.width * ctx.canvas.width, 203 / background.height * ctx.canvas.height)
}

const scoreAdd = () => {
    score += 1000
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
// 8 - 
// 9 - 

const hunting = (ctx) => {
    // 0 Dog walk variables -------------------------------------
    if(gameStatus === 0){
        dogPhase = 1
        dogWalkX = 0
        sniff = false
        timer = 0
        dogAlert = false

        // Display round banner
        scoreBoard(ctx)
        roundDisplay(ctx)
        displayImage(ctx, roundNum, 203 / background.width * ctx.canvas.width, 49 / background.height * ctx.canvas.height)
        arcadeText(ctx, `ROUND`, 18, "white", 257, 71, 'center')
        arcadeText(ctx, round, 18, "white", 257, 90, 'center')
        gameStatus = 1
        console.log(`Game status: `, gameStatus)
    }

    // 1 Round start animation, here comes doggo!----------------
    if(gameStatus === 1){
        if(dogPhase > 4){dogPhase = 1}

        // if(sniff){
        //     clearInterval(walk)
        //     return
        // }

        if( dogWalkX < 180 && !dogAlert) {
            grassSky(ctx)
            displayImage(ctx, dogWalking[dogPhase], dogWalkX / background.width * ctx.canvas.width, dogWalkY / background.height * ctx.canvas.height)
            dogPhase++
            dogWalkX += 5
        } 

        if(dogWalkX > 179 ){
            grassSky(ctx)
            if(timer === 0){
                dogPhase = 0
                console.log('hit')
            }
            if(timer > 6){
                displayImage(ctx, dogWalking[5], 180 / background.width * ctx.canvas.width, (dogWalkY - 3) / background.height * ctx.canvas.height)
                dogAlert = true
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
        if(dogAlert && timer > 10){
            gameStatus = 2
            console.log(`Game status: `, gameStatus)
            grass(ctx)
        }

    }

    // 2 Setup variables for duck hunting -----------------------
    if(gameStatus === 2){
        huntActive = true
        gameStatus = 3
        console.log(`Game status: `, gameStatus)
        ducksReleased++
        timer = 0
        duckXY = [0,0]
    }

    // 3 DUCK HUNTING BEGINS!-----------------------------------
    if(gameStatus === 3 ){
        // Break Conditions
        if(shotStatus || timer > 10000){
            huntActive = false
            gameStatus = 4
            shotStatus = false
            console.log(`Game status: `, gameStatus)
            if(timer > 10000){
                gameStatus = 6
                console.log(`Game status: `, gameStatus)
            }
        }
        // Change Canvas
        sky(ctx)
        duckXY[0] += 25
        // create movement function
        displayImage(ctx, duckBH[duckPhase], duckXY[0], duckXY[1])
        // This should probably be in the duck render function
        duckPhase++
        if (duckPhase > 3){
            duckPhase = 0
        }
        if(duckXY[0] > 1000) {
            duckXY[0] = 0
        }
        timer += time
    }

    // 4 DUCK FALLING VARS ----------------------------------------
    if(gameStatus === 4){
        timer = 0
        fallPhase = 0
        gameStatus = 5
        console.log(`Game status: `, gameStatus)
    }

    // 5 DUCK FALLING SEQUENCE ------------------------------------
    if(gameStatus === 5){
        if(duckXY[1] > 143 / background.height * ctx.canvas.height){
            scoreBackgroundHollow(ctx)
            roundDisplay(ctx)

            gameStatus = 6
            console.log(`Game status: `, gameStatus)
        }

        if(timer < 4) {
            sky(ctx)
            displayImage(ctx, duckBS, duckXY[0], duckXY[1])
        } else { 
            if(fallPhase > 3) {
                fallPhase = 0
            }
            sky(ctx)
            displayImage(ctx, duckBF[fallPhase], duckXY[0], duckXY[1])
            grass(ctx)
            duckXY[1] += 40
            fallPhase += 1
        }
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
        if(duckXY[0] > 95 / background.width * ctx.canvas.width && duckXY[0] <= 145 / background.width * ctx.canvas.width) {
            duckXY[0] = 94 / background.width * ctx.canvas.width
        } else if(duckXY[0] > 145 / background.width * ctx.canvas.width && duckXY[0] < 195 / background.width * ctx.canvas.width){
            duckXY[0] = 195 / background.width * ctx.canvas.width
        }

        if(duckHold === 1){
            duckXY[0] = 256 / background.width * ctx.canvas.width
        }

        gameStatus = 7
        console.log(`Game status: `, gameStatus)
    }
    // 7 Dog w duck animation ------------------------------------
    if(gameStatus === 7){
        if (downStatus && dogY > 153){
            gameStatus = 10
            console.log(`Game status: `, gameStatus)
        }

        sky(ctx)
        displayImage(ctx, dogDuck[duckHold], duckXY[0], dogY / background.height * ctx.canvas.height)
        scoreBackgroundHollow(ctx)
        grass(ctx)

        if(duckHold < 2){
            flyAway(ctx)
            // displayImage(ctx, roundNum, 203 / background.width * ctx.canvas.width, 49 / background.height * ctx.canvas.height)
            // arcadeText(ctx, `FLY`, 18, "white", 257, 71, 'center')
            // arcadeText(ctx, `AWAY`, 18, "white", 257, 90, 'center')
        }

        if(dogY < 114){
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

    // 10 - Test to see how many ducks have been released, if 10 new round if not gamestatus 2
    if(gameStatus === 10){
        console.log(ducksReleased)
        reset()
        if (ducksReleased === 10){
            if(ducksShot >= ducksPerRound[round]){
                ducksReleased = 0
                gameStatus = 0
                round++
            } else {
                clearInterval(gameLoop)
                displayImage(ctx, roundNum, 203 / background.width * ctx.canvas.width, 49 / background.height * ctx.canvas.height)
                arcadeText(ctx, `GAME`, 18, "white", 257, 71, 'center')
                arcadeText(ctx, `OVER`, 18, "white", 257, 90, 'center')
            }
            
        }else if(ducksReleased < 10){
            gameStatus = 2
            console.log(`Game status: `, gameStatus)
        } 
    }
    //test++
    //console.log(test)
}

const reset = () => {
    shots = 3
    shotStatus = false
    ducksShot = 0
    duckPhase = 0
    duckXY = [0, 50]
    mouseClick = []
    console.log('ducks shot: ',ducksShot)
    console.log('reset')
    scoreBoard(ctx)
}

// Display fucntions --> Image, text
const displayImage = (ctx, img, x, y) => {
        ctx.drawImage(img, x, y, img.width / background.width * ctx.canvas.width, img.height / background.height * ctx.canvas.height)
}

// Custom text font from google fonts 
const arcadeText = (ctx, text, size, color, x, y, align) => {
    const arcadeFont = new FontFace('pixelFont', 'url(PressStart2P-Regular.ttf)')
    arcadeFont.load().then(function(font){
        document.fonts.add(arcadeFont)
        ctx.fillStyle = color
        ctx.textAlign = align
        ctx.font = `${size / background.height * ctx.canvas.height}px pixelFont`
        ctx.fillText(text, x / background.width * ctx.canvas.width, y / background.height * ctx.canvas.height)
    })
}

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
    huntArea = {left: 0, top: 0, right: Math.floor(477 / background.width * ctx.canvas.width), bottom: Math.floor(158 / background.height * ctx.canvas.height)}  
    scoreBoard(ctx)
    //displayImage(ctx, duckVD[0], 240, 100)
})



const gameLoop = setInterval(hunting, time, ctx)












// before we do this make ducks a class nd refactor hunting to create a new duck object

// ?
// Make main main game loop to manage all my game animations and timings together
// ?

// This looks like: a setInterval function that calls a very long game loop function every 500ms
// Our main game loop function starts by clearing the entire board and then starts rendering all of the basic game assets 
// Runs our game logic move functions and
// we can use arrays to make rendering this large collection of assets easier/ more dry with iteration methods
// for example
// we can have a ducks array tht represents all of the active ducks which we will render for every game loop at the locked in time
// when a new duck starts to be hunted we push it into the array and when duck is no longer active ( shot or time ran out) we remove it from the array
// 

// implementing this game loop with standardize the time across all of the game logic, but require removing redundant code from our many render functions


  
 


// Game Order:
// Main Game Loop
//  - Beginning Round Animation
//      - Dog Walk --> Dog Jump over grass
//      - Round box in middle showing current round
//  -Duck loop --> Ducks 1-10 (Loop ten times through)
//      - Duck Flying --> blink #duck icon
//      - onClick -->if(shotBoard>3) "fire gun" check collision & shotboard--
//          -true --> duck fall animation & turn #duck red --> dog pop up animation holding #of duck shot --> update score & reset shot board
//          -false --> shotboard -- 
//      if time > limit 
//          - dog with no duck animaiton & keep #duck white - reset shot #duck++
//  - Reset
//      
//
//


/////////////////////////////////////////////////////////////////////////// 
// <-----    Hold Area    ----->
