// Decrementando números com FUNCTION e FOR
function decrementoPar(x){
    for(let n = x;n >= 0;n--){
        if(n % 2 == 0){
            console.log(`Número PAR: ${n}`)
        } else if (n % 2 != 0){
            console.log(`Número IMPAR: ${n}`)
        }
    }
}
decrementoPar(10)