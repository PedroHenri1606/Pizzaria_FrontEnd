export class Acompnhamento {

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;
    descricao!: string;
    valor!: number;

    constructor(id: number, descricao: string, valor: number){
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    }
}