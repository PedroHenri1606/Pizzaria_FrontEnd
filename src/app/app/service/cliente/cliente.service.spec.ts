import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ClienteService } from './cliente.service';
import { Cliente } from '../../model/cliente/Cliente';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ClienteService]
    });
    service = TestBed.inject(ClienteService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve listar todos os clientes via GET', () => {
    let cliente = new Cliente();
    cliente.ativo = true;
    cliente.cpf= "";
    cliente.id=1;
    cliente.nome="";
    
    const mockClientes: Cliente[] = [cliente];

    service.listar().subscribe(clientes => {
      expect(clientes).toEqual(mockClientes);
    });

    const req = httpMock.expectOne(service.API+"/listar");
    expect(req.request.method).toBe('GET');
    req.flush(mockClientes);
  });

  it('deve criar um cliente via POST', () => {
    const mockCliente: Cliente = {
      id: 1,
      cpf: '',
      ativo: true,
      nome: '',
      telefone: '',
      idCliente: 1,
      enderecos: [],
      username: '',
      role: '',
      token: ''
    };

    service.cadastrar(mockCliente).subscribe(cliente => {
      expect(cliente).toEqual(mockCliente);
    });

    const req = httpMock.expectOne(service.API);
    expect(req.request.method).toBe('POST');
    req.flush(mockCliente);
  });

  it('deve atualizar um cliente via PUT', () => {
    const mockCliente: Cliente = {
        id: 1,
        cpf: '',
        ativo: true,
        nome: '',
        telefone: '',
        idCliente: 1,
        enderecos: [],
        username: '',
        role: '',
        token: ''
    };

    service.editar(mockCliente).subscribe(cliente => {
      expect(cliente).toEqual(mockCliente);
    });

    const req = httpMock.expectOne(`${service.API}/editar?id=${mockCliente.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockCliente);
  });

  it('deve deletar um cliente via DELETE', () => {
    const clienteId = 1;

    service.deletar(clienteId).subscribe();

    const req = httpMock.expectOne(`${service.API}/deletar?id=${clienteId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});