// Verificação do tamanho do texto com FUNCTION
function tamanhoTexto(text){
    if (text.length > 10){
        console.log('Texto muito longo!')
    } else {
        console.log('Texto dentro do limite!')
    }
}
tamanhoTexto('Ola Davi, tudo bem?')
tamanhoTexto('Ola Davi')