// Global Variable and input
const background = {width: 512, height: 240}
let shots = 3
let img = `individual-assets/shot-${shots}.png`
let duckFlight = ["individual-assets/duck-flight-b-h-1.png", "individual-assets/duck-flight-b-h-2.png", "individual-assets/duck-flight-b-h-3.png", "individual-assets/duck-flight-b-h-2.png"]
let duckPhase = 0
const duckShot = {name: 'duck-shot-b', location: `individual-assets/duck-shot-b.png`, posX: 100, posY: 200, adjX: 0, adjY: 0}

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

const displayImage = (ctx, img) => {
    board = new Image()
    board.src = img.location
    console.log(board)
    base_image.onload = function(){
        ctx.drawImage(board, 100,100,100,100)
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
    mousePosition(ctx)
    displayBoard(ctx, img)
  
    let duck = setInterval(function(){
        base_image1 = new Image()
        base_image1.src = duckFlight[duckPhase]
        sky(ctx)
        ctx.drawImage(base_image1, 200, 100, base_image1.width / background.width * ctx.canvas.width, base_image1.height / background.height * ctx.canvas.height)
        duckPhase++
        if (duckPhase > 3){duckPhase = 0}
    }, 500);


    displayImage(ctx, duckShot)
});
