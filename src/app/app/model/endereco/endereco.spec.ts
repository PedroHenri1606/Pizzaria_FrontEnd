import { Endereco } from "./Endereco";

describe('Endereco', () => {
  it('should create an instance', () => {
    expect(new Endereco()).toBeTruthy();
  });
  let endereco: Endereco;

  beforeEach(() => {
    endereco = new Endereco();
  });

  it('deve inicializar id corretamente', () => {
    const id = 1;
    endereco.id = id;
    expect(endereco.id).toEqual(id);
  });

  it('deve inicializar cep corretamente', () => {
    const cep = '';
    endereco.cep = cep;
    expect(endereco.cep).toEqual(cep);
  });

  it('deve inicializar bairro corretamente', () => {
    const bairro = "";
    endereco.bairro = bairro;
    expect(endereco.bairro).toEqual(bairro);
  });
  
  it('deve inicializar logadouro corretamente', () => {
    const logadouro = "";
    endereco.logadouro = logadouro;
    expect(endereco.logadouro).toEqual(logadouro);
  });

  it('deve inicializar numero corretamente', () => {
    const numero = 1;
    endereco.numero = numero;
    expect(endereco.numero).toEqual(numero);
  });
});