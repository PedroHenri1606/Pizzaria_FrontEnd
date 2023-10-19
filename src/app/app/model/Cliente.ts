import { User } from "./User";

export class Cliente extends User{

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    nome!: string;  
    cpf!: string;
    telefone!: string;

   constructor(id: number,email: string, senha: string, nome: string, cpf: string, telefone: string){
    super(email,senha),
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
   }
}