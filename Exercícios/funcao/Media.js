let foiAprovado = function aprovados (a, b) {
    const conta = (a + b)/2;
 

    if (conta >= 6) {
        return true;
    } else {
        return false;
    }
}


const alunos = [
    {
        nome: "Lorena",
        nota: foiAprovado(6, 7),
    },
    {
        nome: "Patricia",
        nota: foiAprovado(6, 7),
    },
    {
        nome: "Guilherme",
        nota: foiAprovado(0, 7),
    }
]


function alunosAprovados (arr) {
    let listaDeAprovados = [];

    for (let i = 0; i < alunos.length; i++){

        const { nota, nome } = arr[i];

        if (nota == true) {
            listaDeAprovados.push(nome)

        }
    }

    return listaDeAprovados
}

console.log(alunosAprovados(alunos));