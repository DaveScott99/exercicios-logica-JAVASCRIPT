// SIMULAÇÃO DE CONTA EM BANCO COM JUROS E HERANÇA

class ContaNormal{
    constructor(saldoCorrente, saldoPoupança, jurosPoup){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupança = saldoPoupança;
        this.jurosPoup = jurosPoup;
    }

    depositoCorrente(money){
        this.saldoCorrente += money
    }

    saqueCorrente(money){
        this.saldoCorrente -= money
    }

    transfCorrente(valor){

        this.saldoCorrente += valor
        this.saldoPoupança -= valor
    }
    transfPoupança(valor){
        this.saldoPoupança += valor
        this.saldoCorrente -= valor
    }

    jurosAniversário(){
        let juros = (this.saldoPoupança * this.jurosPoup) / 100
        this.saldoPoupança += juros
    }
}


class ContaEspecial extends ContaNormal{
    constructor(saldoCorrente, saldoPoupança, jurosPoup){
        super(saldoCorrente, saldoPoupança, jurosPoup*2)
    }
}

let conta2 = new ContaEspecial (100, 200, 2)
console.log(conta2)
 
conta2.saqueCorrente(50)
console.log(conta2)

conta2.jurosAniversário()
console.log(conta2)



let conta1 = new ContaNormal (200, 100, 2)
console.log(conta1)



conta1.transfCorrente(50)
console.log(conta1)

conta1.transfPoupança(100)
console.log(conta1)

conta1.jurosAniversário()
console.log(conta1)