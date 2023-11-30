import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EnderecodetailsComponent } from './enderecodetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Endereco } from 'src/app/app/model/Endereco';
import { EnderecoService } from 'src/app/app/service/endereco/endereco.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('EnderecodetailsComponent', () => {
  let component: EnderecodetailsComponent;
  let fixture: ComponentFixture<EnderecodetailsComponent>;

  let enderecoService: EnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecodetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(EnderecodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() =>{
    let endereco = new Endereco;
    endereco.bairro = "Morumbi 2";
    endereco.cep= "85859340";
    endereco.id= 1;
    endereco.logadouro="Belmiro";
    endereco.numero=2;

    enderecoService = TestBed.inject(EnderecoService);
    const httpSpy = TestBed.inject(HttpClient);
    spyOn(httpSpy, 'post').and.returnValue(of(endereco));
    spyOn(httpSpy, 'put').and.returnValue(of(endereco));

    component.endereco = endereco;
    fixture.detectChanges();
  })

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste 1 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="logadouro"]'));
    expect(elemento.nativeElement.ngModel).toEqual("Belmiro");
  });

  it('Teste 2 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="bairro"]'));
    expect(elemento.nativeElement.ngModel).toEqual("Morumbi 2");
  });

  it('Teste 3 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="numero"]'));
    expect(elemento.nativeElement.ngModel).toEqual(2);
  });

  it('Teste 4 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cep"]'));
    expect(elemento.nativeElement.ngModel).toEqual("85859340");
  });

  it('Teste 5 / @Output() retorno', fakeAsync(() => {
    let elemento = fixture.debugElement.query(By.css('button[name="botaoCadastrar"]'));
    spyOn(component.retorno, 'emit');
    elemento.triggerEventHandler('click', null);
    component.cadastrar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  it('Teste 6 / Deve chamar o método salvar ao enviar o formulário', fakeAsync(() => { 
    let spy = spyOn(enderecoService, 'cadastrar').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));

    tick(); 
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('Teste 7 / Deve chamar o método salvar ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(enderecoService, 'cadastrar').and.callThrough();

    let endereco = new Endereco();
    endereco.bairro = 'Morumbi 2';
    component.endereco = endereco;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(endereco);
  }));
});
