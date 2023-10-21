import { Pedido } from "./Pedido";
import { Produto } from "./Produto";
import { Sabor } from "./Sabor";

export class ProdutoPedido {

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    produto!: Produto;
    quantidade!: number;
    sabores: Sabor[] = [];
    pedido!: Pedido;

 
}