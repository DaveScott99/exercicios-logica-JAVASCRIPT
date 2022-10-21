// ALTERANDO DADOS COM GETTERS E SETTERS

class Dados {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){ 
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado
    }
}


let endereco = new Dados('Rua Francisco', 'Jardim Lourdes', 'São Paulo', 'SP')
console.log(endereco)


endereco.novaRua = 'Francisco Goes'
endereco.novoBairro = 'Jardim Flores'
endereco.novaCidade = 'Rio de Janeiro'
endereco.novoEstado = 'RJ'

console.log(endereco)