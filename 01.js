// Soma total
// Faça um programa que cria um array de números.

// Depois calcule e imprima no console a soma de todos os números desse array.

const numeros = [1, 2, 3, 4, 5]
let indice = 0
let soma = 0
while (indice < numeros.length) {
    soma += numeros[indice]
    indice += 1
}
console.log(soma)

// como o chatgpt resolveu:
// const numeros = [1, 2, 3, 4, 5];
// let soma = 0;

// for (let indice = 0; indice < numeros.length; indice++) {
//   soma += numeros[indice];
// }

// console.log(soma);