import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FuncionariodetailsComponent } from './funcionariodetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { FuncionarioService } from '../../../service/funcionario/funcionario.service';
import { Funcionario } from '../../../model/funcionario/Funcionario';

describe('FuncionariodetailsComponent', () => {
  let component: FuncionariodetailsComponent;
  let fixture: ComponentFixture<FuncionariodetailsComponent>;

  let funcionarioService: FuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariodetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(FuncionariodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let funcionario = new Funcionario();
    funcionario.idFuncionario=1;
    funcionario.ativo=true;
    funcionario.nome="Pedro Henrique";
    funcionario.telefone="45998265476";
    funcionario.cpf="10250870975";
    funcionario.role="FUNCIONARIO";

    funcionarioService = TestBed.inject(FuncionarioService);

    const httpSpy = TestBed.inject(HttpClient);
    spyOn(httpSpy, 'post').and.returnValue(of(funcionario));
    spyOn(httpSpy, 'put').and.returnValue(of(funcionario));

    component.funcionario = funcionario;
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

  it('Teste 6 / Deve chamar o método salvar ao enviar o formulário', fakeAsync(() => { 
    let spy = spyOn(funcionarioService, 'cadastrar').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));

    tick(); 
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('Teste 7 / Deve chamar o método salvar ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(funcionarioService, 'cadastrar').and.callThrough();

    let funcionario = new Funcionario();
    funcionario.nome = 'Pedro Henrique';
    component.funcionario = funcionario;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(funcionario);
  }));
});
