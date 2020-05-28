function SequenciaLivio(max,contador) {
    return max / contador;
}
function getNumbers(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}
let cont = 1;
while (cont <= 2) {
    
    console.log("Sequencia numero: " + cont)
    for(i=1;i<=6;i++){
        console.log(i + " - "+ getNumbers(1,60))
    }
    //opcao = SequenciaLivio (199, cont)
    //console.log ( 'Opcao escolhida foi ' + opcao)
    cont++;
} 
console.log ('Ate á proxima')

