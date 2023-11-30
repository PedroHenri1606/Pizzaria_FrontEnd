import { Sabor } from "./Sabor";

describe('Sabor', () => {
  it('should create an instance', () => {
    expect(new Sabor()).toBeTruthy();
  });
  let sabor: Sabor;

  beforeEach(() => {
    sabor = new Sabor();
  });

  it('deve inicializar id corretamente', () => {
    const id = 1;
    sabor.id = id;
    expect(sabor.id).toEqual(id);
  });

  it('deve inicializar ativo corretamente', () => {
    const ativo = true;
    sabor.ativo = ativo;
    expect(sabor.ativo).toEqual(ativo);
  });

  it('deve inicializar nome corretamente', () => {
    const nome = 'Calabresa';
    sabor.nome = nome;
    expect(sabor.nome).toEqual(nome);
  });

  it('deve inicializar componentes corretamente', () => {
    const descricao = 'Calabresa';
    sabor.descricao = descricao;
    expect(sabor.descricao).toEqual(descricao);
  });
});