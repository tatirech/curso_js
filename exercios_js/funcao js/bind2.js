function Pessoa () {
    this.idade = 0 
    setInterval (function( ){
        this.idade++
        console.log (this.idade)
    }.bind (this), 1000)
}
funtion = new Pessoa



function prancha () {
    this.idade=2
    setInterval function (){
        self.idade
    }
}