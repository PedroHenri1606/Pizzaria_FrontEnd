export class AbstractEntity{

    id!: number;
    cadastro!: Date;
    edicao!: Date;
    ativo!: boolean;

    constructor(id: number){
        this.id = id;
    }
}