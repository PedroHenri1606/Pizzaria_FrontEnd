import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ProdutoPedidoService } from './produto-pedido.service';
import { ProdutoPedido } from '../../model/produtoPedido/ProdutoPedido';
import { Produto } from '../../model/produto/Produto';

describe('ProdutoPedidoService', () => {
  let service: ProdutoPedidoService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ProdutoPedidoService]
    });
    service = TestBed.inject(ProdutoPedidoService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve listar todos os sabores via GET', () => {
    let produtoPedido = new ProdutoPedido();
    let produto = new Produto();

    produtoPedido.id = 1;
    produtoPedido.observacao= "";
    produtoPedido.produto= produto;
    produtoPedido.quantidade= 0;
    produtoPedido.sabores = []
    
    const mockProdutos: ProdutoPedido[] = [produtoPedido];

    service.listar().subscribe(sabores => {
      expect(sabores).toEqual(mockProdutos);
    });

    const req = httpMock.expectOne(service.API+"/listar");
    expect(req.request.method).toBe('GET');
    req.flush(mockProdutos);
  });

  it('deve criar um produto via POST', () => {
    let produto = new Produto();

    const mockProduto: ProdutoPedido = {
      id: 1,
      observacao: '',
      produto: produto,
      quantidade: 0,
      sabores: []
    };

    service.cadastrar(mockProduto).subscribe(sabor => {
      expect(sabor).toEqual(mockProduto);
    });

    const req = httpMock.expectOne(service.API);
    expect(req.request.method).toBe('POST');
    req.flush(mockProduto);
  });

  it('deve atualizar um produto via PUT', () => {
    let produto = new Produto();

    const mockProduto: ProdutoPedido = {
      id: 1,
      observacao: '',
      produto: produto,
      quantidade: 0,
      sabores: []
    };

    service.editar(mockProduto).subscribe(sabor => {
      expect(sabor).toEqual(mockProduto);
    });

    const req = httpMock.expectOne(`${service.API}/editar?id=${mockProduto.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockProduto);
  });

  it('deve deletar um sabor via DELETE', () => {
    const saborId = 1;

    service.deletar(saborId).subscribe();

    const req = httpMock.expectOne(`${service.API}/deletar?id=${saborId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});