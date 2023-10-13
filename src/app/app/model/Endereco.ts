import { AbstractEntity } from "./abstractEntity/AbstractEntity";
import { Cliente } from "./Cliente";

export class Endereco extends AbstractEntity{

    cep!: string;
    bairro!: string;
    logadouro!: string;
    numero!: number;
    cliente!: Cliente;

    constructor(id: number, cep: string, bairro: string, logadouro: string, numero: number, cliente: Cliente){
        super(id);
        this.cep = cep;
        this.bairro = bairro;
        this.logadouro = logadouro;
        this.numero = numero;
        this.cliente = cliente;
    }
}