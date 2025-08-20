const numero = Number(prompt('Digite um número:'));

// Seleção de IDs
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

/*
 * Atribuindo a variavel número no elemento 
 * que possui o ID 'numero-titulo'
 */ 
numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}`;
texto.innerHTML += `<p>É Not a Number: ${Number.isNaN(numero)}`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;
