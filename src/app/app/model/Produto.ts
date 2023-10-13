import { AbstractEntity } from "./abstractEntity/AbstractEntity";
import { TamanhoProduto } from "./enum/TamanhoProduto";

export class Produto extends AbstractEntity{

    descricao!: string;
    valor!: number;
    tamanhoProduto!: TamanhoProduto;

    constructor(id: number, descricao: string, valor: number, tamanhoProduto: TamanhoProduto){
        super(id);
        this.descricao = descricao;
        this.valor = valor;
        this.tamanhoProduto = tamanhoProduto;
    }
}