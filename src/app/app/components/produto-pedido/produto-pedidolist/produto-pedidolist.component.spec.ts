import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPedidolistComponent } from './produto-pedidolist.component';

describe('ProdutoPedidolistComponent', () => {
  let component: ProdutoPedidolistComponent;
  let fixture: ComponentFixture<ProdutoPedidolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoPedidolistComponent]
    });
    fixture = TestBed.createComponent(ProdutoPedidolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
