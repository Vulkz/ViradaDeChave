const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo'; // Troca valor do indice selecionado
alunos[alunos.length] = 'Luiza'; // Cria o indice 3 e adiciona um valor

alunos.push('Ótavio'); // Adiciona um valor no final da lista
alunos.unshift('Cleber'); // Adiciona um valor na frente da lista

const ultimoRemovido = alunos.pop(); // Remove o ultimo elemento de um array
const primeiroRemovido = alunos.shift(); // Remove o primeiro elemento de um array

delete alunos[1]; // Apaga um elemento, porém n altera os indices da lista

console.log(alunos instanceof Array); // Verifica se é um array
console.log(alunos);
console.log(primeiroRemovido, ultimoRemovido);
console.log(alunos.slice(1, 3));
