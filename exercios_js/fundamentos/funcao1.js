function imprimirSoma (a, b) {
    console.log (a+b)

}
imprimirSoma (2, 13)
imprimirSoma (2)


function soma(a, b = 4) {
    return a+b
}
console.log(soma (2,3))
console.log(soma (2))