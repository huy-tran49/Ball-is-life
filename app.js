const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const textArray = ['a','s','f','e','g','y','j','y','m','o','p']
const random = Math.floor(Math.random() * textArray.length)
const randomText = textArray[random]


const Basketball = {
    x: 50,
    y: 100,
    rad: 10,
    color: 'orange',
    render() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2)
        ctx.fill()
    }
}

const animation = () => {
    ctx.clearRect(Basketball.x - 50, Basketball.y - 100, canvas.width, canvas.height)
    Basketball.render()
    if(Basketball.x < canvas.width) {
        Basketball.x += 2
        //console.log(Basketball.x)
    }
    if(Basketball.y > 50) {
        Basketball.y += -1
        console.log(Basketball.y)
    }
}

// ctx.font = '20px serif'
// const text = ctx.fillText(`${randomText}`, 20, 20)

const gameInterval = setInterval(animation, 20)

document.addEventListener('DOMContentLoaded',()=>{
    gameInterval
})