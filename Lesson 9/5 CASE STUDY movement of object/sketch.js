let w =1000
let h = 800


let obj1= {
x:w/2,
y:h/2,
d:100,
clr:"red",
vel:20,
mH:false,
mV:false
}



function setup() {
    createCanvas(w, h)
    background("black")
    stroke("white")
}

function draw() {
    background("black")
    fill(obj1.clr)

    if(obj1.mH){
        obj1.x+=obj1.vel
    }
    if(obj1.mV){
        obj1.y+=obj1.vel
    }
    ellipse(obj1.x, obj1.y, obj1.d)
    obj1.x=constrain(obj1.x,0+obj1.d/2,w-obj1.d/2)
    obj1.y=constrain(obj1.y,0+obj1.d/2,h-obj1.d/2)
    

}

function getRandomColor() {
    let r = int(random(0, 255))
    let g = int(random(0, 255))
    let b = int(random(0, 255))

    let colo = "rgb(" + r + ", " + g + "," + b + ")"
    return colo;
}


function keyPressed() {
    if(keyCode==RIGHT_ARROW){
        obj1.vel=5
        obj1.mH=true
        
    }

    if(keyCode==LEFT_ARROW){
        obj1.vel=-5
        obj1.mH=true
    }
    
    if(keyCode==DOWN_ARROW){
        obj1.vel=1
        obj1.mV=true
    }

    if(keyCode==UP_ARROW){
        obj1.vel=-1
        obj1.mV=true


 
    }

    if(keyCode==32){
        obj1.clr = getRandomColor()
}
}


function keyReleased() {
        obj1.mH=false
        obj1.mV=false
}


