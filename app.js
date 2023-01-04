const canvas = document.getElementById('basketball')
const ctx = canvas.getContext('2d')

const textArray = ['bat','cat','dog','air','pink','tear','sock','chip','quit','ball','puck']
const random = Math.floor(Math.random() * textArray.length)
const randomText = textArray[random]

const displayWord = document.getElementById('prompt')
displayWord.innerHTML = randomText

let value = ''
const getValue = () => {
    value = document.getElementById('input-text').value
    //console.log(value)
}

const compareText = () => {
    if(value === randomText){
        console.log('correct')
    } else {
        console.log('wrong')
    }
}

document.addEventListener('submit',()=>{
    getValue()
    compareText()
})

// Basketball
const basketballImage = new Image(100, 100)
basketballImage.src = 'ball.png'

let T = 0
let X0 = 0
let Y0 = canvas.height 
let X = X0
let Y = Y0 + 40
//set speed to .43 for make basket
let speed = .43
let angle = 50
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
    //clear previous frame
    ctx.clearRect(Basketball.x, Basketball.y, canvas.width, canvas.height)
    Basketball.render()
    //looping through each frame
    if(Basketball.frame < 11) {
        Basketball.frame++
    } else {
        Basketball.frame = 0
    }
    secondPassed = (timeStamp - oldTimeStamp)/1000
    oldTimeStamp = timeStamp
    //change the speed variable on either miss or make
    trajectory(speed)
}

const trajectory = (speed) => {
    timeStamp+= 10
    T += animationSpeed * secondPassed
    Basketball.dx = speed * Math.cos(-angle * Math.PI/180) * T + X0
    Basketball.dy = 0.5 * g * T * T + speed * Math.sin(-angle * Math.PI/180) * T + Y0
}

const gameInterval = setInterval(animation, 30)

document.addEventListener('DOMContentLoaded',()=>{
    gameInterval
})

