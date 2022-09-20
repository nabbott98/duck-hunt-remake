// Global Variable and input
const background = {width: 512, height: 240}
let shots = 3
let img = `individual-assets/shot-${shots}.png`
let duckFlight = ["individual-assets/duck-flight-b-h-1.png", "individual-assets/duck-flight-b-h-2.png", "individual-assets/duck-flight-b-h-3.png", "individual-assets/duck-flight-b-h-2.png"]
let duckPhase = 0
const duckShot = {name: 'duck-shot-b', location: `individual-assets/duck-flight-v-h-2.png`, posX: 100, posY: 200, adjX: 0, adjY: 0}
let huntArea

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

const displayBoard = (ctx, img) => {
    base_image = new Image()
    base_image.src = img
    base_image.onload = function(){
        ctx.drawImage(base_image, 0, 0, base_image.width, base_image.height, 148 / background.width * ctx.canvas.width, 203 / background.height * ctx.canvas.height, base_image.width / background.width * ctx.canvas.width, base_image.height / background.height * ctx.canvas.height)
    }
}

const displayImage = (ctx, img, area) => {
    console.log(area)
    pic = new Image()
    pic.src = img.location
    pic.onload = function(){
        ctx.drawImage(pic, img.posX,img.posY, pic.width / background.width * ctx.canvas.width, pic.height / background.height * ctx.canvas.height)
    }
}

const sky = (ctx) => {
    skyImg = new Image()
    skyImg.src = "individual-assets/sky.png"
    ctx.drawImage(skyImg, 0, 0, skyImg.width / background.width * ctx.canvas.width, skyImg.height / background.height * ctx.canvas.height)
}

window.addEventListener('load', function(event) {
    let ctx = document.getElementById('canvas').getContext('2d')
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerWidth/2.14
    ctx.imageSmoothingEnabled = false
    let huntArea = {left: 0, top: 0, right: Math.floor(477 / background.width * ctx.canvas.width), bottom: Math.floor(158 / background.height * ctx.canvas.height)}

    mousePosition(ctx)
    displayBoard(ctx, img)
    displayImage(ctx, duckShot, huntArea)
  
    let duck = setInterval(function(){
        base_image1 = new Image()
        base_image1.src = duckFlight[duckPhase]
        sky(ctx)
        ctx.drawImage(base_image1, 200, 100, base_image1.width / background.width * ctx.canvas.width, base_image1.height / background.height * ctx.canvas.height)
        duckPhase++
        if (duckPhase > 3){duckPhase = 0}
    }, 500);



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
