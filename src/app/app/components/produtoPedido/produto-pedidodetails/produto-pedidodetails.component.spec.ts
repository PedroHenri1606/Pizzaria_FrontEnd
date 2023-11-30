import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProdutoPedidodetailsComponent } from './produto-pedidodetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProdutoPedido } from 'src/app/app/model/ProdutoPedido';
import { Produto } from 'src/app/app/model/Produto';
import { TamanhoProduto } from 'src/app/app/model/enum/TamanhoProduto';
import { ProdutoPedidoService } from 'src/app/app/service/produto-pedido/produto-pedido.service';
import { By } from '@angular/platform-browser';

describe('ProdutoPedidodetailsComponent', () => {
  let component: ProdutoPedidodetailsComponent;
  let fixture: ComponentFixture<ProdutoPedidodetailsComponent>;

  let produtoPedidoService: ProdutoPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoPedidodetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ProdutoPedidodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() =>{
    let produto = new Produto();
    produto.ativo = true;
    produto.descricao = "queijo";
    produto.id = 1;
    produto.tamanho = TamanhoProduto.GG;
    produto.valor = 50;

    let produtoPedido = new ProdutoPedido();
    produtoPedido.id = 1;
    produtoPedido.observacao = "Sem queijo";
    produtoPedido.produto = produto;
    produtoPedido.quantidade = 1;

    component.produtoPedido = produtoPedido;
    fixture.detectChanges();

    produtoPedidoService = TestBed.inject(ProdutoPedidoService);
  })

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste 1 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="Produto"]'));
    expect(elemento.nativeElement.ngModel).toEqual(undefined);
  });

  it('Teste 2 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="Quantidade"]'));
    expect(elemento.nativeElement.ngModel).toEqual(1);
  });

  it('Teste 3 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="observacao"]'));
    expect(elemento.nativeElement.ngModel).toEqual("Sem queijo");
  });

  it('Teste 4 / Deve chamar o método salvar ao enviar o formulário', fakeAsync(() => { 
    let spy = spyOn(produtoPedidoService, 'salvar').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));

    tick(); 
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('Teste 5 / Deve chamar o método salvar ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(produtoPedidoService, 'salvar').and.callThrough();

    let produtoPedido = new ProdutoPedido();
    produtoPedido.observacao = "queijo";
    component.produtoPedido = produtoPedido;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(produtoPedido);
  }));
});
