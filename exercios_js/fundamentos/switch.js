const media = function (nota){
    switch (Math.floor (nota)){
        case 10: case 9:
            console.log ('Quadro de honra')
            break
            case 8.99: case 6:
                console.log ('Aprovado')
                break
            case 5.99: case 0:
                console.log ('reprovado')   
                break
                default:
                    (console.log ('Nota invalida')) 
    }
}

media (10)