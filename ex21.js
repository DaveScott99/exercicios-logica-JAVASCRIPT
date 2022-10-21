// Verificar tipos de dados com FUNCTION
function detectarDado(d){
    console.log(typeof(d))
}

detectarDado(2)
detectarDado('Dave')
detectarDado(true)

function tiposDados(dado){
    if(typeof dado === 'string'){
        console.log('Este dado é uma STRING')
    } else if (typeof dado === 'number'){
        console.log('Este dado é um NUMBER')
    } else if (typeof dado === 'boolean'){
        console.log('Este dad é um BOOLEAN')
    }
}

tiposDados(2)
tiposDados('Davi')
tiposDados(false)