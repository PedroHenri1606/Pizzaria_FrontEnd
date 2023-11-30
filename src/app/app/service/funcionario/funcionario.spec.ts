import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { FuncionarioService } from './funcionario.service';
import { Funcionario } from '../../model/funcionario/Funcionario';

describe('FuncionarioService', () => {
  let service: FuncionarioService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [FuncionarioService]
    });
    service = TestBed.inject(FuncionarioService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('deve listar todos os funcionarios via GET', () => {
    let funcionario = new Funcionario();
    funcionario.ativo = true;
    funcionario.cpf= "";
    funcionario.id=1;
    funcionario.nome="";
    
    const mockFuncionarios: Funcionario[] = [funcionario];

    service.listar().subscribe(clientes => {
      expect(clientes).toEqual(mockFuncionarios);
    });

    const req = httpMock.expectOne(service.API+"/listar");
    expect(req.request.method).toBe('GET');
    req.flush(mockFuncionarios);
  });

  it('deve criar um funcionario via POST', () => {
    const mockFuncionario: Funcionario = {
      id: 1,
      cpf: '',
      ativo: true,
      nome: '',
      telefone: '',
      idFuncionario: 1,
      username: '',
      role: '',
      token: ''
    };

    service.cadastrar(mockFuncionario).subscribe(funcionario => {
      expect(funcionario).toEqual(mockFuncionario);
    });

    const req = httpMock.expectOne(service.API);
    expect(req.request.method).toBe('POST');
    req.flush(mockFuncionario);
  });

  it('deve atualizar um cliente via PUT', () => {
    const mockFuncionario: Funcionario = {
        id: 1,
        cpf: '',
        ativo: true,
        nome: '',
        telefone: '',
        idFuncionario: 1,
        username: '',
        role: '',
        token: ''
    };

    service.editar(mockFuncionario).subscribe(funcionario => {
      expect(funcionario).toEqual(mockFuncionario);
    });

    const req = httpMock.expectOne(`${service.API}/editar?id=${mockFuncionario.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockFuncionario);
  });

  it('deve deletar um funcionario via DELETE', () => {
    const funcionarioId = 1;

    service.deletar(funcionarioId).subscribe();

    const req = httpMock.expectOne(`${service.API}/deletar?id=${funcionarioId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});