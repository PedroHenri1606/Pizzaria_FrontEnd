import { AcompanhamentoPedido } from "./AcompanhamentoPedido";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";
import { ProdutoPedido } from "./ProdutoPedido";
import { FormaDePagamento } from "./enum/FormaDePagamento";
import { SituacaoPedido } from "./enum/SituacaoPedido";

export class Pedido{

    id!: number;
    ativo!: boolean;
    cliente!: Cliente;
    item: ProdutoPedido[] = [];
    acompanhamento: AcompanhamentoPedido[] = [];
    funcionario!: Funcionario;
    observacao!: string;
    entregar!: boolean;
    pago!: boolean;
    situacaoPedido!: SituacaoPedido;
    formaDePagamento!: FormaDePagamento;
    valorTotal!: number;
}