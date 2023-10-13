import { TamanhoProduto } from "./enum/TamanhoProduto";

export class Produto {

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    descricao!: string;
    valor!: number;
    tamanhoProduto!: TamanhoProduto;

    constructor(id: number, descricao: string, valor: number, tamanhoProduto: TamanhoProduto){
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.tamanhoProduto = tamanhoProduto;
    }
}