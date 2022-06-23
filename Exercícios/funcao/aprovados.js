function aprovados (a, b) {
    let media = (a + b)/2;
    let resultado;

    if (media > 6) {
        resultado = "Você foi aprovado";
    } else {
        resultado = "Você foi reprovado";
    }

    return resultado
}

console.log(aprovados (7, 8));