let shots = 3


function mousePosition(ctx){
    ctx.canvas.addEventListener('mousemove', function(event){
        let mouseX = event.clientX - ctx.canvas.offsetLeft;
        let mouseY = event.clientY - ctx.canvas.offsetTop;
        let status = document.getElementById('status');
        status.innerHTML = mouseX+" | "+mouseY;
    });
    ctx.canvas.addEventListener('click', function(event){
        let mouseX = event.clientX - ctx.canvas.offsetLeft;
        let mouseY = event.clientY - ctx.canvas.offsetTop;
        alert(mouseX+" | "+mouseY);
    });
}
window.addEventListener('load', function(event) {
    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerWidth/2.14;
    ctx.imageSmoothingEnabled = false;
    mousePosition(ctx);


    base_image = new Image();
    base_image.src = `individual-assets/shot-${shots}.png`;
    base_image.onload = function(){
        ctx.drawImage(base_image, 0, 0, 26, 17, 148 / 512 * ctx.canvas.width, 203 / 240 * ctx.canvas.height, 26 / 512 * ctx.canvas.width, 17 / 240 * ctx.canvas.height);
    }
});
