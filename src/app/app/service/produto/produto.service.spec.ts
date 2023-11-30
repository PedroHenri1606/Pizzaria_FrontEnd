import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ProdutoService } from './produto.service';
import { Produto } from '../../model/produto/Produto';
import { TamanhoProduto } from '../../model/enum/TamanhoProduto';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ProdutoService]
    });
    service = TestBed.inject(ProdutoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve listar todos os sabores via GET', () => {
    let produto = new Produto();
    produto.ativo = true;
    produto.descricao= "chocolate";
    produto.id=1;
    produto.valor=12;
    
    const mockProdutos: Produto[] = [produto];

    service.listar().subscribe(sabores => {
      expect(sabores).toEqual(mockProdutos);
    });

    const req = httpMock.expectOne(service.API+"/listar");
    expect(req.request.method).toBe('GET');
    req.flush(mockProdutos);
  });

  it('deve criar um produto via POST', () => {
    const mockProduto: Produto = {
      id: 1,
      descricao: '',
      ativo: true,
      valor: 0,
      tamanho: TamanhoProduto.BROTINHO
    };

    service.cadastrar(mockProduto).subscribe(sabor => {
      expect(sabor).toEqual(mockProduto);
    });

    const req = httpMock.expectOne(service.API);
    expect(req.request.method).toBe('POST');
    req.flush(mockProduto);
  });

  it('deve atualizar um produto via PUT', () => {
    const mockProduto: Produto = {
        id: 1,
        descricao: '',
        ativo: true,
        valor: 0,
        tamanho: TamanhoProduto.GG
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