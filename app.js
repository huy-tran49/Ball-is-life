const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const textArray = ['a','s','f','e','g','y','j','y','m','o','p']
const random = Math.floor(Math.random() * textArray.length)
const randomText = textArray[random]

const basketballImage = new Image(100, 100)
basketballImage.src = 'ball.png'

let T = 0
let X0 = 0
let Y0 = canvas.height - 20
let X = X0
let Y = Y0
let speed = .42
let angle = 45
let g = .0005
let oldTimeStamp = 0
let secondPassed = 0
let animationSpeed = 1200
let timeStamp = 100

const Basketball = {
    x: 0,
    y: 0,
    sw: 100,
    sh: 100,
    dx: X,
    dy: Y,
    frame: 0,
    
    render(){
        //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
        ctx.drawImage(basketballImage, this.frame * this.sw, 0, this.sw, this.sh, this.dx, this.dy, 40, 40)
    }
}

const animation = () => {
    ctx.clearRect(Basketball.x, Basketball.y, canvas.width, canvas.height)
    Basketball.render()
    if(Basketball.frame < 11) {
        Basketball.frame++
    } else {
        Basketball.frame = 0
    }
    secondPassed = (timeStamp - oldTimeStamp)/1000
    oldTimeStamp = timeStamp
    update()
}


const update = ()=> {
    timeStamp+= 10
    console.log(timeStamp)
    T += animationSpeed * secondPassed
    Basketball.dx = speed * Math.cos(-angle * Math.PI/180) * T + X0
    Basketball.dy = 0.5 * g * T * T + speed * Math.sin(-angle * Math.PI/180) * T + Y0
    console.log(Basketball.dx)
    console.log(Basketball.dy)
}



const gameInterval = setInterval(animation, 30)

document.addEventListener('DOMContentLoaded',()=>{
    gameInterval
})

