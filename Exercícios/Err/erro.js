function checkSize (arr, num) {
   try{ if(!arr && !num) throw new ReferenceError("Envie os parâmetros");
    
    if(typeof arr !== 'object') throw new TypeError("Array deve ser do tipo 'object'");

    if(typeof num !== 'number') throw new TypeError("Numb deve ser do tipo Number");

    if(arr.length !== num) throw new RangeError("tamnho do vetro inválido");

    return arr;
}
catch(e) {
    if(e instanceof ReferenceError) {
    console.log("Esse é um ReferenceError!")
    console.log(e.message)
    } else if (e instanceof TypeError) {
        console.log("Esse é um TypeError!")
        console.log(e.message)
    } else if (e instanceof RangeError) {
        console.log("Esse é um RangeError!")
        console.log(e.message)
        } else {
            console.log("ocorreu um erro inesperado:" + e)
        }
    }
}    

console.log(checkSize())