import { Endereco } from "./Endereco";

export class Cliente{

    id!: number;
    ativo!: boolean;
    nome!: string;  
    cpf!: string;
    telefone!: string;
    enderecos: Endereco[] = [];
}