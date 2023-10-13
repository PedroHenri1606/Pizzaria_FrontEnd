import { Acompnhamento } from "./Acompanhamento";
import { Pedido } from "./Pedido";
import { AbstractEntity } from "./abstractEntity/AbstractEntity";

export class AcompnhamentoPedido extends AbstractEntity{

    acompanhamento!: Acompnhamento;
    quantidade!: number;
    pedido!: Pedido;

    constructor(id: number, acompanhamento: Acompnhamento, quantidade: number, pedido: Pedido){
        super(id);
        this.acompanhamento = acompanhamento;
        this.quantidade = quantidade;
        this.pedido = pedido;
    }
}