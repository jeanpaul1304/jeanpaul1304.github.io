const canvas = document.querySelector('#animation')
let start = null
canvas.width = window.innerWidth + 500
canvas.height = window.innerHeight + 500

var ctx = canvas.getContext('2d');
ctx.save()
let counter = 0
function animate () {
    let x = Math.random() * (window.innerWidth + 400)
    let y = Math.random() * (window.innerHeight + 400)
    ctx.beginPath()
    ctx.arc(x, y, 30, 0, Math.PI * 3, false)
    ctx.strokeStyle = 'blue'

    let a = Math.random() * window.innerWidth
    let b = Math.random() * window.innerHeight
    ctx.beginPath()
    ctx.lineTo(a+20, b+10);
    ctx.lineTo(a+40, b+30);
    ctx.lineTo(a+30, b+50);
    ctx.lineTo(a+10, b+50);
    ctx.lineTo(a+0, b+30);
    ctx.lineTo(a+20, b+10);
    ctx.strokeStyle = '#0c661894';
    ctx.closePath();
    ctx.stroke();
    counter++
    if (counter < 300) {
        requestAnimationFrame(animate)
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        counter = 0
        animate()
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
