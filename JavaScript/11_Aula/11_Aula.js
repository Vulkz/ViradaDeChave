//IEEE 754 - 2008
let num1 = 123.12345;
let num2 = 2.5;

num1 += num2;

console.log(num1.toString()); // Passa um número para string
console.log(num1.toString(2)); // Passa um número para binário
console.log(num1.toFixed(2)); // Arredonda as casas decimais
console.log(Number.isInteger(num1)); // Verifica se o número é inteiro

num1 = Number(num1.toFixed(2));

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // Verifica se é NaN