function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        
        fala(){
            console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        }
    };
}

const pessoa1 = criaPessoa('Gabriel', 'Oliveira', 22);

pessoa1.fala();