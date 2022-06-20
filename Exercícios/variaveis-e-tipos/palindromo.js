//Solução1
function verificaPalindromo(string) {
    if (!string) return;

   return string.split("").reverse().join("") === string;  // split separa as letras, reverse - inverte, join - juntas todas as letras
}



console.log(verificaPalindromo("ovo"));