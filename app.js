const canvasBasketball = document.getElementById('basketball')
const ctx = canvasBasketball.getContext('2d')

const canvasTyping = document.getElementById('typing')

const inputField = document.getElementById('input-field')

const textArray = ['bat','cat','dog','air','pink','tear','sock','chip','quit','ball','puck']

const getRandomIndex = () => {
    let random = Math.floor(Math.random() * textArray.length)
    return random
}

// console.log(getRandomIndex())
let randomText = textArray[getRandomIndex()]

const displayWord = document.getElementById('prompt')
displayWord.innerHTML = randomText

let value = ''
let correct = true
const getValue = () => {
    value = document.getElementById('input-text').value
    //console.log(value)
}

const compareValue = () => {
    if(value === randomText){
        //canvasBasketball.style.zIndex = '10'
        inputField.reset()  
        value = '' 
        shootBall(ballMake)
        replaceText()
      
    } else {
        inputField.reset()
        shootBall(ballMiss)
    }
    
}

const replaceText = () => {
    getRandomIndex()
    randomText = textArray[getRandomIndex()]
    displayWord.innerHTML = randomText
}

document.addEventListener('submit',()=>{
    getValue()
    compareValue()
      
})

document.addEventListener('keydown', (e)=>{
    getRandomIndex()
})

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$ BASKETBALL $$$$$$$$$$$$$$$$$$$$$$$$$$$$
const basketballImage = new Image(100, 100)
basketballImage.src = 'ball.png'

// let T = 0
// let X0 = 0
// let Y0 = canvasBasketball.height 
// let X = X0
// let Y = Y0 + 40
// //set speed to .43 for make basket
// let speed = .43
// let angle = 50
// let g = .0005
// let oldTimeStamp = 0
// let secondPassed = 0
// let animationSpeed = 1200
// let timeStamp = 100

// const Basketball = {
//     x: 0,
//     y: 0,
//     sw: 100,
//     sh: 100,
//     dx: X,
//     dy: Y,
//     frame: 0,
    
//     render(){
//         //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
//         ctx.drawImage(basketballImage, this.frame * this.sw, 0, this.sw, this.sh, this.dx, this.dy, 40, 40)
//     }
// }

// const animation = () => {
//     //clear previous frame
//     ctx.clearRect(Basketball.x, Basketball.y, canvasBasketball.width, canvasBasketball.height)
//     Basketball.render()
//     //looping through each frame
//     if(Basketball.frame < 11) {
//         Basketball.frame++
//     } else {
//         Basketball.frame = 0
//     }
//     secondPassed = (timeStamp - oldTimeStamp)/1000
//     oldTimeStamp = timeStamp
//     //change the speed variable on either miss or make
//     trajectory(speed)
//     console.log('animating')
// }

// const trajectory = (speed) => {
//     timeStamp+= 10
//     T += animationSpeed * secondPassed
//     Basketball.dx = speed * Math.cos(-angle * Math.PI/180) * T + X0
//     Basketball.dy = 0.5 * g * T * T + speed * Math.sin(-angle * Math.PI/180) * T + Y0
// }

class Basketball {  
    constructor (speed){
        this.speed = speed
    }
    X0 = 0
    Y0 = canvasBasketball.height 
    X = this.X0
    Y = this.Y0 + 40
    sw = 100
    sh = 100
    dx = this.X
    dy = this.Y
    frame = 0
    T = 0
    //set speed to .43 for make basket
    //speed = .43
    angle = 50
    g = .0005
    oldTimeStamp = 0
    secondPassed = 0
    animationSpeed = 1200
    timeStamp = 100
    
    render(){
        //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
        ctx.drawImage(basketballImage, this.frame * this.sw, 0, this.sw, this.sh, this.dx, this.dy, 40, 40)
    }

    trajectory = (speed) => {
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
        this.secondPassed = (this.timeStamp - this.oldTimeStamp)/1000
        this.oldTimeStamp = this.timeStamp
        //change the speed variable on either miss or make
        this.trajectory(this.speed)
    }
}

const ballMake = new Basketball(.43)
const ballMiss = new Basketball(.53)

const shootBall = (ball) => {
    setInterval(ball.animation, 30)
}



document.addEventListener('DOMcontentloaded',()=>{
    
    
})

