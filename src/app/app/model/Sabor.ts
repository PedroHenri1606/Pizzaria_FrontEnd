import { ProdutoPedido } from "./ProdutoPedido";

export class Sabor {

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    nome!: string;
    descricao!: string;
    produtoPedidos: ProdutoPedido[] = [];

  
}