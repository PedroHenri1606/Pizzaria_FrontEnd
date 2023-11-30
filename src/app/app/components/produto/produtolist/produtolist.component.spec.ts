import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutolistComponent } from './produtolist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { SaborService } from '../../../service/sabor/sabor.service';
import { Produto } from '../../../model/produto/Produto';

describe('ProdutolistComponent', () => {
  let component: ProdutolistComponent;
  let fixture: ComponentFixture<ProdutolistComponent>;
  let service: SaborService;
  let modalService: NgbModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutolistComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ProdutolistComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SaborService);
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });

  it('should call listAll() on construction', () => {
    spyOn(service, 'listar').and.returnValue(of([]));

    fixture = TestBed.createComponent(ProdutolistComponent);
    component = fixture.componentInstance;

    expect(service.listar).toHaveBeenCalled();
  });

  it('should call adicionar() method successfully', () => {
    spyOn(modalService, 'open').and.callThrough();

    component.salvar('modal');

    expect(component.produtoSelecionado).toEqual(new Produto());
    expect(modalService.open).toHaveBeenCalledWith('modal', { size: 'lg' });
  });

  it('should have initial properties', () => {
    expect(component.lista).toEqual([]);
    expect(component.indiceSelecionado).toBeUndefined();
  });

  it('should set the SelecionadaParaEdicao property to a new Atributo object when the adicionar function is called', () => {
    component.salvar('modal');

    expect(component.produtoSelecionado).toBeInstanceOf(Produto);
    expect(component.produtoSelecionado).toEqual(new Produto());
  });

  it('should set the indiceSelecionadoParaEdicao property to the edited atributo index when the editar function is called', () => {
    const entity = new Produto();
    const indice = 0;

    component.editar('modal', indice, entity);

    expect(component.indiceSelecionado).toEqual(indice);
  });
});
