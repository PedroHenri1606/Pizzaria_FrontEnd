export class User {

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    email!: string;
    senha!: string;

    constructor(id: number, email: string, senha: string){
        this.id = id;
        this.email = email;
        this.senha = senha;
    }
}