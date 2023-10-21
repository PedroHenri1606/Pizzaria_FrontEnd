import { Cliente } from "./Cliente";

export class Endereco{

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    cep!: string;
    bairro!: string;
    logadouro!: string;
    numero!: number;
    cliente!: Cliente;


}