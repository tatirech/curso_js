const soma = function (x, y) {
    return x+y
}
const imprimirResultado= function(a,b, operacao=soma) {
    console.log(operacao(a,b))
}
imprimirResultado (3,4)
imprimirResultado (13,4, function (x,y){
    return x-y
})
imprimirResultado (3,4, (x, y)=> (x/y))

const cachorro = {
    late: function () {
        console.log ('auauau')
    }
}
cachorro.late ()