const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]
//percorrer o array e verificar o menor numero
// percorrer o array e verificar o maior numero
// eliminar o maior numero
// eliminar o menor numero
// somar os numeros restantes
// dividir a soma pela quantidade de numeros restantes
let menorNota = notas[0]
let maiorNota = notas[0]
let soma = 0
let resultado
for (let nota of notas) {
    if (nota < menorNota) {
        menorNota = nota
    }
    if (nota > maiorNota) {
        maiorNota = nota
    }
    soma += nota
    let divisao = notas.length
    resultado = (soma - menorNota - maiorNota) / divisao
    console.log(divisao)
}

