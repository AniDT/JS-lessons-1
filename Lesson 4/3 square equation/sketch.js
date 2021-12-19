// Քառակուսի հավասարման լուծումը


let b = prompt("input b")
let a = prompt("input a")
let c = prompt("input c")

a = parseFloat (a)
b = parseFloat (b)
c = parseFloat (c)


let D = Math.pow(b,2)-4*a*c //b**2

if(D>0){
    let x1= (-b + Math.sqrt(D))/(2*a)
    let x2= (-b - Math.sqrt(D))/(2*a)
console.log(x1,x2)
}

else if (D==0){
let x = -(b/(2*a))

console.log(x)
}

else {
    
console.log (" գոյություն չունի")
}