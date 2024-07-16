import {Animal} from "./animal"

class Cachorro implements Animal{
    nome:string;
    idade:number;
    raca:string;

    constructor(nome:string, idade:number, raca:string){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    som():void{
        console.log("O cachorro faz: Au, Au");
    }

}

class Gato implements Animal{
    nome:string;
    idade:number;
    cor:string;

    constructor(nome:string, idade:number, cor:string){
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }

    som():void{
        console.log("O Gato faz: Miau");
    }

}

const meuCachorro = new Cachorro ("Cacau", 6, "Caramelo");
console.log(`Nome do cachorro:  ${meuCachorro.nome}`);
console.log(`Idade do cachorro:  ${meuCachorro.idade}`);
console.log(`Raca do cachorro:  ${meuCachorro.raca}`);
meuCachorro.som();


const meuGato = new Gato ("Momo", 1, "3 cores")
console.log(`Nome do gato:  ${meuGato.nome}`);
console.log(`Idade do gato:  ${meuGato.idade}`);
console.log(`Cor do gato:  ${meuGato.cor}`);
meuGato.som();
