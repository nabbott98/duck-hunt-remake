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
    base_image.src = 'individual-assets/shot-3.png';
    base_image.onload = function(){
        ctx.drawImage(base_image, 0, 0, 26, 17, 283, 389, 50, 32.7);
    }
});
