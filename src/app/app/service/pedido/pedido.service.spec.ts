import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { PedidoService } from './pedido.service';
import { LoginService } from '../login/login.service';
import { Pedido } from '../../model/pedido/Pedido';
import { Cliente } from '../../model/cliente/Cliente';
import { Funcionario } from '../../model/funcionario/Funcionario';
import { SituacaoPedido } from '../../model/enum/SituacaoPedido';

describe('PedidoService', () => {
  let service: PedidoService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [LoginService]
    });
    service = TestBed.inject(PedidoService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve listar todos os sabores via GET', () => {
    let pedido = new Pedido();
    let cliente = new Cliente();
    let funcionario = new Funcionario();

    pedido.acompanhamento = [];
    pedido.ativo = true;
    pedido.cliente = cliente;
    pedido.enderecoEntrega = cliente.enderecos[0];
    pedido.entregar = true;
    pedido.formaDePagamento = "PIX";
    pedido.funcionario = funcionario;
    pedido.id = 1;
    pedido.item = [];
    pedido.observacao = '';
    pedido.pago = true;
    pedido.situacaoPedido = SituacaoPedido.EM_ABERTO;
    pedido.valorTotal = 1;
    
    const mockProdutos: Pedido[] = [pedido];

    service.listar().subscribe(sabores => {
      expect(sabores).toEqual(mockProdutos);
    });

    const req = httpMock.expectOne(service.API+"/listar");
    expect(req.request.method).toBe('GET');
    req.flush(mockProdutos);
  });

  it('deve criar um produto via POST', () => {
    let cliente = new Cliente();
    let funcionario = new Funcionario();

    const mockProduto: Pedido = {
 

        acompanhamento : [],
        ativo : true,
        cliente : cliente,
        enderecoEntrega : cliente.enderecos[0],
        entregar : true,
        formaDePagamento : "PIX",
        funcionario : funcionario,
        id : 1,
        item : [],
        observacao : '',
        pago : true,
        situacaoPedido : SituacaoPedido.EM_ABERTO,
        valorTotal : 1
    };

    service.cadastrar(mockProduto).subscribe(sabor => {
      expect(sabor).toEqual(mockProduto);
    });

    const req = httpMock.expectOne(service.API);
    expect(req.request.method).toBe('POST');
    req.flush(mockProduto);
  });

  it('deve atualizar um produto via PUT', () => {
    let cliente = new Cliente();
    let funcionario = new Funcionario();

    const mockProduto: Pedido = {
 

        acompanhamento : [],
        ativo : true,
        cliente : cliente,
        enderecoEntrega : cliente.enderecos[0],
        entregar : true,
        formaDePagamento : "PIX",
        funcionario : funcionario,
        id : 1,
        item : [],
        observacao : '',
        pago : true,
        situacaoPedido : SituacaoPedido.EM_ABERTO,
        valorTotal : 1
    };

    service.editar(mockProduto).subscribe(sabor => {
      expect(sabor).toEqual(mockProduto);
    });

    const req = httpMock.expectOne(`${service.API}/editar?id=${mockProduto.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockProduto);
  });

});