import { User } from "../user/User";

export class Funcionario extends User {

    idFuncionario!: number;
    ativo: boolean = true;
    nome!: string;
    cpf!: string;
    telefone!: string;
}