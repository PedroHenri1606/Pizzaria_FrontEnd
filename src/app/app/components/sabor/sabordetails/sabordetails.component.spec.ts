import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SabordetailsComponent } from './sabordetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Sabor } from 'src/app/app/model/Sabor';
import { SaborService } from 'src/app/app/service/sabor/sabor.service';
import { By } from '@angular/platform-browser';

describe('SabordetailsComponent', () => {
  let component: SabordetailsComponent;
  let fixture: ComponentFixture<SabordetailsComponent>;

  let saborService: SaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SabordetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(SabordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let sabor = new Sabor();
    sabor.ativo = true;
    sabor.descricao = "Chocolate";
    sabor.id = 1;
    sabor.nome = "Chocolate";

    saborService = TestBed.inject(SaborService);

    component.sabor = sabor;
    fixture.detectChanges();
  })

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste 1 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual("Chocolate");
  });

  it('Teste 2 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="descricao"]'));
    expect(elemento.nativeElement.ngModel).toEqual("Chocolate");
  });

  it('Teste 3 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="situacao"]'));
    expect(elemento.nativeElement.ngModel).toEqual(true);
  });

  it('Teste 4 / Deve chamar o método salvar ao enviar o formulário', fakeAsync(() => { 
    let spy = spyOn(saborService, 'salvar').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));

    tick(); 
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('Teste 5 / Deve chamar o método salvar ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(saborService, 'salvar').and.callThrough();

    let sabor = new Sabor();
    sabor.descricao = "Chocolate";
    component.sabor = sabor;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(sabor);
  }));
});
