import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { EnderecoService } from './endereco.service';
import { Endereco } from '../../model/endereco/Endereco';

describe('EnderecoService', () => {
  let service: EnderecoService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [EnderecoService]
    });
    service = TestBed.inject(EnderecoService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve listar todos os enderecos via GET', () => {
    let endereco = new Endereco();
    endereco.bairro = "";
    endereco.cep= "";
    endereco.id=1;
    endereco.logadouro="",
    endereco.numero = 1;
    
    const mockEnderecos: Endereco[] = [endereco];

    service.listar().subscribe(enderecos => {
      expect(enderecos).toEqual(mockEnderecos);
    });

    const req = httpMock.expectOne(service.API+"/listar");
    expect(req.request.method).toBe('GET');
    req.flush(mockEnderecos);
  });

  it('deve criar um endereco via POST', () => {
    const mockEndereco: Endereco = {
      id: 1,
      bairro: '',
      cep: '',
      logadouro: '',
      numero: 0,
    };

    service.cadastrar(mockEndereco).subscribe(cliente => {
      expect(cliente).toEqual(mockEndereco);
    });

    const req = httpMock.expectOne(service.API);
    expect(req.request.method).toBe('POST');
    req.flush(mockEndereco);
  });

  it('deve atualizar um endereco via PUT', () => {
    const mockEndereco: Endereco = {
        id: 1,
        bairro: '',
        cep: '',
        logadouro: '',
        numero: 0,
    };

    service.editar(mockEndereco).subscribe(cliente => {
      expect(cliente).toEqual(mockEndereco);
    });

    const req = httpMock.expectOne(`${service.API}/editar?id=${mockEndereco.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockEndereco);
  });

  it('deve deletar um endereco via DELETE', () => {
    const enderecoId = 1;

    service.deletar(enderecoId).subscribe();

    const req = httpMock.expectOne(`${service.API}/deletar?id=${enderecoId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});