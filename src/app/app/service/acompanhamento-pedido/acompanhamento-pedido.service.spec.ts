import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AcompanhamentoPedidoService } from './acompanhamento-pedido.service';
import { AcompanhamentoPedido } from '../../model/acompanhamentoPedido/AcompanhamentoPedido';
import { Acompanhamento } from '../../model/acompanhamento/Acompanhamento';

describe('AcompanhamentoPedidoService', () => {
  let service: AcompanhamentoPedidoService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AcompanhamentoPedidoService]
    });
    service = TestBed.inject(AcompanhamentoPedidoService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve listar todos os sabores via GET', () => {
    let acompanhamentoPedido = new AcompanhamentoPedido();
    let acompanhamento = new Acompanhamento();

    acompanhamentoPedido.acompanhamento = acompanhamento;
    acompanhamentoPedido.id= 1;
    acompanhamentoPedido.observacao= '';
    acompanhamentoPedido.quantidade= 1;
    
    const mockAcompanhamentos: AcompanhamentoPedido[] = [acompanhamentoPedido];

    service.listar().subscribe(sabores => {
      expect(sabores).toEqual(mockAcompanhamentos);
    });

    const req = httpMock.expectOne(service.API+"/listar");
    expect(req.request.method).toBe('GET');
    req.flush(mockAcompanhamentos);
  });

 
  it('deve atualizar um produto via PUT', () => {
    let acompanhamento = new Acompanhamento();

        const mockAcompanhamento: AcompanhamentoPedido = {
        acompanhamento: acompanhamento,
        id: 1,
        observacao: '',
        quantidade: 0,
    };

    service.editar(mockAcompanhamento).subscribe(sabor => {
      expect(sabor).toEqual(mockAcompanhamento);
    });

    const req = httpMock.expectOne(`${service.API}/editar?id=${mockAcompanhamento.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockAcompanhamento);
  });

  it('deve deletar um sabor via DELETE', () => {
    const saborId = 1;

    service.deletar(saborId).subscribe();

    const req = httpMock.expectOne(`${service.API}/deletar?id=${saborId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});