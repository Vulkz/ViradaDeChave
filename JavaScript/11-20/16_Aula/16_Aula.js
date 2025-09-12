/**
 * Primitivos (imutáveis) - string, number, boolean, undefined,
 * null (bigint, symbol) - Valores copiados
 * 
 * Referência (mútavel) - array, object, function - Passados por referência
 * */

let a = [1, 2, 3];
let b = a;
let c = [...a];
console.log(a, b);

a.push(4);
console.log(a, b, c);

b.pop();
console.log(a, b);