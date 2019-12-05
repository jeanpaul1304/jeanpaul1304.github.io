const canvas = document.querySelector('#animation')
let start = null
canvas.width = window.innerWidth + 200
canvas.height = window.innerHeight + 200

const context = canvas.getContext('2d')
let counter = 0
function animate () {
    let x = Math.random() * (window.innerWidth + 400)
    let y = Math.random() * (window.innerHeight + 400)
    context.beginPath()
    context.arc(x, y, 30, 0, Math.PI * 3, false)
    context.strokeStyle = 'blue'

    var ctx = canvas.getContext('2d');
    let a = Math.random() * window.innerWidth
    let b = Math.random() * window.innerHeight
    ctx.beginPath();
    ctx.lineTo(a+20, b+10);
    ctx.lineTo(a+40, b+30);
    ctx.lineTo(a+30, b+50);
    ctx.lineTo(a+10, b+50);
    ctx.lineTo(a+0, b+30);
    ctx.lineTo(a+20, b+10);
    ctx.strokeStyle = 'green';
    ctx.closePath();
    ctx.stroke();
    counter++
    if (counter < 500) {
        requestAnimationFrame(animate)
    } else {

    }
}
function clean () {
    console.log('clean')
}
if (counter < 10) {
    animate()
} else {
    clean()
}
