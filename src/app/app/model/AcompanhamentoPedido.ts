import { Acompnhamento } from "./Acompanhamento";
import { Pedido } from "./Pedido";

export class AcompnhamentoPedido {

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    acompanhamento!: Acompnhamento;
    quantidade!: number;
    pedido!: Pedido;

    constructor(id: number, acompanhamento: Acompnhamento, quantidade: number, pedido: Pedido){
        this.id = id;
        this.acompanhamento = acompanhamento;
        this.quantidade = quantidade;
        this.pedido = pedido;
    }
}