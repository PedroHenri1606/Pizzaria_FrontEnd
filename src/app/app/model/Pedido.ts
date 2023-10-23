import { Acompanhamento } from "./Acompanhamento";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";
import { Produto } from "./Produto";
import { FormaDePagamento } from "./enum/FormaDePagamento";
import { SituacaoPedido } from "./enum/SituacaoPedido";

export class Pedido{

    id!: number;
    ativo!: boolean;
    cliente!: Cliente;
    item: Produto[] = [];
    acompanhamento: Acompanhamento[] = [];
    funcionario!: Funcionario;
    observacao!: string;
    entregar!: boolean;
    pago!: boolean;
    situacaoPedido!: SituacaoPedido;
    formaDePagamento!: FormaDePagamento;
    valorTotal!: number;
}