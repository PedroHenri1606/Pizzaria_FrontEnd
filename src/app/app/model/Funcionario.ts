import { User } from "./User";

export class Funcionario extends User {

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    nome!: string;
    cpf!: string;
    telefone!: string;
}