import { Produto } from "../produto/Produto";
import { Sabor } from "../sabor/Sabor";

export class ProdutoPedido {

    id!: number;
    produto!: Produto;
    quantidade!: number;
    observacao!: string;
    sabores: Sabor[] = []; 
}