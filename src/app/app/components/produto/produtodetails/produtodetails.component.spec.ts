import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProdutodetailsComponent } from './produtodetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { Produto } from 'src/app/app/model/Produto';
import { TamanhoProduto } from 'src/app/app/model/enum/TamanhoProduto';
import { ProdutoService } from 'src/app/app/service/produto/produto.service';
import { By } from '@angular/platform-browser';

describe('ProdutodetailsComponent', () => {
  let component: ProdutodetailsComponent;
  let fixture: ComponentFixture<ProdutodetailsComponent>;

  let produtoService: ProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutodetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ProdutodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let produto = new Produto();
    produto.ativo = true;
    produto.descricao = "queijo";
    produto.id = 1;
    produto.tamanho = TamanhoProduto.GG;
    produto.valor = 50;

    component.produto = produto;

    produtoService = TestBed.inject(ProdutoService);
    fixture.detectChanges();
  })

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste 1 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="descricao"]'));
    expect(elemento.nativeElement.ngModel).toEqual("queijo");
  });

  it('Teste 2 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="valor"]'));
    expect(elemento.nativeElement.ngModel).toEqual(50);
  });

  it('Teste 1 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="tamanho"]'));
    expect(elemento.nativeElement.ngModel).toEqual("GG");
  });

  it('Teste 2 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="situacao"]'));
    expect(elemento.nativeElement.ngModel).toEqual(true);
  });

  it('Teste 3 / Deve chamar o método salvar ao enviar o formulário', fakeAsync(() => { 
    let spy = spyOn(produtoService, 'salvar').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));

    tick(); 
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('Teste 4 / Deve chamar o método salvar ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(produtoService, 'salvar').and.callThrough();

    let produto = new Produto();
    produto.descricao = "queijo";
    component.produto = produto;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(produto);
  }));
});
