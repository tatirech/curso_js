
/**function getInteiro (min, max) {
    const valor = Math.random () * (max - min) +min
    return Math.floor (valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiro (-1, 10)
    console.log ( 'Opcao escolhida foi ' + opcao)
} 
console.log ('Ate á proxima!git')**/

function inicioNotas (min, max) {
    const valor = Math.random () * (max-min) + min
    return Math.floor (valor)
}

let notas = 2

while (notas <=2) {
    notas=inicioNotas (0, 10)
    console.log ('A nota registrada foi  ' + notas)
}