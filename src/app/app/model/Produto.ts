import { TamanhoProduto } from "./enum/TamanhoProduto";

export class Produto {

    id!: number;
    ativo: boolean = true   ;
    descricao!: string;
    valor!: number;
    tamanho: TamanhoProduto = TamanhoProduto.BROTINHO;
}