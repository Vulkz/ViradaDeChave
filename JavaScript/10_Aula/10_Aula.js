let caracterDeEscape = "Um \"texto\".";

console.log(caracterDeEscape.indexOf("\"texto\"")); //Mostra o indice da palavra "texto"
console.log(caracterDeEscape.length); // Mostra o tamanho da string
console.log(caracterDeEscape.replace('texto', 'pato')); // Troca a palavra 'texto' pela palavra 'pato'

console.log(caracterDeEscape.slice(3, 11)); // Seleciona um intervalo 
console.log(caracterDeEscape.slice(-8, 11)); // Seleciona um intervalo 

console.log(caracterDeEscape.split(' ')); // Passa uma string para array

console.log(caracterDeEscape.toUpperCase()); // Transforma em maiusculo
console.log(caracterDeEscape.toLowerCase()); // Transforma em minusculo