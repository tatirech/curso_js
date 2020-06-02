const media = function (nota) {
    if (nota>= 7) {
        console.log ('aprovado')
    } else {
        console.log ('reprovado')
    }
}

media (10)

const salario = function (grana) {
    if (grana >= 100) {
        console.log ('sobrou')
    } else {
        console.log ('ficou devendo')
    }
}
salario (200.50)
salario (90)

const lucro = function (real) {
    if (real>= 1000) {
        console.log ('deu lucro')
    }else { console.log ('deu prejuizo')
}
}
lucro (200)
lucro (3000)