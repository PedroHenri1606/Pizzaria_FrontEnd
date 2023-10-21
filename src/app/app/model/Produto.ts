import { TamanhoProduto } from "./enum/TamanhoProduto";

export class Produto {

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    descricao!: string;
    valor!: number;
    tamanho!: TamanhoProduto;
}