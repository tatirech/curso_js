function soma (a, b, c) {
    a = a || 1
    b= 2 || 2
    c=3 || 3 
    return a+b+c
}
console.log (soma ())
console.log(soma(10))
console.log (soma (3))

function soma2 (a,b, c) {
    a=a !== undefined ? a:1
    b=1 in arguments ? b:1
    c= isNaN(c) ? 1:c
    return a+b+c
}
console.log ((soma2 ()), soma2(3), soma2(2,3,4))

function soma3  (a=1, b=2, c=3){
    return a+b+c
}
console.log (soma(), soma3 (3,4,5))
