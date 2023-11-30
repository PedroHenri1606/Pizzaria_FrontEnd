import { Funcionario } from "./Funcionario";

describe('Funcionario', () => {
  it('should create an instance', () => {
    expect(new Funcionario()).toBeTruthy();
  });
  let funcionario: Funcionario;

  beforeEach(() => {
    funcionario = new Funcionario();
  });

  it('deve inicializar id corretamente', () => {
    const id = 1;
    funcionario.id = id;
    expect(funcionario.id).toEqual(id);
  });

  it('deve inicializar ativo corretamente', () => {
    const ativo = true;
    funcionario.ativo = ativo;
    expect(funcionario.ativo).toEqual(ativo);
  });

  it('deve inicializar nome corretamente', () => {
    const nome = "";
    funcionario.nome = nome;
    expect(funcionario.nome).toEqual(nome);
  });
  
  it('deve inicializar cpf corretamente', () => {
    const cpf = "";
    funcionario.cpf = cpf;
    expect(funcionario.cpf).toEqual(cpf);
  });

  it('deve inicializar telefone corretamente', () => {
    const telefone = "";
    funcionario.telefone = telefone;
    expect(funcionario.telefone).toEqual(telefone);
  });

});