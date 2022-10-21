// Validação para dirigir

let idade = 18
const cnh = true

if (idade >= 18 && cnh == true){
    console.log('Habilitado para dirigir!!')
} else if (idade >= 18 && cnh != true){
    console.log('Voce não tem CNH!!')
} else {
    console.log('Voce não tem idade e nem CNH para dirigir.')
}