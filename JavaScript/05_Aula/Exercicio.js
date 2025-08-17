const nome = 'Gabriel Costa de ';
const sobrenome = 'Oliveira';
const idade = 22;
const peso = 115;
const alturaEmM = 1.91;

// Indice de massa corporal
let imc = peso / (alturaEmM ** 2);

// Ano de nascimento, utilizei o método 'getFullYear' do objeto 'Date', para pegar o ano atual 
let anoNascimento = new Date().getFullYear() - 22;

console.log(`${nome}${sobrenome} tem ${idade} anos, pesa ${peso} kg `);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome}${sobrenome} nasceu em ${anoNascimento}`);