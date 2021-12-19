
let count = 500 //defined and undefined variables 
let xS = []
let yS = []
let clr = []
let vel = []
let d = 25

function setup() {// by putting clr in setup makes it static otherwise in draw that would change
    createCanvas(1000, 800)
    background("black")
    
    for(let i=0; i<count; i++){
        xS.push(random(10,990))
        yS.push(random(10,100))
        clr.push(getRandomColor())
        vel.push(random(1,4))
    }
}

function draw() {
    background("black")
    yS = incimentArray(yS, vel)

    for (let i = 0; i < xS.length; i++) {
        fill(clr[i])// why it does not cause color change?
        ellipse(xS[i], yS[i], d)
    }
}

function incimentArray(arr, vel){ //do not understand

    for(let i=0; i<arr.length; i++){
        arr[i]+=vel[i]
    }
    return arr;
}

function getRandomColor() {   // creating function for getting random values for r g b to get colo
    let r = int(random(0, 255))
    let g = int(random(0, 255))
    let b = int(random(0, 255))

    let colo = "rgb(" + r + ", " + g + "," + b + ")"// do not understand + + and ""
    return colo;

}
