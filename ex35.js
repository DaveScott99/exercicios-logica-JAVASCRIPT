// CRIANDO UMA CALCULADORA COM MÉTODOS EM OBJETOS

const calculadora = {
    soma: function(x, y){
        return x + y
    },
    subtrair: function(x, y){
        return x - y
    },
    multiplicar(x, y){
        return x * y
    },
    dividir(x, y){
        return x / y 
    }
}
console.log(calculadora.soma(2, 3))
console.log(calculadora.subtrair(5, 3))
console.log(calculadora.multiplicar(2, 4))
console.log(calculadora.dividir(8, 2))