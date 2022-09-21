// Global game variables
const background = {width: 512, height: 240}
let huntArea
let round = 1
let shots = 3
let score = 0
let duckColor = ['B','V','R']
let ctx
let shotStatus = false

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

let roundNum = new Image()
roundNum.src = `individual-assets/round-num-large.png`

let boardBackground = new Image()
boardBackground.src = `individual-assets/board-background.png`

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
    let mouseX = event.clientX - ctx.canvas.offsetLeft
    let mouseY = event.clientY - ctx.canvas.offsetTop
    //alert(mouseX+" | "+mouseY)
    mouseClick = [mouseX, mouseY]
    
    shots--


    // Test Collision
    if(duckXY [0] < mouseClick[0]  && mouseClick[0] < duckXY [0] + 33 / background.width * ctx.canvas.width && duckXY [1] < mouseClick[1]  && mouseClick[1] < duckXY [0] + 39 / background.width * ctx.canvas.width){
        scoreAdd()
        shotStatus = true
    } else {
        console.log(false)
    }
    scoreBoard(ctx)
})
}

// Static background items -- sky, grass, gameboard
const sky = (ctx) => {
    displayImage(ctx, skyImg, 0, 0)
}

const grass = (ctx) => {
    displayImage(ctx, grassImg, 0, 146 / background.height * ctx.canvas.height)
}

const scoreBackground = (ctx) => {
    displayImage(ctx, boardBackground, 0, 188 / background.height * ctx.canvas.height)
}

// const duckRect = (ctx) => {
//     for(let i = 0; i < 10; i++){
//         // Test if a duck was hit
//     }
// }

const scoreBoard = (ctx) => {
    // redisplay board background
    scoreBackground(ctx)

    // Text for R# font, fill, draw text
    // If R > 9 draw bigger box under R= first because the text will stretch over
    if( round > 9) {
        ctx.fillStyle = `rgba(23, 14, 14, 1)`
    ctx.fillRect(151 / background.width * ctx.canvas.width * 0.984, 190.6 / background.height * ctx.canvas.height * 0.99, 32.5 / background.width * ctx.canvas.width * 0.984, 8.4 / background.height * ctx.canvas.height * 0.99)
    }
    arcadeText(ctx, `R=${round}`, 8, `rgba(151, 235, 30, 1)`, 149.2, 197.4, 'left')

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
// Static game animations ie same animation X position may change
const dogWalk = (ctx) => {
    //setInterval({
        displayImage(ctx, roundNum, 203 / background.width * ctx.canvas.width, 49 / background.height * ctx.canvas.height)


        arcadeText(ctx, `ROUND`, 18, "white", 257, 71, 'center')
        arcadeText(ctx, round, 18, "white", 257, 90, 'center')
        
    //},300)
    // Display Round
    //Dog walk to right

    //Dog sniff (move nose two times)

    //Dog Jump
}

const dogWDuck= (ctx, x) => {
    console.log('doggo')
} 

const duckFall = (color, x, y) => {

    

}

// Game Functions
const hunting = (ctx) => {
    //-Duck loop --> Ducks 1-10 (Loop ten times through)
    //      - Duck Flying --> blink #duck icon
    //      - onClick -->if(shotBoard>3) "fire gun" check collision & shotboard--
    //          -true --> duck fall animation & turn #duck red --> dog pop up animation holding #of duck shot --> update 
    let hunt = setInterval(function(){
        if(shotStatus){
            clearInterval(hunt)
            duckFall(ctx)
            return
        }
        sky(ctx)
        duckXY[0] += 18

        displayImage(ctx, duckBH[duckPhase], duckXY[0], duckXY[1])

        duckPhase++
        if (duckPhase > 3){
            duckPhase = 0
        }
        if(duckXY[0] > 1000) {
            duckXY[0] = 0
        }

    }, 500)
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

// When window loads
window.addEventListener('load', function(event) {
    //CTX area
    ctx = document.getElementById('canvas').getContext('2d')
    mousePosition(ctx)
    click(ctx)
    
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerWidth/2.14
    ctx.imageSmoothingEnabled = false
    
    //ctx.canvas.addEventListener('click', clickHit())
    // Define hunt area once ctx is created
    huntArea = {left: 0, top: 0, right: Math.floor(477 / background.width * ctx.canvas.width), bottom: Math.floor(158 / background.height * ctx.canvas.height)}

    //Game functions
    displayImage(ctx, duckVD[0], 240, 100)
    grass(ctx)
    scoreBoard(ctx)
    dogWalk(ctx)
    hunting(ctx)
    
})

//ctx.canvas.addEventListener('click', clickHit())


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

// Duck in Motion
// let duck = setInterval(function(){
//     base_image1 = new Image()
//     base_image1.src = duckFlight[duckPhase]
//     sky(ctx)
//     ctx.drawImage(base_image1, 200, 100, base_image1.width / background.width * ctx.canvas.width, base_image1.height / background.height * ctx.canvas.height)
//     duckPhase++
//     if (duckPhase > 3){duckPhase = 0}
// }, 500);


// Display Board
// const displayBoard = (ctx, img) => {
//     base_image = new Image()
//     base_image.src = img
//     base_image.onload = function(){
//         ctx.drawImage(base_image, 0, 0, base_image.width, base_image.height, 148 / background.width * ctx.canvas.width, 203 / background.height * ctx.canvas.height, base_image.width / background.width * ctx.canvas.width, base_image.height / background.height * ctx.canvas.height)
//     }
// }
// displayBoard(ctx, img)


// Display Image
// const displayImage = (ctx, img, x, y) => {
//     console.log(area)
//     pic = new Image()
//     pic.src = img.location
//     pic.onload = function(){
//         ctx.drawImage(pic, x, y, pic.width / background.width * ctx.canvas.width, pic.height / background.height * ctx.canvas.height)
//     }
// }
// displayImage(ctx, duckShot, 100, 100)

// Display Sky --- in order to draw over the old sky
// const sky = (ctx) => {
//     skyImg = new Image()
//     skyImg.src = "individual-assets/sky.png"
//     ctx.drawImage(skyImg, 0, 0, skyImg.width / background.width * ctx.canvas.width, skyImg.height / background.height * ctx.canvas.height)
// }