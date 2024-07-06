import { ProdutoEcologico } from '../interface/ProdutoEcologico';

export class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }

    exibirDetalhes(): void {
        console.log(`Nome: ${this.nome}, Preço: ${this.preco}, Data de Validade: ${this.dataValidade.toDateString()}, Ingredientes: ${this.ingredientes.join(", ")}`);
    }
}