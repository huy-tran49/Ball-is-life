const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const textArray = ['a','s','f','e','g','y','j','y','m','o','p']
const random = Math.floor(Math.random() * textArray.length)
const randomText = textArray[random]
    
    
    


ctx.font = '20px serif'
const text = ctx.fillText(`${randomText}`, 20, 20)

