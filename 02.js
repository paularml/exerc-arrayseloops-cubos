// Contando letras
// Declare uma nova variável que contem um array contendo algumas letras.
// Faça um programa que conta quantas letras "E" ou "e" existem nesse array.
// Imprima mensagens bonitinhas para mostrar o resultado, por favor. Inclusive 
// quando nenhuma letra for encontrada.

const letras = ["a", "B", "c", "D", "e", "F", "e", "E"]
contador = 0
for (let letraE of letras) {
    if (letraE === "e" || letraE === "E") {
        contador++
    }
}
if (contador === 0) {
    console.log("Não há letras e ou E.")
} else {
    console.log(`Há ${contador} letras e ou E`)
}

// como o chatgpt resolveu:
// const letras = ["a", "B", "c", "D", "e", "F"];
// let contador = 0;

// for (let letra of letras) {
//   if (letra.toLowerCase() === "e") {
//     contador++;
//   }
// }

// if (contador === 0) {
//   console.log("Não há letras 'e'.");
// } else {
//   console.log(`Há ${contador} letra(s) 'e'.`);
// }

// uso do toLowerCase
