// INTRODUÇÃO

/*function soma (a: number, b:number) {
    return a + b;
}

console.log(soma(5, 2))*/





//INTERFACE

/*interface Animal {
	nome: string;
	tipo: "terrestre" | "aquático";
    executarSom (alturaEmDecibeis: number): void; 
}

interface Felinos extends Animal {
	visãoNoturna: boolean;
    tipo: 'terrestre'
}

const animal: Animal = {
	nome: 'Elefante',
	tipo: 'terrestre',
    executarSom: (alturaEmDecibeis) => ((alturaEmDecibeis))
}

animal.executarSom (5)

const felino: Felinos = {
    nome: 'Leão',
    tipo: 'terrestre',
    visãoNoturna: true,
    executarSom: (alturaEmDecibeis) => ((alturaEmDecibeis))
} */




// TRATANDO TAG INPUT

/*const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value); 
});*/



//GENERIC TYPES

/*function adicionaApendiceALista <Generica>(array:any[], valor: Generica) {
    return array.map(item => item + valor);
}

adicionaApendiceALista([1, 2, 3], 1);*/




//DESENVOLVENDO CONDICIONAIS A PARTIR DE PARAMETROS

/*interface IUsuario {
    id: string;
    email: string;
}

interface IAdim {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione (usuario: IUsuario | IAdim) {
    if ('cargo' in usuario) {
        // redirecionar para área de administração
    } 
    //redirecionar para área de usuário
}*/



//ULTILIZANDO O CARACTER '?' PARA VARIÁVEIS OPCIONAIS

/*interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionário' |'gerente' | 'coordenador' | 'supervisor';
}



function redirecione (usuario: IUsuario) {
   if( usuario.cargo){
    //redirecionar(usuario.cargo);
   }
   //redirecionar para a área do usuário
}*/



//READONLY E PRIVATE

 /*interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string; // valor opcional
 } 

 class meuCachorro implements Cachorro {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
 }
 
 const cao = new meuCachorro('Apolo', 14)*/




 //IMPORTAR BIBLITECA COM TYPESCRIPT

 /*interface Estudante {
    nome: string;
    idade: number;
 }

 interface Estudante {
    serie: string;
 }

 const estudante: Estudante = {
 }*/



 /*import $ from 'jquery'; 

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova funcao')
    }
});

$('body').novaFuncao();*/
