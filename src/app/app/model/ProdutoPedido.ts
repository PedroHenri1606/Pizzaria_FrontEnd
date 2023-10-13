import { Pedido } from "./Pedido";
import { Produto } from "./Produto";
import { Sabor } from "./Sabor";
import { AbstractEntity } from "./abstractEntity/AbstractEntity";

export class ProdutoPedido extends AbstractEntity{

    produto!: Produto;
    quantidade!: number;
    sabores: Sabor[] = [];
    pedido!: Pedido;

    constructor(id: number, produto: Produto, quantidade: number, sabores: Sabor[], pedido: Pedido){
        super(id);
        this.produto = produto;
        this.quantidade = quantidade;
        this.sabores = sabores;
        this.pedido = pedido;
    }
}