import { AlimentoOrganico } from './classes/AlimentoOrganico';
import { ProdutoLimpezaBiodegradavel } from './classes/ProdutoLimpezaBiodegradavel';
import { ItemDecoracaoSustentavel } from './classes/ItemDecoracaoSustentavel';

const tortaDefrutaOrganica = new AlimentoOrganico('Torta fit de Maçã Orgânica', 33.50, new Date('2024-07-15'), ['Maçã orgânica', 'Farinha de Aveia', 'ovo', 'Canela', 'Açucar de Coco']);
const detergenteEco = new ProdutoLimpezaBiodegradavel('Detergente Eco de coco', 5.99, 500);
const vasoDeGarrafaPet = new ItemDecoracaoSustentavel('Vaso de Garrafa Pet reciclavél', 25.00, 'Garrafa Pet', { largura: 10, altura: 20, profundidade: 10 });

tortaDefrutaOrganica.exibirDetalhes();
detergenteEco.exibirDetalhes();
vasoDeGarrafaPet.exibirDetalhes();