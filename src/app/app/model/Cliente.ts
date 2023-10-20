import { User } from "./User";

export class Cliente extends User{

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    nome!: string;  
    cpf!: string;
    telefone!: string;
}