import { User } from "./User";

export class Funcionario extends User {

    id!: number;
    ativo!: boolean;
    nome!: string;
    cpf!: string;
    telefone!: string;
}