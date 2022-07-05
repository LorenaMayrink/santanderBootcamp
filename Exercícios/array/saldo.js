const lista = [
    {
        name: 'chocolate',
        preco: 5
    },
    {
        name: 'gin',
        preco: 110
    },
    {
        name: 'milho de pipoca',
        preco: 5
    },
];

const saldoDisponivel = 200;

function valorSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco
    }, saldoDisponivel);
}

console.log(valorSaldo(saldoDisponivel, lista))


