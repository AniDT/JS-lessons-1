//Ուշադիր ուսումնասիրեք հետևյալ ծրագիրը, ապա փորձեք ստանալ առաջին անիմացիան, որից հետո այն ձևափոխեք 2֊րդ անիմացիային։

let xC = 500
let yC = 250
let d = 150

function setup(){
createCanvas(1000,500)
}


function draw(){
background("black")
let x = xC + d * cos(frameCount/100)

let y = yC + d * sin(frameCount/100) 

let r = map(x, xC-d/2, xC+d/2, 0, 255)
let b = map(y, yC-d/2, yC+d/2, 0, 255)
fill(r, 0, b)


ellipse(x, y,d/4 )

}