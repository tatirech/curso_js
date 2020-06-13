const notas = [2, 2.1, 3.3, 6.0, 9.1, 8.5, 7]

notasBaixas = notas.filter (function (nota){
    return nota <7
})
console.log (notasBaixas)

const idade = [10,20,25, 50, 100]

meiaidade= idade.filter (function (idade){
    return idade <30
})
console.log (meiaidade)

const salarioInteiro= [ 700, 8000, 950, 1050, 100]

salario= salarioInteiro.filter (function(salario) {
    return salario >800
    
})
console.log (salario)

const grana= [1.1, 5.5, 3,4.5,9]
dinheiro = grana.filter(function(moeda) {
    return moeda <3
})
    console.log (grana)
    
const filhotes = [1, 2, 3, 4, 5, 6, 7, 9]
animais = filhotes.filter (filhotes=>filhotes>5)
console.log (animais)

