// Convertendo numeros negativos em positivo FUNCTION
function negativo(n){
    return Math.abs(n)
}
console.log(negativo(-2.543))


function negativo2(a){
    if (a < 0){
        a = a * -1
    }
    return a
}
console.log(negativo2(-20))