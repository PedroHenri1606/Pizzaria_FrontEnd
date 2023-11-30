import { TamanhoProduto } from "../enum/TamanhoProduto";
import { Produto } from "./Produto";



describe('Produto', () => {
  it('should create an instance', () => {
    expect(new Produto()).toBeTruthy();
  });
  let produto: Produto;

  beforeEach(() => {
    produto = new Produto();
  });

  it('deve inicializar id corretamente', () => {
    const id = 1;
    produto.id = id;
    expect(produto.id).toEqual(id);
  });

  it('deve inicializar ativo corretamente', () => {
    const ativo = true;
    produto.ativo = ativo;
    expect(produto.ativo).toEqual(ativo);
  });

  it('deve inicializar descricao corretamente', () => {
    const descricao = 'aaaa';
    produto.descricao = descricao;
    expect(produto.descricao).toEqual(descricao);
  });

  it('deve inicializar valor corretamente', () => {
    const valor = 1;
    produto.valor = valor;
    expect(produto.valor).toEqual(valor);
  });

  it('deve inicializar tamanho corretamente', () => {
    const tamanho = TamanhoProduto.BROTINHO;
    produto.tamanho = tamanho;
    expect(produto.tamanho).toEqual(tamanho);
  });
});