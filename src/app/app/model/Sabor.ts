import { ProdutoPedido } from "./ProdutoPedido";
import { AbstractEntity } from "./abstractEntity/AbstractEntity";

export class Sabor extends AbstractEntity{

    nome!: string;
    descricao!: string;
    produtoPedidos: ProdutoPedido[] = [];

    constructor(id: number, nome: string, produtoPedidos: ProdutoPedido[]){
        super(id);
        this.nome = nome;
        this.produtoPedidos = produtoPedidos;
    }
}