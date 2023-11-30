import { Acompanhamento } from "../acompanhamento/Acompanhamento";
import { Cliente } from "../cliente/Cliente";
import { Endereco } from "../endereco/Endereco";
import { Funcionario } from "../funcionario/Funcionario";
import { ProdutoPedido } from "../produtoPedido/ProdutoPedido";
import { SituacaoPedido } from "../enum/SituacaoPedido";

export class Pedido{

    id!: number;
    ativo!: boolean;
    cliente!: Cliente;
    item: ProdutoPedido[] = [];
    acompanhamento: Acompanhamento[] = [];
    enderecoEntrega!: Endereco;
    funcionario!: Funcionario;
    observacao!: string;
    entregar: boolean = false;
    pago!: boolean;
    situacaoPedido!: SituacaoPedido;
    formaDePagamento: string = "PIX";
    valorTotal: number = 0;
}