import { Cliente } from "./Cliente";

describe('Cliente', () => {
  it('should create an instance', () => {
    expect(new Cliente()).toBeTruthy();
  });
  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente();
  });

  it('deve inicializar id corretamente', () => {
    const id = 1;
    cliente.id = id;
    expect(cliente.id).toEqual(id);
  });

  it('deve inicializar ativo corretamente', () => {
    const ativo = true;
    cliente.ativo = ativo;
    expect(cliente.ativo).toEqual(ativo);
  });

  it('deve inicializar nome corretamente', () => {
    const nome = "";
    cliente.nome = nome;
    expect(cliente.nome).toEqual(nome);
  });
  
  it('deve inicializar cpf corretamente', () => {
    const cpf = "";
    cliente.cpf = cpf;
    expect(cliente.cpf).toEqual(cpf);
  });

  it('deve inicializar telefone corretamente', () => {
    const telefone = "";
    cliente.telefone = telefone;
    expect(cliente.telefone).toEqual(telefone);
  });
});