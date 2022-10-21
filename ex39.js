// ABASTECER E CONSUMIR GASOLINA

class Carro {
    constructor(marca, cor, gasolina){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
    }

    dirigirCarro(){
        for (let x = this.gasolina; x > 0 ; x --){
            console.log(`Consumindo ${x}l de gasolina`)
            this.gasolina = x
        }
       
    }

    abastecerCarro(abastecer){
        for(let y = this.gasolina; y <= abastecer; y ++){
            console.log(`abastecendo ${y}l de gasolina`)
            this.gasolina = y
        }
    }

}


class Carro2{
    constructor(marca, cor, gasolina, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo
    }
    dirigirCarro(km){
        let consumo = km / this.consumo
        this.gasolina -= consumo
    }
    abastecerCarro(litros){
        this.gasolina += litros
    }
}


let palio = new Carro2 ('Fiat', 'Branco', 50, 10)
console.log(palio)


palio.dirigirCarro(50)
console.log(palio)


palio.abastecerCarro(1)
console.log(palio)


/*
let gol = new Carro('Volkswagem', 'Preto', 5)
console.log(gol)


//gol.dirigirCarro()
//console.log(gol)


gol.abastecerCarro(20)
console.log(gol)

gol.dirigirCarro()
console.log(gol)
*/