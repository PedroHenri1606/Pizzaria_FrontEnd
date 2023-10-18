import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoPedidolistComponent } from './acompanhamento-pedidolist.component';

describe('AcompanhamentoPedidolistComponent', () => {
  let component: AcompanhamentoPedidolistComponent;
  let fixture: ComponentFixture<AcompanhamentoPedidolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanhamentoPedidolistComponent]
    });
    fixture = TestBed.createComponent(AcompanhamentoPedidolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
