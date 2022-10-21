// SIMULADOR DE CONTA EM BANCO

class ContaBanco {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor
        console.log(`Voce depositou: R$${valor}`)
        console.log(`O saldo atual da sua conta é: R$${this.saldo}`)
    }

    saque(valor){
        this.saldo -= valor
        console.log(`Voce irá sacar R$${valor}`)
        console.log(`O saldo atual da sua conta é R$${this.saldo}`)
    }
}
let contaDavi = new ContaBanco(2000)

contaDavi.deposito(200)
contaDavi.saque(200)