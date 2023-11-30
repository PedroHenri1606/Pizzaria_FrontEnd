import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ClientedetailsComponent } from './clientedetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ClienteService } from 'src/app/app/service/cliente/cliente.service';
import { Cliente } from 'src/app/app/model/Cliente';
import { Endereco } from 'src/app/app/model/Endereco';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ClientedetailsComponent', () => {
  let component: ClientedetailsComponent;
  let fixture: ComponentFixture<ClientedetailsComponent>;

  let clienteService: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientedetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ClientedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let endereco = new Endereco;
    endereco.bairro = "Morumbi 2";
    endereco.cep= "85859340";
    endereco.id= 1;
    endereco.logadouro="Belmiro";
    endereco.numero=2;

    let cliente = new Cliente();
    cliente.idCliente = 1;
    cliente.ativo = true;
    cliente.nome = "Pedro Henrique";
    cliente.cpf = "10250870975";
    cliente.telefone= "45998265476";
    cliente.enderecos[0] = endereco;

    clienteService = TestBed.inject(ClienteService);

    const httpSpy = TestBed.inject(HttpClient);
    spyOn(httpSpy, 'post').and.returnValue(of(cliente));
    spyOn(httpSpy, 'put').and.returnValue(of(cliente));

    component.cliente = cliente;
    fixture.detectChanges();
  })

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });

  
  it('Teste 1 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="Nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual("Pedro Henrique");
  });

  it('Teste 2 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="CPF"]'));
    expect(elemento.nativeElement.ngModel).toEqual("10250870975");
  });

  it('Teste 3 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="Telefone"]'));
    expect(elemento.nativeElement.ngModel).toEqual("45998265476");
  });

  it('Teste 4 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="situacao"]'));
    expect(elemento.nativeElement.ngModel).toEqual(true);
  });

  it('Teste 5 / @Output() retorno', fakeAsync(() => {
    let elemento = fixture.debugElement.query(By.css('button[name="botaoCadastrar"]'));
    spyOn(component.retorno, 'emit');
    elemento.triggerEventHandler('click', null);
    component.cadastrar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  it('Teste 6 / Deve chamar o método salvar ao enviar o formulário', fakeAsync(() => { 
    let spy = spyOn(clienteService, 'salvar').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));

    tick(); 
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('Teste 7 / Deve chamar o método salvar ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(clienteService, 'salvar').and.callThrough();

    let cliente = new Cliente();
    cliente.nome = 'Pedro Henrique';
    component.cliente = cliente;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(cliente);
  }));
});
