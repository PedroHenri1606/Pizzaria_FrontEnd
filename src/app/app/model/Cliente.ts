import { User } from "./User";

export class Cliente extends User{

    nome!: string;  
    cpf!: string;
    telefone!: string;

    constructor(id: number, email: string, senha: string, nome: string, cpf: string, telefone: string){
        super(id, email, senha);
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}