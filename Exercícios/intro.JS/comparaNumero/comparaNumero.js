/*function comparar (a, b) {

   const saoIguais = a === b;
   const soma = a + b;

   *Opção1:

  if (saoIguais) {
    return 'As constante são iguais';
   }

   return 'As constantes são diferentes'; (se "saoIguais é verdadeiro", o output será 'as constantes são iguais')

   *Opção2

    return saoIguais ? "As constante são iguais" :  "As constantes não diferentes";

   }*/

   function comparacao (a,b) {

    const primeiroResultado = criaPrimeiroResultado(a,b);
    const segundoResultado = criaSegundoResultado(a,b)

    return `${primeiroResultado} e ${segundoResultado}`
   }

   function criaPrimeiroResultado (a,b) {
    let saoIguais = '';

    if(a !== b) {
        saoIguais = "não"
    }

    return `Os números ${a} e ${b} ${saoIguais} são iguais`
   } 


   function criaSegundoResultado (a,b) {
    const soma = a + b;
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    let resultado10 = '';

   if (!compara10) {

    resultado10= "não";

   }

   if (!compara10) {

    resultado20= "não";

   }

   return `a soma de ${a} + ${b} ${resultado10} é maior que 10 e ${resultado20} é maior que 20`;
   
   }

   console.log (comparacao(1, 2));




