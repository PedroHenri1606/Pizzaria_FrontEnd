import { Acompanhamento } from "../acompanhamento/Acompanhamento";
import { AcompanhamentoPedido } from "./AcompanhamentoPedido";

describe('AcompanhamentoPedido', () => {
  it('should create an instance', () => {
    expect(new AcompanhamentoPedido()).toBeTruthy();
  });
  let acompanhamentoPedido: AcompanhamentoPedido;

  beforeEach(() => {
    acompanhamentoPedido = new AcompanhamentoPedido();
  });

  it('deve inicializar id corretamente', () => {
    const id = 1;
    acompanhamentoPedido.id = id;
    expect(acompanhamentoPedido.id).toEqual(id);
  });

  it('deve inicializar acompanhamento corretamente', () => {
    let acompanhamento = new Acompanhamento;

    const acompanhamentolist = acompanhamento;
    acompanhamentoPedido.acompanhamento = acompanhamentolist;
    expect(acompanhamentoPedido.acompanhamento).toEqual(acompanhamento);
  });

  it('deve inicializar quantidade corretamente', () => {
    const quantidade = 1;
    acompanhamentoPedido.quantidade = quantidade;
    expect(acompanhamentoPedido.quantidade).toEqual(quantidade);
  });
  
  it('deve inicializar observacao corretamente', () => {
    const observacao = "";
    acompanhamentoPedido.observacao = observacao;
    expect(acompanhamentoPedido.observacao).toEqual(observacao);
  });
});