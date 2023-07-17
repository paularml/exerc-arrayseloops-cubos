function solucao(primeiraLetra, segundaLetra, palavras) {
    //percorrer o array dentro do array e verificar as letras 
    // verificar se o 1 e 2 item do array dentro do array eh igual a 1letra e 2letra, respectivamente
    // se for igual imprimir a palavra
    // se nao for igual imprimir nenhuma
    let numeroDePalavras = 0
    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i]
        if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
            console.log(palavra)
            numeroDePalavras++
        }

    }
    if (numeroDePalavras === 0) {
        console.log("NENHUMA")
    }

}