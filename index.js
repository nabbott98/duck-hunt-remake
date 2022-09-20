// Image loading
// Duck color [0: brown, 1: violet, 2: red]
let dogDuck = []
for (let i = 0; i < 4; i++){
    dogDuck[i] = new Image()
    dogDuck[i].src = `individual-assets/dog-duck-${i}.png`
}

console.log(dogDuck)

// Global game variables
const background = {width: 512, height: 240}
let huntArea
let round = 1
let ducksPerRound = 6
let shots = 3
let score = 0

// Movement Variables
let duckPhase = 0



let img = `individual-assets/shot-${shots}.png`
let duckFlight = ["individual-assets/duck-flight-b-h-1.png", "individual-assets/duck-flight-b-h-2.png", "individual-assets/duck-flight-b-h-3.png", "individual-assets/duck-flight-b-h-2.png"]
const duckShot = {name: 'duck-shot-b', location: `individual-assets/duck-flight-v-h-2.png`, posX: 100, posY: 200, adjX: 0, adjY: 0}

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

}

// Game Functions


const newRound = () => {

}

const hunting = () => {

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
// const displayImage = (ctx, img, area) => {
//     console.log(area)
//     pic = new Image()
//     pic.src = img.location
//     pic.onload = function(){
//         ctx.drawImage(pic, img.posX,img.posY, pic.width / background.width * ctx.canvas.width, pic.height / background.height * ctx.canvas.height)
//     }
// }
// displayImage(ctx, duckShot, huntArea)

// Display Sky --- in order to draw over the old sky
// const sky = (ctx) => {
//     skyImg = new Image()
//     skyImg.src = "individual-assets/sky.png"
//     ctx.drawImage(skyImg, 0, 0, skyImg.width / background.width * ctx.canvas.width, skyImg.height / background.height * ctx.canvas.height)
// }