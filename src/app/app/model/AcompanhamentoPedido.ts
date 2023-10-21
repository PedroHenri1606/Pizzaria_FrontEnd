import { Acompanhamento } from "./Acompanhamento";
import { Pedido } from "./Pedido";

export class AcompanhamentoPedido {

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    acompanhamento!: Acompanhamento;
    quantidade!: number;
    pedido!: Pedido;

 
}