import { AbstractEntity } from "./abstractEntity/AbstractEntity";

export class Cliente extends AbstractEntity{

    nome!: string;
    cpf!: string;
    telefone!: string;

    constructor(id: number, nome: string, cpf: string, telefone: string){
        super(id);
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}