const canvasBasketball = document.getElementById('basketball')
const ctx = canvasBasketball.getContext('2d')

const startButton = document.getElementById('start-button')
const instructionButton = document.getElementById('instruction-button')
const instruction = document.getElementById('instruction')
const startScreen = document.getElementById('start-menu')
const endScreen = document.getElementById('end-screen')
const endScore = document.getElementById('end-score')
const inputField = document.getElementById('input-field')
const playAgainButton = document.getElementById('play-again')

const basketMade = document.getElementById('score')
let score = 0
basketMade.innerHTML = `Score: 0`

const updateScore = () => {
    basketMade.innerHTML = `Score: ${score}`
}

const timerText = document.getElementById('timer')
let timerNum = 30
let gameActive = true

const countdown = () => {
    timerNum -= 1
    timerText.innerHTML = timerNum
    if (timerNum === 0) { 
        clearInterval(activeTimer)
        showScore()
        endScreen.style.zIndex = '5'
        return gameActive = false
    }
}

let activeTimer = null
const timer =() => {
   activeTimer = setInterval(countdown, 1000)
}

const showScore = () => {
    endScore.innerHTML = `Your score: ${score}`
}

playAgainButton.addEventListener('click', () => {
    location.reload()
})


const textArray = ['kale','dunk','dog','air','pink','tear','sock','chip','quit','ball','puck','cross','shoot','shoe','score','poster','team','fake']

instruction.addEventListener ('click',()=>{
    instruction.style.display = 'none'
})

instructionButton.addEventListener ('click',()=>{
    instruction.style.display = 'flex'
})

startButton.addEventListener ('click',()=>{
    startScreen.style.zIndex = '0'
    timer()
})

const getRandomIndex = () => {
    let random = Math.floor(Math.random() * textArray.length)
    return random
}

let randomText = textArray[getRandomIndex()]
const displayWord = document.getElementById('prompt')
displayWord.innerHTML = randomText

let value = ''
let correct = 0
const getValue = () => {
    value = document.getElementById('input-text').value
}

const compareValue = () => {
    if(value === randomText){
        //canvasBasketball.style.zIndex = '10'
        inputField.reset()  
        score++
        return correct = .43
    } else {
        inputField.reset()
        return correct = .53
    }
}

const replaceText = () => {
    getRandomIndex()
    randomText = textArray[getRandomIndex()]
    displayWord.innerHTML = randomText
}

const animating = (val) => {
    if (val === .43) {
        generateBall(correct).animation()
    } else {
        generateBall(correct).animation()
    }
}

document.addEventListener('submit',()=>{
    getValue()
    compareValue()
    replaceText()
    animating(correct)
    updateScore()
})

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$ BASKETBALL $$$$$$$$$$$$$$$$$$$$$$$$$$$$
const basketballImage = new Image(100, 100)
basketballImage.src = 'ball.png'

class Basketball {  
    constructor (speed){
        this.speed = speed
    }
    X0 = 0
    Y0 = canvasBasketball.height 
    X = this.X0
    Y = this.Y0
    sw = 100
    sh = 100
    dx = this.X
    dy = this.Y
    frame = 0
    T = 0
    //set speed to .43 for make basket
    //speed = .43
    angle = 50
    g = .0006
    oldTimeStamp = 0
    secondPassed = 0
    animationSpeed = 1200
    timeStamp = 100
    req = null
    
    render () {
        //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) 
        ctx.drawImage(basketballImage, this.frame * this.sw, 0, this.sw, this.sh, this.dx, this.dy, 30, 30)
    }

    trajectory = (speed) => {
        this.secondPassed = (this.timeStamp - this.oldTimeStamp)/1000
        this.oldTimeStamp = this.timeStamp
        this.timeStamp+= 10
        this.T += this.animationSpeed * this.secondPassed
        this.dx = speed * Math.cos(-this.angle * Math.PI/180) * this.T + this.X0
        this.dy = 0.5 * this.g * this.T * this.T + speed * Math.sin(-this.angle * Math.PI/180) * this.T + this.Y0
    }

    animation = () => {
        //clear previous frame
        ctx.clearRect(0, 0, canvasBasketball.width, canvasBasketball.height)
        
        this.render()
        //looping through each frame
        if(this.frame < 11) {
            this.frame++
        } else {
            this.frame = 0
        }
        //change the speed variable on either miss or make
        this.trajectory(this.speed)

        this.req = requestAnimationFrame(this.animation.bind(this))
        if(this.speed > .44 && this.dx > 300) {
            this.stopAnimation()
            ctx.clearRect(0, 0, canvasBasketball.width, canvasBasketball.height)
        } else if (this.speed < .44 && this.dx > 250) {
            this.stopAnimation()
            ctx.clearRect(0, 0, canvasBasketball.width, canvasBasketball.height)
        }
    }
    
    stopAnimation () {
        cancelAnimationFrame(this.req)
    }
}

const generateBall = (speed) => {
    return new Basketball(speed)
}

// const hoopImage = new Image()
// hoopImage.src = 'basketball-hoop.png'
// const renderHoop = () => {
//     ctx.drawImage(hoopImage, 250, 50, 80, 132) 
// }
// const drawHoop = () => {
//     requestAnimationFrame(renderHoop)
// }


document.addEventListener('DOMcontentloaded',()=>{
    
})

