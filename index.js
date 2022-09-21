// Image loading
// Duck color [0: brown, 1: violet, 2: red]

// Import flying ducks -- I had to do most of the importing by hardcoding :(
    // I tried to use a 3d array to store all the ducks but I could nto get it to work
// Array convention [color][flight direction][phase]


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

// Import sky and grass
let skyImg = new Image()
skyImg.src = `individual-assets/sky.png`

let grassImg = new Image()
grassImg.src = `individual-assets/grass.png`

// Global game variables
const background = {width: 512, height: 240}
let huntArea
let round = 1
let ducksPerRound = 6
let shots = 3
let score = 0
let duckColor = ['B','V','R']


// Movement Variables
let duckPhase = 0
let duckXY = [0 ,0]

// Functions
// Mouse position inside the canvas system
function mousePosition(ctx){
    ctx.canvas.addEventListener('mousemove', function(event){
        let mouseX = event.clientX - ctx.canvas.offsetLeft
        let mouseY = event.clientY - ctx.canvas.offsetTop
        let status = document.getElementById('status')
        status.innerHTML = mouseX+" | "+mouseY
    });
    ctx.canvas.addEventListener('click', function(event){
        let mouseX = event.clientX - ctx.canvas.offsetLeft
        let mouseY = event.clientY - ctx.canvas.offsetTop
        alert(mouseX+" | "+mouseY)
    });
}
// Static background items -- sky, grass, gameboard
const sky = (ctx) => {
    displayImage(ctx, skyImg, 0, 0)
}

const grass = (ctx) => {
    displayImage(ctx, grassImg, 0, 146 / background.height * ctx.canvas.height)
}

const scoreBoard = () => {

}

// Static game animations ie same animation X position may change
const dogWalk = () => {
    //Dog walk to right

    //Dog sniff (move nose two times)

    //Dog Jump

}


const dogSingleDuck = () => {

} 

const dogDoubleDuck = () => {

}
const dogNoDuck = () => {

}

const duckFall = (color, x, y) => {
    //let imgArr
    //if(color = B){imgArr = duckBF}else if(color === V){imgArr = duckVF} else {imgArr = duckRF}
    // 

}

// Game Functions


const newRound = () => {

}

const hunting = () => {

}

const displayImage = (ctx, img, x, y) => {
        ctx.drawImage(img, x, y, img.width / background.width * ctx.canvas.width, img.height / background.height * ctx.canvas.height)
}



// When window loads
window.addEventListener('load', function(event) {
    //CTX area
    let ctx = document.getElementById('canvas').getContext('2d')
    mousePosition(ctx)
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerWidth/2.14
    ctx.imageSmoothingEnabled = false

    // Define hunt area once ctx is created
    let huntArea = {left: 0, top: 0, right: Math.floor(477 / background.width * ctx.canvas.width), bottom: Math.floor(158 / background.height * ctx.canvas.height)}


    displayImage(ctx, duckVD[0], 100, 322)
    grass(ctx)

});


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