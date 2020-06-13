/**const valor = 'global'

function minhaFuncao() {
    console.log (valor)
    
}
function exec()
    const valor = 'Local'
    minhaFuncao()
    
}
exec()
//closure é o escopo criado qndo uma função é declarada
// esse escopo permite a função acessar e manipular variaveis, externas a funções
// contexto léxico em ação**/

const x = 'global'
function fora() {
    const X = 'local'
    function  dentro () {
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log (minhaFuncao())