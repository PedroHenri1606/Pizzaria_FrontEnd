import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoPedidodetailsComponent } from './acompanhamento-pedidodetails.component';

describe('AcompanhamentoPedidodetailsComponent', () => {
  let component: AcompanhamentoPedidodetailsComponent;
  let fixture: ComponentFixture<AcompanhamentoPedidodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanhamentoPedidodetailsComponent]
    });
    fixture = TestBed.createComponent(AcompanhamentoPedidodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
