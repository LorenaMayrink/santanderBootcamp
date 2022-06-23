function substituiPares(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log('0')
        } else if (array[i] % 2 ===0) {
            console.log(`o número ${array[i]} será substituido por 0`);
            array[i] = 0;
        }
    }

    return array;
}

let array = [1, 2, 3, 4, 5, 6, 22, 33, 90]
console.log(substituiPares(array));