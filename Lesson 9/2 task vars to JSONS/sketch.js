//Change this to JSON object

let W = 800
let H = 800

let rect1 = {
x: 0,
y: 0,
h: 150,
w: 300,
s: 1,
clr:"violet"
}


let rect2 = {
x:10,
y:0,
h:300,
w:100,
s:2,
clr:"red"
}

let rect3 = {
x: 13,
y: 0,
h: 80,
w: 160,
s: 3,
clr: "white"
}


function setup() {
    createCanvas(W, H)

}

function draw() {
    background("black")

    fill(rect1.clr)
    strokeWeight(rect1.s)
    rect(rect1.x,rect1.y,rect1.w,rect1.h)
    
    fill(rect2.clr)
    strokeWeight(rect2.s)
    rect(rect2.x,rect2.y,rect2.w,rect2.h)

    strokeWeight(rect3.s)
    fill(rect3.clr)
    rect(rect3.x, rect3.y, rect3.w, rect3.h)

    rect1.x++
    rect2.x++
    rect3.x++

    rect1.y++
    rect2.y+=0.5
    rect3.y+=0.3
}