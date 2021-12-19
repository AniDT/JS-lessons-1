// choose from ellipse, rectangle, point, default: nothing 
function setup() {
    createCanvas (500,400)
    background ("green")

let obj = prompt ("input shape")


if (obj=="rectangle") {

    let x = prompt("input x")
    let y = prompt("input y")
    let w = prompt("input w")
    let h = prompt("input w")
    let c = prompt("input color")
   
    x = parseInt (x)
    y = parseInt (y)
    w = parseInt (w)
    h = parseInt (h)

    fill (c)
    rect (x, y, w, h)
}


else if (obj=="ellipse"){

    let x = prompt("input x")
    let y = prompt("input y")
    let w = prompt("input w")
    let h = prompt("input w")
    let c = prompt("input color")
   
    x = parseInt (x)
    y = parseInt (y)
    w = parseInt (w)
    h = parseInt (h)
   
    fill(c)
    ellipse (x, y, w, h)
}
else if (obj=="line"){

    let x = prompt("input x")
    let y = prompt("input y")
    let x1 = prompt("input x1")
    let y1 = prompt("input y1")
    let c = prompt("input color")
   
    x = parseInt (x)
    y = parseInt (y)
    x1 = parseInt (x1)
    y1 = parseInt (y1)
   
    fill(c)
    line (x, y, x1, y1)
}


}
