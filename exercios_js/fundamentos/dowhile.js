function Jogos (min, max){
    const valor = Math.random()* (max-min) + min
    return Math.floor(valor)
}
let opcao=0

do {
    opcao = Jogos (-1, 30)
    console.log ('numero foram  ' + opcao)
} while (opcao !=-1)
console.log ('Obrigada')