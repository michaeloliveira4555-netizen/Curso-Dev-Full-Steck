class Deque{
    constructor(){
        this.itens = []
    }

    //Adicionar um item no inicio do Deque
    adicionarFrente(elemento){
        this.itens.unshift(elemento)
    }

    //Adicionar um item no final do Deque
    adiocionaFim(elemento){
        this.itens.push(elemento)
    }

    //Remove e retorna o elemento do inicio do Deque
    removeFrente(){
        return this.itens.shift()
    }

    //remove e retorna o elemento do fim do Deque
    removeFim(){
        return this.itens.pop()
    }
}

const deque = new Deque()

