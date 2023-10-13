import { AbstractEntity } from "./abstractEntity/AbstractEntity";

export class Acompnhamento extends AbstractEntity {

    descricao!: string;
    valor!: number;

    constructor(id: number, descricao: string, valor: number){
        super(id);
        this.descricao = descricao;
        this.valor = valor;
    }
}