import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { AcompanhamentoService } from './acompanhamento.service';
import { Acompanhamento } from '../../model/acompanhamento/Acompanhamento';

describe('AcompanhamentoService', () => {
  let service: AcompanhamentoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AcompanhamentoService]
    });

    service = TestBed.inject(AcompanhamentoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve listar todos os sabores via GET', () => {
    let acompanhamento = new Acompanhamento();
    acompanhamento.ativo = true;
    acompanhamento.descricao= "chocolate";
    acompanhamento.id=1;
    acompanhamento.valor=12;
    
    const mockAcompanhamentos: Acompanhamento[] = [acompanhamento];

    service.listar().subscribe(sabores => {
      expect(sabores).toEqual(mockAcompanhamentos);
    });

    const req = httpMock.expectOne(service.API+"/listar");
    expect(req.request.method).toBe('GET');
    req.flush(mockAcompanhamentos);
  });

 
  it('deve atualizar um produto via PUT', () => {
        const mockAcompanhamento: Acompanhamento = {
        id: 1,
        descricao: '',
        ativo: true,
        valor: 0,
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
