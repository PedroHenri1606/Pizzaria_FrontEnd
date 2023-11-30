import { Produto } from "../produto/Produto";
import { Sabor } from "../sabor/Sabor";
import { ProdutoPedido } from "./ProdutoPedido";


describe('ProdutoPedido', () => {
  it('should create an instance', () => {
    expect(new ProdutoPedido()).toBeTruthy();
  });
  let produtoPedido: ProdutoPedido;

  beforeEach(() => {
    produtoPedido = new ProdutoPedido();
  });

  it('deve inicializar id corretamente', () => {
    const id = 1;
    produtoPedido.id = id;
    expect(produtoPedido.id).toEqual(id);
  });

  it('deve inicializar produto corretamente', () => {
    const produto = new Produto();
    produtoPedido.produto = produto;
    expect(produtoPedido.produto).toEqual(produto);
  });

  it('deve inicializar quantidade corretamente', () => {
    const quantidade = 1;
    produtoPedido.quantidade = quantidade;
    expect(produtoPedido.quantidade).toEqual(quantidade);
  });

  it('deve inicializar observacao corretamente', () => {
    const observacao = 'Calabresa';
    produtoPedido.observacao = observacao;
    expect(produtoPedido.observacao).toEqual(observacao);
  });

  it('deve inicializar sabores corretamente', () => {
    let sabor = new Sabor();

    const sabores = [sabor];
    produtoPedido.sabores = sabores;
    expect(produtoPedido.sabores).toEqual(sabores);
  });
});