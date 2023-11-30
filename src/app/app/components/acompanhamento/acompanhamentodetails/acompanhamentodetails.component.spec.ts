import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AcompanhamentodetailsComponent } from './acompanhamentodetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AcompanhamentoService } from '../../../service/acompanhamento/acompanhamento.service';
import { Acompanhamento } from '../../../model/acompanhamento/Acompanhamento';

describe('AcompanhamentodetailsComponent', () => {
  let component: AcompanhamentodetailsComponent;
  let fixture: ComponentFixture<AcompanhamentodetailsComponent>;

  let acompanhamentoService: AcompanhamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AcompanhamentodetailsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(AcompanhamentodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let acompanhamento = new Acompanhamento();
    acompanhamento.ativo = true;
    acompanhamento.descricao = "Coca Cola 1L";
    acompanhamento.id = 1;
    acompanhamento.valor = 12;

    acompanhamentoService = TestBed.inject(AcompanhamentoService);
    component.acompanhamento = acompanhamento;
    fixture.detectChanges();
  });

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste 1 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="descricao"]'));
    expect(elemento.nativeElement.ngModel).toEqual("Coca Cola 1L");
  });

  it('Teste 2 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="valor"]'));
    expect(elemento.nativeElement.ngModel).toEqual(12);
  });

  it('Teste 3 / Deve chamar o método salvar ao enviar o formulário', fakeAsync(() => { 
    let spy = spyOn(acompanhamentoService, 'salvar').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));

    tick(); 
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('Teste 4 / Deve chamar o método salvar ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(acompanhamentoService, 'salvar').and.callThrough();

    let acompanhamento = new Acompanhamento();
    acompanhamento.descricao = 'Pizza';
    component.acompanhamento = acompanhamento;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(acompanhamento);
  }));
});
