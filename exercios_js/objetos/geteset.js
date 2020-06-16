const sequencia = {
    _valor:1, //convencao
    get valor(){return this._valor++},
    set valor(valor) {
        if (valor > this._valor++){
            this._valor=valor
        }
    }
    
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor=1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 60
console.log(sequencia.valor, sequencia.valor)


// getters e setters são funções que os valores são acessados, serve pra fazer uma validação, ou processamento.
//get pra lê o valor de uma variavel
// set pra alterar o valor de uma variavel

const mes = {
    _dia:1,
    get dia() {return this._dia++},
    set dia (dia){
        if (dia > this._dia){
            this._dia= dia
        }
    }
}
console.log(mes.dia, mes.dia)
mes.dia =30
console.log (mes.dia, mes.dia)
mes.dia=40
console.log(mes.dia, mes.dia)