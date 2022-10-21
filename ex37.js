// CARRINHO DE COMPRAS

class Carrinho{
    constructor(itens, qtd,valorT){
        this.itens = itens;
        this.qtd = qtd;
        this.valorT = valorT;
    }
    
    addItens(item){
        let contador = 0;
        for (let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }
        if (contador == 0){
            this.itens.push(item)
        }
        this.qtd += item.qtd
        this.valorT += item.preco * item.qtd
    }

    removeItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){

                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) {return obj.id == item.id});

                this.qtd -= this.itens[itemCarrinho].qtd;
                this.valorT -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd

                this.itens.splice(index, 1);
            }

        }

    }
}



let coisas = new Carrinho([
    {
        id: 01,
        nome: 'Camisa',
        qtd: 2,
        preco: 20
    },
    {
        id: 02,
        nome:'Calça',
        qtd: 2,
        preco: 50
    }

], 4, 140)
console.log(coisas)



coisas.addItens({
    id: 01,
    nome: 'Camisa',
    qtd: 2,
    preco: 20
});
console.log(coisas)


coisas.addItens({
    id: 03,
    nome: 'PS4',
    qtd: 1,
    preco: 1500
});
console.log(coisas)


coisas.removeItem({
    id: 01,
    nome: 'Camisa',
    qtd: 2,
    valor: 20
})
console.log(coisas)