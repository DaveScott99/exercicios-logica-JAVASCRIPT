// ADICIONANDO E REMOVENDO PROPRIEDADES EM UM OBJETO

let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
}

onibus.janelas = 20
console.log(onibus.janelas)

delete onibus.rodas
console.log(onibus.rodas)