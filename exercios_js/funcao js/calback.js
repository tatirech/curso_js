const frutas= ["laranja", "uva", "maçã", "banana"]
function imprimi (nome, indice) {
    console.log ((indice+ 1  ) + (nome))
}
frutas.forEach(imprimi)


const tennis= ['nike', 'adidas', 'gofy']
function marca ( nome , indice) {
    console.log((indice + 1), (nome))
}
tennis.forEach(marca)
tennis.forEach (a=>console.log(a))

const roupa = ['blusa', 'camisa', 'meia']
function pecas (nome, indice) {
    console.log((indice + 2), (nome))
}
roupa.forEach (pecas)
roupa.forEach (a=> console.log(a))