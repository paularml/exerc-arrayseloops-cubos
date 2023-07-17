function solucao(disparos) {
    // verificar o array disparos
    // verificar qts numeros acima de 70 ha em disparos
    // se tiver 3 numeros acima de 70 imprimir a quantidade
    // se n houver 3 numeros acima de 70 imprimir eliminado
    let acimaDeSetenta = 0
    for (let pontuacao of disparos) {
        if (pontuacao >= 70) {
            acimaDeSetenta++
        }
    }
    if (acimaDeSetenta >= 3) {
        console.log(acimaDeSetenta)
    } else {
        console.log("ELIMINADO")
    }

}