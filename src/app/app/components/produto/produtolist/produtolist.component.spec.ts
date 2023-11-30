import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutolistComponent } from './produtolist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProdutolistComponent', () => {
  let component: ProdutolistComponent;
  let fixture: ComponentFixture<ProdutolistComponent>;

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
    fixture.detectChanges();
  });

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });
});
