import { TamanhoProduto } from "./enum/TamanhoProduto";

export class Produto {

    id!: number;
    ativo!: boolean;
    descricao!: string;
    valor!: number;
    tamanho!: TamanhoProduto;
}