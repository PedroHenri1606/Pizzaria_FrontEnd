import { Produto } from "./Produto";
import { Sabor } from "./Sabor";

export class ProdutoPedido {

    id!: number;
    produto!: Produto;
    quantidade!: number;
    observacao!: string;
    sabores: Sabor[] = []; 
}