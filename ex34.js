// SEPARANDO UMA FRASE E COLOCANDO EM UMA ARRAY E ITERANDO ESSE ARRAY

let frase = 'Estou aprendendo JavaScript'

let fraseSeparada = frase.split(' ')

console.log(fraseSeparada)

for(let x = 0; x < fraseSeparada.length; x++){
    console.log(fraseSeparada[x])
}

fraseSeparada.forEach(frase =>{
    console.log(frase)
})