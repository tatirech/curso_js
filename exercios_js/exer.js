function SequenciaLivio(max) {
    return Math.floor(Math.random() * 10 + 1)
}
let opcao = 0

while (opcao != -1) {
    opcao = SequenciaLivio (1, 10)
    console.log ( 'Opcao escolhida foi ' + opcao)
} 
console.log ('Ate á proxima')

