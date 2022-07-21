var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function Soma(num1, num2, devePrintar, frase) {
    var resultado = num1 + num2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}
var devePrintar = true;
var frase = 'O valor é ';
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(Soma(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
