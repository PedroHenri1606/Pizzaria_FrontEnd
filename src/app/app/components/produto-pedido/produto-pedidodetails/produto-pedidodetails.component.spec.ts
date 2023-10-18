import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPedidodetailsComponent } from './produto-pedidodetails.component';

describe('ProdutoPedidodetailsComponent', () => {
  let component: ProdutoPedidodetailsComponent;
  let fixture: ComponentFixture<ProdutoPedidodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoPedidodetailsComponent]
    });
    fixture = TestBed.createComponent(ProdutoPedidodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
