let canvas = document.querySelector('#animation')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var context = canvas.getContext('2d')

// context.fillRect(200, 200, 100, 100)

for (let i = 0; i < (Math.random() * 1000); i++) {
}
counter = 0
function animate () {
    requestAnimationFrame(animate)
    // console.log('wut?')

    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    context.beginPath()
    context.arc(x, y, 30, 0, Math.PI * 3, false)
    context.strokeStyle = 'blue'
    // context.stroke()

    var ctx = canvas.getContext('2d');
    let a = Math.random() * window.innerWidth
    let b = Math.random() * window.innerHeight
    ctx.beginPath();
    // ctx.moveTo(a*100, b*100);
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
    console.log(counter)
}
function clean () {
    console.log('clean')
}
if (counter < 1000) {
    animate()
} else {
    clean()
}