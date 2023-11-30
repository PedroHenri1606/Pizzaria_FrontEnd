import { Acompanhamento } from "../acompanhamento/Acompanhamento";

describe('Acompanhamento', () => {
  it('should create an instance', () => {
    expect(new Acompanhamento()).toBeTruthy();
  });
  let acompanhamento: Acompanhamento;

  beforeEach(() => {
    acompanhamento = new Acompanhamento();
  });

  it('deve inicializar id corretamente', () => {
    const id = 1;
    acompanhamento.id = id;
    expect(acompanhamento.id).toEqual(id);
  });

  it('deve inicializar ativo corretamente', () => {
    const ativo = true;
    acompanhamento.ativo = ativo;
    expect(acompanhamento.ativo).toEqual(ativo);
  });

  it('deve inicializar descricao corretamente', () => {
    const descricao = '';
    acompanhamento.descricao = descricao;
    expect(acompanhamento.descricao).toEqual(descricao);
  });
  
  it('deve inicializar observacao corretamente', () => {
    const valor = 1;
    acompanhamento.valor = valor;
    expect(acompanhamento.valor).toEqual(valor);
  });
});