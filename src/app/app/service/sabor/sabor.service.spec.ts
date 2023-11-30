import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { SaborService } from './sabor.service';
import { Sabor } from '../../model/sabor/Sabor';

describe('SaborService', () => {
  let service: SaborService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [SaborService]
    });

    service = TestBed.inject(SaborService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve listar todos os sabores via GET', () => {
    let sabor = new Sabor();
    sabor.ativo = true;
    sabor.descricao= "chocolate";
    sabor.id=1;
    sabor.nome="chocolate";
    
    const mockSabores: Sabor[] = [sabor];

    service.listar().subscribe(sabores => {
      expect(sabores).toEqual(mockSabores);
    });

    const req = httpMock.expectOne(service.API+"/listar");
    expect(req.request.method).toBe('GET');
    req.flush(mockSabores);
  });

  it('deve criar um sabor via POST', () => {
    const mockSabor: Sabor = {
      id: 1,
      descricao: '',
      ativo: true,
      nome: ''
    };

    service.cadastrar(mockSabor).subscribe(sabor => {
      expect(sabor).toEqual(mockSabor);
    });

    const req = httpMock.expectOne(service.API);
    expect(req.request.method).toBe('POST');
    req.flush(mockSabor);
  });

  it('deve atualizar um sabor via PUT', () => {
    const mockSabor: Sabor = {
        id: 1,
        descricao: '',
        ativo: true,
        nome: ''
    };

    service.editar(mockSabor).subscribe(sabor => {
      expect(sabor).toEqual(mockSabor);
    });

    const req = httpMock.expectOne(`${service.API}/editar?id=${mockSabor.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockSabor);
  });

  it('deve deletar um sabor via DELETE', () => {
    const saborId = 1;

    service.deletar(saborId).subscribe();

    const req = httpMock.expectOne(`${service.API}/deletar?id=${saborId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

});