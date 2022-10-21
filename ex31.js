// VERIFICAR QUANTIDADE DE ELEMENTOS DE UM ARRAY

let frutas = ['Banana', 'Maçã', 'Melancia', 'Pera', 'Abacaxi', 'Uva', 'Laranja']

let coisas = ['Controle', 'Fone', 'Livro', 'PS4']

function verificarElementos(elementos) {
    if(elementos.length <= 5){
        console.log('Poucos elementos!')
    }else {
        console.log('Muitos elementos!')
    }
}

verificarElementos(frutas)
verificarElementos(coisas)