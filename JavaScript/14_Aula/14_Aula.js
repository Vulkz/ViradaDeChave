// Função sem retorno
function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}
saudacao('Gabriel');

// Função padrão
function soma(x=1, y=1) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(10, 15));

// Função anonima
const raiz = function(n) {
    return n ** 0.5;
}
console.log(raiz(9));

// Arrow function (também anonima)
const subitracao = (n1=1, n2=1) => n1 - n2;
console.log(subitracao(5, 2));