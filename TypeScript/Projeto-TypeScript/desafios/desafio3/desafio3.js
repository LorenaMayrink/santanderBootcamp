var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldo = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldo += soma;
        campoSaldo.innerHTML = saldo.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = '';
}
function limparSaldo() {
    if (campoSaldo) {
        saldo = 0;
        campoSaldo.innerHTML = saldo.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
