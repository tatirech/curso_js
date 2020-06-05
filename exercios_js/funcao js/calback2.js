const notas = [2.2, 5.5, 10, 8]

let notasBaixas = []
for (let i in notas) {
    if (notas [i]<7){
        notasBaixas.push (notas[i])
    }
}
console.log (notasBaixas)

notasBaixas = notas.filter(function (nota){
    return nota >7
})
console.log (notasBaixas)

const notasBaixas3 = notas.filter (nota=> nota <7)
console.log (notasBaixas3)