//Ստեղծել ֆունկցիաներ, որոնք հաշվում և վերադարձնում են շրջանագծի և ուղղանկյան մակերեսները։ Սկսեք վերափոխելով հետևյալ ծրագիրը։

let s = squareOfRectangle(100,50)
let s1 = squareOfRectangle(20,18)
console.log(s, s1)

let s2= squareOfCirlce(15)
let s3= squareOfCirlce(25)
console.log(s2, s3)


function squareOfRectangle(w,h){
return w * h
}

function squareOfCirlce(r){
return r * (r * 2)
}