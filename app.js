const canvasBasketball = document.getElementById('basketball')
const ctx = canvasBasketball.getContext('2d')

const canvasTyping = document.getElementById('typing')

const inputField = document.getElementById('input-field')

const textArray = ['bat','cat','dog','air','pink','tear','sock','chip','quit','ball','puck','cross','shoot']

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
        ballMake.resetAnimation()
        //ctx.reset()
        return correct
      
    } else {
        inputField.reset()
        ballMiss.resetAnimation()
        //ctx.reset()
        return correct = false
        
    }
}

const replaceText = () => {
    getRandomIndex()
    randomText = textArray[getRandomIndex()]
    displayWord.innerHTML = randomText
}

const animating = (val) => {
    if (val === true) {
        shootBallMake = setInterval(ballMake.animation, 30)
    } else {
        shootBallMiss = setInterval(ballMiss.animation, 30)
    }
}

document.addEventListener('submit',()=>{
    getValue()
    compareValue()
    replaceText()
    animating(correct)

})

let keyPressCounter = 0
document.addEventListener('keydown', (e)=>{
    if(e.key === 'j'){
        keyPressCounter++
        console.log(keyPressCounter)
    }
    
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
    g = .0005
    oldTimeStamp = 0
    secondPassed = 0
    animationSpeed = 1200
    timeStamp = 100
    
    render () {
        //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
        ctx.drawImage(basketballImage, this.frame * this.sw, 0, this.sw, this.sh, this.dx, this.dy, 30, 30)
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
        
        console.log('dx',this.dx)
        console.log('dy',this.dy)
        if (this.dx > 310) {
            clearInterval(shootBallMake) 
            clearInterval(shootBallMiss) 
            
        }
        
    }
    resetAnimation () {
        this.X0 = 0
        this.Y0 = canvasBasketball.height 
        this.X = this.X0
        this.Y = this.Y0
        this.sw = 100
        this.sh = 100
        this.dx = this.X
        this.dy = this.Y
    } 
}

const ballMake = new Basketball(.43)
const ballMiss = new Basketball(.53)


let shootBallMake = null
let shootBallMiss = null


document.addEventListener('keyup', (e)=>{
    if (e.key === 'z') {
        clearInterval(shootBallMake) 
        clearInterval(shootBallMiss) 
    }
    
})


document.addEventListener('DOMcontentloaded',()=>{

})

