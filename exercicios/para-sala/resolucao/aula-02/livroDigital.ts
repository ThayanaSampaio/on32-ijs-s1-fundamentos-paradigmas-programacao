import { Livro } from "./livro";

class livroDigital implements Livro{
    titulo:string;
    autor:string;
    formato:string;
  //não precisa declarar o tipo?

  constructor(titulo:string, autor:string, formato:string){
    this.titulo = titulo;
    this.autor = autor;
    this.formato = formato;
  }

  detalhe():string{
    return `Titulo: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`
  }
    
}

const meuLivroDigital = new livroDigital("O jogador n. 1", " Ernest Cline", "pdf");

console.log(meuLivroDigital.detalhe());