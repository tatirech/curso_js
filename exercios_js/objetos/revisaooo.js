//usando a notação literal
const obj1 = {}
console.log (obj1)

//objeto em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log (obj2)

// funcoes construtoras
function Produto (nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = ()=> {
        return preco * (1 - desconto)
    }
}
const p1 = new Produto ('Caneta bic', 4.99, 0.50)
const p2 = new Produto ('prancha', 1.500, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) 

//funcao Factory

function criarFuncionario (nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30)*(30-faltas)
        }
        }
    }
const f1 = criarFuncionario('ana', 800, 10)
const f2= criarFuncionario('joao', 1000, 1)
console.log (f1.getSalario(), f2.getSalario())

//objet.create
const filha = Object.create (null)
filha.nome = 'ana'
console.log (filha)


//funcao famosa que retorna objeto
const fromJSON = JSON.parse ('{"Info" : "Sou um JSON"}')
console.log(fromJSON.Info)