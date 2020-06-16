const pessoa = {
    nome: 'julia',
    peso: 14,
    idade: 10

}
console.log(Object.keys (pessoa))//chaves de um objeto
console.log(Object.values(pessoa))//vai dar os valores das chaves
console.log(Object.entries (pessoa))// dá os registros, retorna em arrays todos nome e valor

Object.entries(pessoa).forEach (([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
enumerable:true,
writable:true,
value:'01/01/2019'
})
pessoa.dataNascimento = '01/01/2016'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ecmascript 2015)

const dest = {a:1}
const o1= {b:2}
const o2 = {c:3, a:4}
const obj= Object.assign(dest, o1, o2)//objetos de destinos ele vai concaternar com os proximos objetos subsequentes

Object.freeze(obj)
obj.c = 1234
console.log(obj)