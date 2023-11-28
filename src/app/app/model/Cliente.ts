import { Endereco } from "./Endereco";
import { User } from "./User";

export class Cliente extends User{

    idCliente!: number;
    ativo: boolean = true;
    nome!: string;  
    cpf!: string;
    telefone!: string;
    enderecos: Endereco[] = [];
}