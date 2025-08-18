let varA = 'A';
let varB = 'B';
let varC = 'C';

let intermediario;

intermediario = varA;
varA = varB;
varB = varC;
varC = intermediario;

console.log(varA, varB, varC);
