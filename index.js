// const game = document.getElementById('canvas')

// const ctx = game.getContext('2d')

function initCanvas(){
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.canvas.addEventListener('mousemove', function(event){
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        var status = document.getElementById('status');
        status.innerHTML = mouseX+" | "+mouseY;
    });
    ctx.canvas.addEventListener('click', function(event){
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        // alert(mouseX+" | "+mouseY);
        ctx.fillStyle = "orange";
        ctx.fillRect(mouseX-15, mouseY-15, 30, 30);
    });
}
window.addEventListener('load', function(event) {
    initCanvas();
});