import { ProdutoEcologico } from '../interface/ProdutoEcologico';

export class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: { largura: number; altura: number; profundidade: number; };

    constructor(nome: string, preco: number, material: string, dimensoes: { largura: number; altura: number; profundidade: number; }) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }

    exibirDetalhes(): void {
        console.log(`Nome: ${this.nome}, Preço: ${this.preco}, Material: ${this.material}, Dimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade} cm`);
    }
}