//exercicios feitos pela profa aqui

// let numero:number = 11;
// console.log(numero);

// let nome:string = "Thay";
// console.log(nome);

// const pi:number = 3.14;
// console.log(pi);

// function saudacao(nome:string, idade:number){
// console.log(`Olá, sou ${nome} e tenho ${idade}`);
// }

// const nomeUsuario:string = "Thay";
// const idadeUsuario:number = 30;
// saudacao(nomeUsuario, idadeUsuario);

//---> OBJETO <--

// const pessoa ={
//     nome:"Thay",
//     idade:15,
//     cidade:"Porto Alegre",
//     apresentar: function():string{
//     return `Olá, meu nome é ${this.nome}, eu tenho ${this.idade}  e sou da cidade de ${this.cidade}   `
//     }
// }

// console.log(pessoa.apresentar());


//---> CLASSE <---

class Carro{
    marca:string;
    modelo:string;
    ano:number;

    constructor(masca:string, modelo:string, ano:number){
        this.marca = masca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2024);
console.log(meuCarro);