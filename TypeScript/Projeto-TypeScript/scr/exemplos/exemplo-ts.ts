var button = document.getElementById('button');
var input1 = document.getElementById('input1') as HTMLInputElement;
var input2 = document.getElementById('input2') as HTMLInputElement;


function Soma (num1: number, num2: number, devePrintar:boolean, frase: string) {
    let resultado = num1 + num2
    if (devePrintar) {
        console.log(frase + resultado)
    }
    return num1 + num2
}
 
let devePrintar = true;
let frase = 'O valor é'


if (button) {
    button?.addEventListener('click', () => {
        if (input1 && input2) {
        console.log(Soma(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
}) 
}