//Solução1

function verificaPalindromo(string) {
    if (!string) return;

   return string.split("").reverse().join("") === string;  // split separa as letras, reverse - inverte, join - juntas todas as letras
}



console.log(verificaPalindromo("ovo"));

//Solução2

function verificaPalindromo2(string) {
    if (!string) return "String inexistente";
    if (!string.length) return;

   for(var i = 0; i < string.length / 2; i++) {

    if (string[i] !== string[string.length - 1 - i]) {
    return console.log(false);
    }
   }

   return console.log(true);
}

verificaPalindromo2("ovo")