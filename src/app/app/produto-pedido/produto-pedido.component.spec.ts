import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPedidoComponent } from './produto-pedido.component';

describe('ProdutoPedidoComponent', () => {
  let component: ProdutoPedidoComponent;
  let fixture: ComponentFixture<ProdutoPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoPedidoComponent]
    });
    fixture = TestBed.createComponent(ProdutoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
