import { Endereco } from "../endereco/Endereco";
import { User } from "../user/User";

export class Cliente extends User{

    idCliente!: number;
    ativo: boolean = true;
    nome!: string;  
    cpf!: string;
    telefone!: string;
    enderecos: Endereco[] = [];
}