import { Acompanhamento } from "../acompanhamento/Acompanhamento";
import { Cliente } from "../cliente/Cliente";
import { Endereco } from "../endereco/Endereco";
import { SituacaoPedido } from "../enum/SituacaoPedido";
import { Funcionario } from "../funcionario/Funcionario";
import { ProdutoPedido } from "../produtoPedido/ProdutoPedido";
import { Pedido } from "./Pedido";


describe('Pedido', () => {
  it('should create an instance', () => {
    expect(new Pedido()).toBeTruthy();
  });
  let pedido: Pedido;

  beforeEach(() => {
    pedido = new Pedido();
  });

  it('deve inicializar id corretamente', () => {
    const id = 1;
    pedido.id = id;
    expect(pedido.id).toEqual(id);
  });

  it('deve inicializar ativo corretamente', () => {
    const ativo = true;
    pedido.ativo = ativo;
    expect(pedido.ativo).toEqual(ativo);
  });

  it('deve inicializar cliente corretamente', () => {
    let cliente = new Cliente();

    const clientePedido = cliente;
    pedido.cliente = cliente;
    expect(pedido.cliente).toEqual(cliente);
  });

  it('deve inicializar item corretamente', () => {
    let itemPedido = new ProdutoPedido();

    const item = [itemPedido];
    pedido.item = item;
    expect(pedido.item).toEqual(item);
  });

  it('deve inicializar acompanhamento corretamente', () => {
    let acompanhamentoPedido = new Acompanhamento();

    const acompanhamento = [acompanhamentoPedido]
    pedido.acompanhamento = acompanhamento;
    expect(pedido.acompanhamento).toEqual(acompanhamento);
  });

  it('deve inicializar endereco corretamente', () => {
    let endereco = new Endereco();

    const enderecoPedido = endereco;
    pedido.enderecoEntrega = enderecoPedido;
    expect(pedido.enderecoEntrega).toEqual(enderecoPedido);
  });

  it('deve inicializar funcionario corretamente', () => {
    let funcionario = new Funcionario();

    const funcionarioPedido = funcionario;
    pedido.funcionario = funcionario;
    expect(pedido.funcionario).toEqual(funcionario);
  });

  it('deve inicializar observacao corretamente', () => {
    const observacao = '';
    pedido.observacao = observacao;
    expect(pedido.observacao).toEqual(observacao);
  });

  it('deve inicializar entregar corretamente', () => {
    const entregar = true;
    pedido.entregar = entregar;
    expect(pedido.entregar).toEqual(entregar);
  });

  it('deve inicializar pago corretamente', () => {
    const pago = true;
    pedido.pago = pago;
    expect(pedido.pago).toEqual(pago);
  });

  it('deve inicializar situacaoPedido corretamente', () => {
    const situacaoPedido = SituacaoPedido.EM_ABERTO;
    pedido.situacaoPedido = situacaoPedido;
    expect(pedido.situacaoPedido).toEqual(situacaoPedido);
  });

  it('deve inicializar formaPagamento corretamente', () => {
    const formaPagamento = '';
    pedido.formaDePagamento = formaPagamento;
    expect(pedido.formaDePagamento).toEqual(formaPagamento);
  });

  it('deve inicializar valorTotal corretamente', () => {
    const valorTotal = 10;
    pedido.valorTotal = valorTotal;
    expect(pedido.valorTotal).toEqual(valorTotal);
  });
});