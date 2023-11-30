import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidolistComponent } from './pedidolist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PedidolistComponent', () => {
  let component: PedidolistComponent;
  let fixture: ComponentFixture<PedidolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidolistComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PedidolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });
});
