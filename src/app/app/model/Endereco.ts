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

    constructor(id: number, cep: string, bairro: string, logadouro: string, numero: number, cliente: Cliente){
        this.id = id;
        this.cep = cep;
        this.bairro = bairro;
        this.logadouro = logadouro;
        this.numero = numero;
        this.cliente = cliente;
    }
}