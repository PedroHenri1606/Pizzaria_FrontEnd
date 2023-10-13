import { AcompnhamentoPedido } from "./AcompanhamentoPedido";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";
import { ProdutoPedido } from "./ProdutoPedido";
import { FormaDePagamento } from "./enum/FormaDePagamento";
import { SituacaoPedido } from "./enum/SituacaoPedido";

export class Pedido{

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    cliente!: Cliente;
    item: ProdutoPedido[] = [];
    acompanhamento: AcompnhamentoPedido[] = [];
    funcionario!: Funcionario;
    observacao!: string;
    entregar!: boolean;
    pago!: boolean;
    situacaoPedido!: SituacaoPedido;
    formaDePagamento!: FormaDePagamento;
    valorTotal!: number;

    constructor(id: number, cliente: Cliente, funcionario: Funcionario, observacao: string, entregar: boolean, formaDePagamento: FormaDePagamento){
        this.id = id;
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.observacao = observacao;
        this.entregar = entregar;
        this.formaDePagamento = formaDePagamento;
    }

}