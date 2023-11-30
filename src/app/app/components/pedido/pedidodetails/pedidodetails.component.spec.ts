import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PedidodetailsComponent } from './pedidodetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PedidoService } from 'src/app/app/service/pedido/pedido.service';
import { Pedido } from 'src/app/app/model/Pedido';
import { SituacaoPedido } from 'src/app/app/model/enum/SituacaoPedido';
import { Acompanhamento } from 'src/app/app/model/Acompanhamento';
import { Cliente } from 'src/app/app/model/Cliente';
import { Endereco } from 'src/app/app/model/Endereco';
import { Funcionario } from 'src/app/app/model/Funcionario';
import { Produto } from 'src/app/app/model/Produto';
import { TamanhoProduto } from 'src/app/app/model/enum/TamanhoProduto';
import { ProdutoPedido } from 'src/app/app/model/ProdutoPedido';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

describe('PedidodetailsComponent', () => {
  let component: PedidodetailsComponent;
  let fixture: ComponentFixture<PedidodetailsComponent>;

  let pedidoService: PedidoService;
  let pedidoComponent: PedidodetailsComponent;
  let modalService: NgbModal;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidodetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PedidodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {

    let acompanhamento = new Acompanhamento();
    acompanhamento.ativo = true;
    acompanhamento.descricao = "Coca Cola 1L";
    acompanhamento.id = 1;
    acompanhamento.valor = 12;

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
    cliente.enderecos = [endereco];

    let funcionario = new Funcionario();
    funcionario.idFuncionario = 1;
    funcionario.ativo = true;
    funcionario.nome = "Pedro Henrique";
    funcionario.cpf = "10250870975";
    funcionario.telefone= "45998265476";

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


    let pedido = new Pedido();
    pedido.acompanhamento = [acompanhamento];
    pedido.ativo=true;
    pedido.cliente = cliente;
    pedido.enderecoEntrega = endereco;
    pedido.entregar=true;
    pedido.formaDePagamento = "PIX"
    pedido.funcionario = funcionario;
    pedido.id=1;
    pedido.item = [produtoPedido];
    pedido.observacao = "Sem cebola";
    pedido.pago=false;
    pedido.situacaoPedido = SituacaoPedido.EM_ABERTO;
    pedido.valorTotal = 100;

    pedidoService = TestBed.inject(PedidoService);

    const httpSpy = TestBed.inject(HttpClient);
    spyOn(httpSpy, 'post').and.returnValue(of(pedido));
    spyOn(httpSpy, 'put').and.returnValue(of(pedido));

    component.pedido = pedido;
    fixture.detectChanges();

  })

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste 1 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="Cliente"]'));
    expect(elemento.nativeElement.ngModel).toEqual("");
  });

  it('Teste 2 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="Funcionario"]'));
    expect(elemento.nativeElement.ngModel).toEqual("");
  });

  it('Teste 3 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="logadouro"]'));
    expect(elemento.nativeElement.ngModel).toEqual("");
  });

  it('Teste 4 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="endereco"]'));
    expect(elemento.nativeElement.ngModel).toEqual(0);
  });

  it('Teste 5 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="bairro"]'));
    expect(elemento.nativeElement.ngModel).toEqual("");
  });

  it('Teste 6 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="entregar"]'));
    expect(elemento.nativeElement.ngModel).toEqual(true);
  });

  it('Teste 7 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="situacao"]'));
    expect(elemento.nativeElement.ngModel).toEqual("PIX");
  });

  it('Teste 8 / @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="descricao"]'));
    expect(elemento.nativeElement.ngModel).toEqual("Sem cebola");
  });

  it('Teste 9 / Deve chamar o método salvar ao enviar o formulário', fakeAsync(() => { 
    let spy = spyOn(pedidoService, 'salvar').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));

    tick(); 
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('Teste 10 / Deve chamar o método salvar ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(pedidoService, 'salvar').and.callThrough();

    let pedido = new Pedido();
    pedido.entregar = true;
    component.pedido = pedido;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(pedido);
  }));

  it('Teste 11 / deve excluir um produto corretamente', () => {
    component.pedido.item = [new ProdutoPedido(), new ProdutoPedido()];

    component.excluirProduto(0);

    expect(component.pedido.item.length).toBe(1);
  });

  it('Teste 12 / deve detalhar um produto corretamente', () => {
    spyOn(console, 'log'); 

    component.detalharProdutoPedido('modal');

    expect(console.log).toHaveBeenCalledWith(component.pedido.item);
  });

  it('Teste 13 / deve excluir um acompanhamento corretamente', () => {
    component.pedido.acompanhamento = [new Acompanhamento()];

    component.excluirProduto(0);

    expect(component.pedido.item.length).toBe(0);
  });

});
