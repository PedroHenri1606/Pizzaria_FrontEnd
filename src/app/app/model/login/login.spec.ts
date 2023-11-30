import { Login } from "./Login";

describe('Login', () => {
  it('should create an instance', () => {
    expect(new Login()).toBeTruthy();
  });
  let login: Login;

  beforeEach(() => {
    login = new Login();
  });

  it('deve inicializar username corretamente', () => {
    const username = '';
    login.username = username;
    expect(login.username).toEqual(username);
  });

  it('deve inicializar password corretamente', () => {
    const password = "";
    login.password = password;
    expect(login.password).toEqual(password);
  });

});