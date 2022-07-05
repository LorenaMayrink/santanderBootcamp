const nota1 = {
    value: 9,
}

const nota2 = {
    value: 6,
}


function multiplicacaoComThis (arr, thisArg) {
    return arr.map(function(item){
      return  item * this.value;
    }, thisArg)
}

const nums = [1, 2];


console.log(multiplicacaoComThis(nums, nota1));

//Sem this

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const num = [ 2, 4, 6, 8]

console.log(mapSemThis(num));
